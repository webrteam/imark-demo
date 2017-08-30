var serverPath = 'http://localhost:8008';

var proxyTable = {
	'/service/mark': `${serverPath}/service/mark`
};

var express = require("express");
var app = express();

app.use('/', express.static('.'));

var proxy = require('http-proxy-middleware');
Object.keys(proxyTable).forEach(key => {
	app.use(key, proxy(proxyTable[key]));
});

var port = 3000;
app.listen(port, x => {
	console.log(`Node is Run At http://localhost:${port}`);
	console.log(`Admin is Run At ${serverPath}/admin`);
});