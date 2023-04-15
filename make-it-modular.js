const mymodule = require("./mymodule.js");

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, data) => {
	if (err) return console.log(err);
	// return console.log(data);
	data.forEach((item) => console.log(item));
});
