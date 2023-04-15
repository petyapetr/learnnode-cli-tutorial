const http = require("http");

const port = process.argv[2];
const baseURL = process.cwd();

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });

	const url = new URL(req.url, "http://example.io");


	const ISOStr = url.searchParams.get('iso');
	const dateObj = new Date(ISOStr);

	if (url.pathname === "/api/parsetime") {
		const hour = dateObj.getHours();
		const minute = dateObj.getMinutes();
		const second = dateObj.getSeconds();
		res.write(JSON.stringify({ hour, minute, second }));
		return res.end();
	}

	if (url.pathname === "/api/unixtime") {
		const unixtime = dateObj.getTime();
		res.write(JSON.stringify({ unixtime }));
		return res.end();
	}
});

server.listen(port);
