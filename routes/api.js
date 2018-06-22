var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('api', { title: 'Demo App - API',
        server_ip: server_ip,
        server_port: server_port,
        client_ip: client_ip,
        client_port: client_port,
        client_proto: client_proto,
        request_method: request_method,
        request_url: request_url,
        request_headers: request_headers,
        request_body: request_body,
    });
});

router.post('/', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('api', { title: 'Demo App - API',
        server_ip: server_ip,
        server_port: server_port,
        client_ip: client_ip,
        client_port: client_port,
        client_proto: client_proto,
        request_method: request_method,
        request_url: request_url,
        request_headers: request_headers,
        request_body: request_body,
    });
});

module.exports = router;