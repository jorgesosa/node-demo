var path = require('path');

exports.plain = function (response)
{
    response.send('This is a plain text message');
};

exports.html = function (response)
{
    var location = path.resolve(__dirname + '/../views/static.html');
    response.sendFile(location);
}

exports.logic = function (request, response)
{
    response.send('Hi, ' + request.params.name);
}