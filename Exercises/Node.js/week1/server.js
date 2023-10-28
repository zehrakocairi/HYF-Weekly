/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
  let path = "";

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World!"); // Sends a response back to the client
    res.end(); // Ends the response
  } else if (req.url === "/index.js") {
    path += "index.js";
    res.setHeader("Content-Type", "text/javascript");
    res.write("Welcome to Server-land!");
    res.end();
  }

  fs.readFile(__dirname + "/style.css", function (err, data) {
    path += "style.css";
    res.setHeader("Content-Type", "text/css");
    if (err) console.log(err);
    res.write(data);
    res.end();
  });
});

server.listen(3000); // The server starts to listen on port 3000
