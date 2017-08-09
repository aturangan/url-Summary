const express = require('express');
const bodyParser = require('body-parser');
const request = require('request'); 
const axios = require('axios'); 
const cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/scrape', function (req, res) {
	//get the input data from the client 

	console.log('REQUESTTTT', req.body.input);
	//gives a string value 
	//error handling for making sure that it's a URL 
	//once you're sure it's a URL, use the cheerio library to get the HTML from it
	//THEN, use the unstuff library to get the words from it
	//rank the words based on frequency and return the highest frequency words
		//excluding the common words 
	res.send('get request is workingggg yaayy');
  



});

module.exports = app; 