import http from 'http';
import fs from 'fs';
//with stream
const server = http.createServer((req, res) => {
    const filePath = './files/index.html';
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text,html');
        readStream.pipe(res);
    }
    ///no stream
    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file on server');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
});

server.listen(5000, () => {
    console.log('Server is listening at port 5000');
});
