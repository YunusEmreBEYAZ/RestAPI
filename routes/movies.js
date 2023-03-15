import express from 'express';
import { getMovies, addMovie, findMovie, deleteMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', addMovie);

router.get('/:id', findMovie);

router.delete('/:id', deleteMovie);


export default router;