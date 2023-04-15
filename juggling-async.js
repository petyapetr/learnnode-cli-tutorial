const http = require("http");

const urls = process.argv.slice(2);

urls.forEach((url, index, arr) =>
	http.get(url, (res) => {
		res.setEncoding("utf8");
		let buffer = "";
		res.on("data", (chunk) => {
			buffer += chunk;
		});
		res.on("end", () => {
			console.log(buffer)
		});
	})
);
