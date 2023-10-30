import { error } from 'console';
import EventEmitter from 'events';
import { userInfo } from 'os';

class Post extends EventEmitter {
    constructor(authro, text) {
        super();
        this.authro = authro;
        this.text = text;
        this.likeQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your post!`);
        });
        this.on('error', (error) => {
            console.error(error);
        });
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request!')
            );
        }
        this.likeQty += 1;
        this.emit('likePost', username);
    }
}

const myPost = new Post('Stas', 'My great post!');

//console.log(myPost.authro);
//console.log(myPost.text);
//console.log(myPost.likeQty);
myPost.like('Stas');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Bob'), 2000);
//console.log(myPost.likeQty);
