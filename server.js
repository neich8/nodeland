var https = require("https");
var url = require("url");
var fs = require("fs");
var hskey = fs.readFileSync('hacksparrow-key.pem');
var hscert = fs.readFileSync('hacksparrow-cert.pem');
var options = {
    key: hskey,
    cert: hscert
};
function start(route) {
  function onRequest(request, response) {
  	var pathname = url.parse(request.url).pathname
    console.log("Request for" + pathname + " received.");

    route(pathname);
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

    https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}



exports.start = start;