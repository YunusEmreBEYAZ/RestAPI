
import request from 'supertest';
import app from '../index.js';


describe('GET /movies', () => {
    it('Getting movies responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('POST /movies', () => {
    it('Adding new movie should responds with status 200', async () => {
        const response = await request(app).post('/movies').send({
            title: 'movie',
            director: 'Yunus',
            release_date: '01.01.2023'
        })
        expect(response.statusCode).toBe(200);
    });

    it('Adding new movie if missing information is given, it should responds with status 401', async () => {
        const response = await request(app).post('/movies').send({
            title: 'movie',
            release_date: '01.01.2023'
        })
        expect(response.statusCode).toBe(401);
    });

    it('Deleting a movie with id, if user add wrong id status code should be 404', async () => {
        const response = await request(app).delete('/movies/asdasdsd').send()

        expect(response.statusCode).toBe(404);
    });
});