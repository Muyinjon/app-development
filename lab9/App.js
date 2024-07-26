//import http module
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type': 'text/html'})


    // creating a route 
    const url = request.url;

    if(url === '/' || url === '/home'){
        fs.createReadStream('./index.html').pipe(response);
    }
    else if(url === '/about'){
        fs.createReadStream('./about.html').pipe(response);}
    
    else{
        fs.createReadStream('./404.html').pipe(response);}

//piping stream

});



server.listen(3100,function(){
    console.log("server is running on port 3100");
})

