const http = require("http");

const url = process.argv[2];

http.get(url, (res) => {
	let buffer = "";
	res.setEncoding("utf8");
	res.on("data", (chunk) => {
		buffer += chunk;
	});
	res.on("end", () => {
		console.log(buffer.length);
		console.log(buffer);
	});
});
