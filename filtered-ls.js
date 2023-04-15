const fs = require("fs");
const path = require("node:path");

const pathToDir = process.argv[2];
const extName = '.' + process.argv[3]

fs.readdir(pathToDir, (err, lst) => {
	if (err) {
		return console.log(err);
	}
	lst.forEach((item) => {
		if (path.extname(item) === extName) {
			console.log(item);
		}
	});
});
