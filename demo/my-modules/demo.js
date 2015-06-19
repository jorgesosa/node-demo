exports.plain = function (response)
{
    response.send('This is a plain text message');
};

exports.html = function (response)
{
    response.sendFile('/var/code/node-demo/demo/views/static.html');
}

exports.logic = function (request, response)
{
    response.send('Hi, ' + request.params.name);
}