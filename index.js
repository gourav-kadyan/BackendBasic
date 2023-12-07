console.log("Hello world!")

// server using for this we use http server it is a module in node

const http = require('http')
//use request and response coz these are the parameter you can whatever you want
const server = http.createServer( (request, response) => {
    //response.end("<h1> Noice </h1>") // if dont use then unlimited reload it    
    if(request.url === "/"){
        response.end("<h1> Home Page </h1>")
    } 
    else if(request.url === "/about"){
        response.end("<h1> About </h1>")
    }
    else if(request.url === "/contact"){
        response.end("<h1> Contact </h1>")
    }
    else{
        response.end("<h1> Page Not Found </h1>")
    }
})
server.listen(5000, () => {
    console.log("server is working")
})

//module -- everything in node is basically
/* 
    module are three types--
    1 - builtin module - http
    2 - third-party module - any module from net like pokemon
    3 - file-based module - 
        using module.export = whatever name and then where use -- const name = require("./ filename")

        latest way go to package.json change type to module and then use -- import http from "http" like this
*/

