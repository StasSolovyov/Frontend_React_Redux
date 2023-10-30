import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('First event listener');
});

myEmitter.on('myEvent', () => {
    console.log('Second event listener');
});
console.log(myEmitter.eventNames());
console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners());
myEmitter.emit('myEvent'), 1000;
