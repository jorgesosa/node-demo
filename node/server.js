var spawn   = require('child_process').spawn
,   server  = require('http').createServer();

server.on('request', function (request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var job = spawn('/var/code/node-demo/sh/bash.sh');

    job.stdout.on('data', function (data)
    {
        response.write(data);
    });

    job.on('close', function (code)
    {
        response.write('Exited with code ' + code);
        response.end();
    });

    job.stderr.on('data', function (error)
    {
        console.error('ERROR', error);
        response.write('ERROR: %s', error);
        response.end();
    });
});
server.listen('8888');