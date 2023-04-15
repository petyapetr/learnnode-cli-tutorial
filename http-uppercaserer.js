const http = require("http");

const port = process.argv[2];

const server = http.createServer((req, res) => {
	if (req.method !== "POST") {
		return res.end("Non POST request");
	}
	req.on("data", (chunk) => res.write(chunk.toString().toUpperCase()));
	req.on("end", () => res.end());
});

server.listen(port);
