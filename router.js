function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    //is the route is defined already, call their handler
    if (typeof handle[pathname] === 'function') {
        //call the handle function definded in index.js with reponse and postDate inject to it
        handle[pathname](response, postData);
    }

    //if that route is not defind in index.js in the handle object,
    //return 404
    else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;
