const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const pathName =  req.url;

    if (pathName === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        fs.readFile('./public/home.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });

    } else if (pathName === '/contact') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        fs.readFile('./public/contact.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });

    } else if (pathName == '/about') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        fs.readFile('./public/about_me.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });

    } else if (pathName == '/home') {
        res.writeHead(302, {
            'Content-type': 'text/html'
        });

        fs.readFile('./public/home.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });

    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });

        res.end('<h1>Page not found</h1>');
    }
});


server.listen(5000, '127.0.0.1', () => {
    console.log(`Listening to requests on port 5000`);
});


// app.use(express.static(`${__dirname}/public`));

