const fs = require("fs");
const path = require("path");

module.exports = (dir, ext, callback) => {
	extName = "." + ext;
	fs.readdir(dir, (err, lst) => {
		if (err) {
			return callback(err, null);
		}
		const data = lst
			.map((item) => {
				if (path.extname(item) === extName) {
					return item;
				}
			})
			.filter((item) => item !== undefined && item !== "");
		return callback(null, data);
	});
};
