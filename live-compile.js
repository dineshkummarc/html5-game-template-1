var http = require('http');
var fs = require('fs');
var spawn = require('child_process').spawn;

var port = 1234;
if (process.argv.length > 2 && !isNaN(+process.argv[2])) {
	port = +process.argv[2];
}

var mimes = JSON.parse(fs.readFileSync('lib/mimes.json', 'utf8'));
function getMime(file) {
	var ext = file.match(/\.([^.]+)$/);
	if (!ext || !ext.length || !mimes[ext[1]]) {
		return 'application/octet-stream';
	}

	return mimes[ext[1]];
}

function recompile(callback) {
	var compile = spawn('sh', ['compile.sh']);
	var error = '';

	compile.stderr.on('data', function (data) {
		error += data;
	});

	compile.on('exit', function (code) {
		if (!error.length) {
			return callback();
		}

		error = error.replace(/\\/g, '\\')
		.replace(/'/g, "\\'")
		.replace(/[\r\n]+/g, '\\n');

		error = "console.error('" + error + "');";
		fs.writeFile('bin/game.js', error, callback);
	});
}

function serveFile(file, response, noCache) {
	var headers = {};
	fs.stat(file, function (err, stats) {
		headers['Content-Type'] = getMime(file);
		headers['Content-Length'] = stats.size;
		if (noCache) {
			headers['Cache-Control'] = 'no-cache, must-revalidate';
		}

		response.writeHead(200, headers);

		fs.readFile(file, function (err, data) {
			response.end(data);
		});
	});
}

http.createServer(function (request, response) {
	var file = '.' + request.url;

	if (file === './') {
		file = './index.html';
	}

	if (file === './bin/game.js') {
		return recompile(function () {
			serveFile(file, response, true);
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