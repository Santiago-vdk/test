var express = require('express');
var router = express.Router();
var request = require('request');
const app = express()




router.get('/', function(req, res, next) {
    request({
      uri: 'http://www.giantbomb.com/api/search',
      qs: {
        api_key: '123456',
        query: 'World of Warcraft: Legion'
      }
    }).pipe(res);
  });
  


app.listen(3000, () => console.log('Example app listening on port 3000!'))