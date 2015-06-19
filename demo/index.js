// Require express
var express = require('express')
,   app = express()
,   myModule = require('./my-modules/demo');

app.get('/', function (request, response)
{
    console.log('Plain text response');
    myModule.plain(response);
});

app.get('/html', function (request, response)
{
    console.log('HTML response');
    myModule.html(response);
});

app.get('/hello/:name', function (request, response)
{
    console.log('Magic');
    myModule.logic(request, response);
});

// set up a 404
app.use(function(req, res, next) {
  res.status(404).send('What are you looking for, exactly?');
});

// server code
var server = app.listen(8080, function ()
{
    var host = server.address().address
    ,   port = server.address().port;
    
    console.log('Demo server listening at http://%s:%s', host, port);
});