var config = {
	serverPath: 'http://localhost:8008'
};

var express = require("express");
var app = express();

app.use('/', express.static('.'));

var proxyPath = require('http-proxy-middleware')(config.serverPath);
app.use('/service', proxyPath);

var port = 3000;
app.listen(port, x => {
	console.log(`Node is Run At http://localhost:${port}`);
	console.log(`Admin is Run At ${config.serverPath}/admin`);
});