var express = require('express');
var app = express();
var generate = require('./generate');
var url = require('url');

var MAX_ADDRESSES = 1000000;
var MAX_LENGTH = 1000;


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get("/generate", function( request, response ) {
    var urlParts = url.parse( request.url, true );
    var queryParams = urlParts.query;

    var domain = queryParams["domain"];
    var numberAddresses = Math.min( queryParams["count"], MAX_ADDRESSES );
    var seperator = queryParams["sep"];
    var length = Math.min( queryParams["length"], MAX_LENGTH );
    response.setHeader('Content-Type', 'text/plain');
    response.send( generate( domain, numberAddresses, seperator, length ) );
});


app.get('/*', function( request, response) {
    response.status(404).send("404 Page Not Found");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
