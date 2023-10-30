import { EventEmitter } from 'events';
import fs from 'fs';
const filleEmiter = new EventEmitter();

filleEmiter.on('writeComplete', () => {
    console.log('File first.txt was written');
    fs.appendFile('./first.txt', '\nOne more line', () => {
        filleEmiter.emit('appendComplete');
    });
});
filleEmiter.on('appendComplete', () => {
    console.log('Append text to the first.txt file');
    fs.rename('./first.txt', './renamed-first.txt', () => {
        filleEmiter.emit('renameComplete');
    });
});
filleEmiter.on('renameComplete', () => {
    console.log('file was rename');
});

fs.writeFile('./first.txt', 'First file text', () => {
    filleEmiter.emit('writeComplete');
});
