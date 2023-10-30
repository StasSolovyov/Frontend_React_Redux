const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
let isRunning = true;

setTimeout(() => (isRunning = false), 1000);
process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
    return new Promise((resolve, rejects) => {
        resolve();
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
