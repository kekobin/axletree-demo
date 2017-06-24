/**
 * @file AXLETREE 框架启动入口
 * @author kekobin@163.com
 */

'use strict';

var axletree = require('./lib/axletree-kernel');

var app = axletree.bootstrap({
    rootPath: __dirname
}, function () {
    console.log('plugins load completed');
});

app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');

var server = axletree.server = app.listen(app.get('port'), function () {
    console.log('Axletree server listening on port ' + server.address().port);
});

server.on('connection', function (socket) {
    // disable nagle
    socket.setNoDelay(true);
});

// 仅在 Node.js 6.x开启这个功能 https://github.com/nodejs/node/issues/7126
if (parseInt(process.versions.node.split('.')[0], 10) >= 6) {
    server.on('clientError', function (err, socket) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
}



