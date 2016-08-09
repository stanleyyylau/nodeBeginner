//this is to parse the body of the text received
var querystring = require("querystring");

//if the route is / or /start, run this function and return pure html
function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' + '<head>' + '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
}


// if the route is /upload, run this thing below
function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    console.log(postData);
    response.write("You've sent the text: " +
        //using the module to parse the received data and get the text value
        //this will be undefined if postData is empty, client send nothing
        querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;
