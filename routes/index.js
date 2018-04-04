var express = require('express');
var router = express.Router();


/* GET home page. */
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

    res.render('index', { title: 'Demo App',
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

router.get('/ws', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('ws', { title: 'Demo App - Websockets ',
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


router.get('/contact', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('index', { title: 'Demo App - Contact ',
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

router.get('/login', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('index', { title: 'Demo App - Login',
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


router.get('/uri([A-Za-z0-9_]+)', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('index', { title: 'Demo App - Dynamic',
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


router.get('/static', function(req, res, next) {
    var server_ip = req.app.get('ip');
    var server_port = req.app.get('port');
    var client_ip = req.ip;
    var client_port = req.connection.remotePort ;
    var client_proto = req.protocol;
    var request_method = req.method;
    var request_url = req.originalUrl;
    var request_headers = req.headers;
    var request_body = JSON.stringify(req.body);

    res.render('index', { title: 'Demo App - Static ',
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
