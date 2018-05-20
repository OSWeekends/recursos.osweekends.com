const express = require('express');
const router  = express.Router();
var Twitter = require('twitter');
var config = require('./config.js');

var client = new Twitter(config);

/* GET home page. */
router.post('/', (req, res, next) => {
  console.log(req.body)
  client.post('statuses/update', {status: 'Hemos añadido nuevo recurso a la web: ' + req.body.title + '. ' + 'Puedes verlo en: ' + req.body.url },  function(error, tweet, response) {
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
});

module.exports = router;
