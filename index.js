const http = require('http')

http.createServer((req, res) =>{
    res.write("Something...")
    res.end();
}).listen(4567);
