//creating a server and listens for a requests and responds them//
const http = require('http')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
//--
const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20)
    console.log(num)
    const greet = _.once(() => {
        console.log('Hello')
    })
    greet();
    greet();

    // console.log(req.url, req.method)
    //response
    res.setHeader('Content-Type', 'text/html')
    // res.write('<p>hello,ninjas</p>')
    // res.write('<p>hello again,ninjas</p>')
    // res.end()
    //directly reading html file using file system//
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        else {
            // res.write(data)
            res.end(data)
        }
    })

})//-- 
//this part of code executes when the request has been made through the browser


server.listen(3000, 'localhost', () => {
    console.log('listening port no 3000 for request')
})