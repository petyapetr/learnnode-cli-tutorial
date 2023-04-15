const fs = require("fs");
const http = require("http");

const port = process.argv[2];
const file = process.argv[3];
const stream = fs.createReadStream(file);

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	stream.pipe(res);
});

server.listen(port);
