// console.log(process.argv);

const result = process.argv
	.map((item) => {
		if (typeof +item === "number" && (+item).toString() !== "NaN") {
			return +item;
		}
	})
	.filter((item) => item !== undefined)
	.reduce((sum, item) => sum +=item);

console.log(result);

return result
