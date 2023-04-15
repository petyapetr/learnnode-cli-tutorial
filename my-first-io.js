const fs = require("fs");

const pathToFile = process.argv[2];

const buffer = fs.readFileSync(pathToFile);

const result = buffer.toString().split("\n").length - 1;
console.log(result);

return result;
