const net = require("net");

const port = process.argv[2];

const server = net.createServer((socket) => {
	let date = new Date();
	const hour = date.getHours()
	const min = date.getMinutes()
	date = date.toISOString();
	const formatedDate = `${date.slice(0, 10)} ${hour}:${min}\n`;
	console.log(formatedDate)
	socket.write(formatedDate);
	socket.end();
});

server.listen(port);
