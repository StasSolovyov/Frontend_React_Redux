const fs = require('fs');
const dns = require('dns');
function info(text) {
    console.log(text, performance.now().toFixed(2));
}
const { nextTick } = require('process');

console.log('Program start');

setTimeout(() => info('Timeout 1'), 0);

setTimeout(() => {
    process.nextTick(() => info('Next tick2'));
    info('Timeout 2');
}, 100);

fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'));

Promise.resolve().then(() => info('Promise 1'));

process.nextTick(() => info('Next tick 1'));

setImmediate(() => info('Immediate 1'));

let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost');
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 2'));
});

console.log('Program end');
