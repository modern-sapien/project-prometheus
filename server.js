// BASIC SERVER TEST

const http  = require("http");

const PORT = 7000;

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
})

function handleRequest(request, response)   {
        response.end("This is a test, this only a test.")
}
