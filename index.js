import express from 'express';
import bodyParser from 'body-parser';
import movieRoutes from './routes/movies.js';

const app = express();

app.use(bodyParser.json());

app.use('/movies', movieRoutes);

app.get('/', (req, res) => res.status(200).send('Welcome to movie homepage!'));

export default app;