import http from "node:http";

const port = Number(process.env.PORT) || 10000;

const server = http.createServer((request, response) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "application/json; charset=utf-8");

	if (request.url === "/health" || request.url === "/") {
		response.writeHead(200);
		response.end(JSON.stringify({ status: "ok", service: "longrich-server" }));
		return;
	}

	response.writeHead(404);
	response.end(JSON.stringify({ error: "Route introuvable" }));
});

server.listen(port, "0.0.0.0", () => {
	console.log(`Longrich server listening on port ${port}`);
});
