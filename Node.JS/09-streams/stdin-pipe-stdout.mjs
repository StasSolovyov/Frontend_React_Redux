import stream from 'stream';
import fs from 'fs';

//const filePath = './files/stdin-dump.txt';
//onst writeStream = fs.createWriteStream(filePath);
//process.stdin.pipe(writeStream);
//process.stdin.pipe(process.stdout);

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk;
        console.log(upperCased);
        cb(null, upperCased);
    },
});

process.stdin.pipe(upperCaseStream).pipe(process.stdout);
