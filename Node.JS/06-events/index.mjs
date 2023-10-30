import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const timeoutListenerFN = (secondQty) => {
    console.log(`Time event in ${secondQty} seconds!`);
};

myEmitter.on('timeout', timeoutListenerFN);
setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
    console.log('Single event occurred');
});
setImmediate(() => myEmitter.emit('singleEvent'));

setTimeout(() => myEmitter.off('timeout', timeoutListenerFN), 3000);

setTimeout(() => myEmitter.emit('timeout', 4), 4000);

myEmitter.emit('timeout');
