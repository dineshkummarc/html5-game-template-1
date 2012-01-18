var http = require('http');
var fs = require('fs');
var spawn = require('child_process').spawn;

var port = 1234;
if (process.argv.length > 2 && !isNaN(+process.argv[2])) {
	port = +process.argv[2]
}

var mimes = JSON.parse(fs.readFileSync('lib/mimes.json', 'utf-8'))
function getMime(file) {
	var ext = file.match(/\.([^.]+)$/);
	if (!ext || !ext.length || !mimes[ext[1]]) {
		return 'application/octet-stream';
	}

	return mimes[ext[1]];
}

function recompile(callback) {
	console.log('Recompile!');
	callback();
}

function serveFile(file, response) {
	fs.stat(file, function (err, stats) {
		response.writeHead(200, {
			'Content-Type': getMime(file),
			'Content-Length': stats.size
		});

		fs.readFile(file, function (err, data) {
			response.write(data);
			response.end();
		});
	});
}

http.createServer(function (request, response) {
	console.log(request.url);

	var file = '.' + request.url;

	if (file === './bin/game.js') {
		return recompile(function () {
			serveFile(file, response);
		});
	}

	fs.stat(file, function (err, stats) {
		if (err || !stats || !stats.isFile()) {
			response.writeHead(404);
			response.end();
		} else {
			serveFile(file, response);
		}
	});
}).listen(port);

console.log('Listening on port ' + port + ' ...');