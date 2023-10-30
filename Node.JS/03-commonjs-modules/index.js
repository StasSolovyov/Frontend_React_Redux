const exportedObject = require('./multiple-exports');
const greeting = require('./single-export');
const { yourName, myGreatHobbies } = require('./export-end-import');
exportedObject.myHobbies.push('climing');

greeting(exportedObject.myName);
console.log(exportedObject.myName, yourName);
console.log(myGreatHobbies);
