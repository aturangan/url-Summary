const express = require('express');
const bodyParser = require('body-parser');
const request = require('request'); 
const axios = require('axios'); 
const Crawler = require('crawler');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/scrape', function (request, response) {

  const url = request.body.input; 
  let wordFrequencies = {}; 

  //getting the html data from the page
  let c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
      if (error) {
        console.log(error); 
        response.send([{ word: 'Sorry, I tried a few times ' + '\n' + ' but couldn\'t find ' + '\n' + ' any data' }]);
      } else {
        let $ = res.$; 
      
        //taking the text that I think is most likely important
        let spanWords = $('span').text().split(' '); 
        let h1Words = $('h1').text().split(' ');
        let h2Words = $('h2').text().split(' '); 
        let title = $('title').text().split(' '); 
        let p = $('p').text().split(' '); 

        let freqPairs = []; 

        let countWordFrequencies = (words) => {
          for (let i = 0; i < words.length; i++) {
            let current = words[i]; 
            const ignore = ['a', 'the', 'where', 'how', 'I', 'but', 'and', 'when', 'like',
            'for', 'that', 'it', 'you', 'your', 'my', 'his', 'her', 'they', 'them', 'with', 'too'];

            current = current.trim().replace(/(\r\n\t|\n|\r|\t)/gm,"").replace(/[^\w\s]/gi, '');

            if (typeof current.split(/ /)[0].replace(/[^\d]/g, '') === 'number') {
              continue; 
            }

            //filtering out spaces, small words, prices, numbers
            if (current === ' ' || current.length <= 2 || 
              current[0] === '$' || current == parseInt(current)) {
              continue; 
            }

            if (ignore.includes(current.toLowerCase())) {
              continue; 
            }

            //adding to word frequencies hash
            if (!wordFrequencies[current]) {
              wordFrequencies[current] = 1; 
            } else {
              wordFrequencies[current]++; 
            }

            //giving more weight to upper case words
            if (current[0]) {
              if (current[0] === current[0].toUpperCase()) {
                wordFrequencies[current] += 3; 
              }
            } else {
              continue; 
            }
          }
        };

        countWordFrequencies(spanWords); 
        countWordFrequencies(h1Words);
        countWordFrequencies(h2Words); 
        countWordFrequencies(title);  
        countWordFrequencies(p); 

        let sortFrequencies = (wordFrequencies) => {  
          for (let word in wordFrequencies) {
            freqPairs.push({
              word: word, 
              freq: wordFrequencies[word]
            }); 
          }

          freqPairs = freqPairs.sort((a, b) => {
            return (a.freq > b.freq) ? -1 : ((a.freq < b.freq) ? 1 : 0);
          });

          //Limiting the amount of results sent back to the client
          if (freqPairs.length > 15) {
            freqPairs.length = 15; 
          }
        };

        sortFrequencies(wordFrequencies); 
        response.send(freqPairs); 
      };

      done(); 
    }  
  });

  c.queue(url); 
});

module.exports = app; 