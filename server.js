//these tow modules is for parse the request head and body
var http = require("http");
var url = require("url");

function start(route, handle) {
    // this function handles the request on port 8888
    function onRequest(request, response) {
        var postData = "default";
        //url.parse('string') will return an object with it's pathname
        //property being the route requested
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        request.setEncoding("utf8");
        //if request is receiving data from the client side
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
        //when data receive is done, call the route
        request.addListener("end", function() {
            //we're injecting handle, reponse, postData dependency to route
            //by passing them as parameters
            route(handle, pathname, response, postData);
        });
    }

    //when start function is called, it will create a server
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

//this returns a function definition, but not invoke it yet
//we will invoke this thing in index.js
exports.start = start;
