const fs = require("fs");

const pathToFile = process.argv[2];

fs.readFile(pathToFile, (err, file) => {
	if (err) return console.log(err);
	let result = file.toString().split("\n").length - 1;
	console.log(result)
});
