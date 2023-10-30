import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cors());
app.use((req, res) => {
    const personeData = {
        name: 'Stas',
        isInstructor: true,
    };
    console.log(req.body);
    return res.json(personeData);
});
app.listen(5000, () => console.log('server is listening at port 5000'));
