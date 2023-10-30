import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);

if (isNaN(linesQty)) {
    console.log('Lines qty must be a namber');
    process.exit(0);
}

const writeStrems = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());
for (let i = 0; i < linesQty; i++) {
    writeStrems.write(
        `This is a line number ${i} in the automatically generated file\n`
    );
}

console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);
writeStrems.end(() => {
    console.log(`Automatically generated file ${fileName} was created`);
});
