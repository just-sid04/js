const http = require("http");

http.createServer((req, res) => {
    res.write("THIS SERVER IS OF SID");
    res.end();
}).listen(9689);