const express = require('express');
const bodyParser = require('body-parser');
const request = require('request'); 
const axios = require('axios'); 
const Crawler = require('crawler');
extractor = require('unfluff');
//const cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/scrape', function (req, res) {

  //need to handle this for security
  const url = req.body.input; 
  let wordFrequencies = {}; 

  //getting the html data from the page
  let c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
      if (error) {
        console.log(error); 
      } else {
        let $ = res.$; 
        
        //so this actually works but I'm not supposed to use it....
        //let data = extractor(res.body, 'en');
        //console.log('DATATATA', data); 

        let spanWords = $('span').text().split(' '); 
        let h1Words = $('h1').text().split(' ');
        let h2Words = $('h2').text().split(' '); 
        let title = $('title').text().split(' '); 
        let p = $('p').text().split(' '); 

        let countWordFrequencies = (words) => {
          for (let i = 0; i < words.length; i++) {
            let current = words[i]; 

            if (current === ' ' || current.length <= 2 || current[0] === '$') {
              continue; 
            }

            current = current.replace(/(\r\n|\n|\r)/gm,"");

            if (!wordFrequencies[current]) {
              wordFrequencies[current] = 1; 
            } else {
              wordFrequencies[current]++; 
            }

            if (current[0]) {
              if (current[0] === current[0].toUpperCase()) {
                wordFrequencies[current] += 3; 
              }
            } else {
              continue; 
            }
          }
        }

        countWordFrequencies(spanWords); 
        countWordFrequencies(h1Words);
        countWordFrequencies(h2Words); 
        countWordFrequencies(title);  

        console.log(wordFrequencies); 

        //let words = data.split(' '); 
      };

      done(); 
    }  
  });

  c.queue(url); 
});

  //gives a string value 
  //error handling for making sure that it's a URL 
  //once you're sure it's a URL, use the cheerio library to get the HTML from it
  //THEN, use the unstuff library to get the words from it
  //rank the words based on frequency and return the highest frequency words
      //excluding the common words 

  //res.send('get request is workingggg yaayy');

module.exports = app; 