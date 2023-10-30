import { humidity, isRaining } from './inline.-exports.mjs';
import { season, temperature } from './named-exports.mjs';
import getData from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs';

getData('https://jsonplaceholder.typicode.com/todos/2')
    .then((post) => console.log(post))
    .catch((err) => console(err));
console.log(season, temperature, isRaining, humidity);

console.log(DEFAULT_SERVER, MY_PASSWORD, MY_USERNAME);
