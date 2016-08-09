

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};

//this is the requestHandlers, when diffrent routes are hit
//different request handllers are called
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;



//this line fire up the server inside the server module
//and pass route and handle to it
//something called dependency injection
server.start(router.route, handle);
