import { v4 as uuidv4 } from 'uuid';

let movies = [
    {
        id: uuidv4(),
        title: "inception",
        director: "Christopher Nolan",
        release_date: "2010-07-16"
    },
    {
        id: uuidv4(),
        title: "The Irishman",
        director: "Martin Scorsese",
        release_date: "2019-09-27"
    }
];

// Reading all movies.
export const getMovies = (req, res) => {
    res.status(200);
    res.send(movies);
};

// Adding movie
export const addMovie = (req, res) => {
    const { title, director, release_date } = req.body;
    // Check if user added title, director and release date
    if (title && director && release_date) {
        if (movies.find(movie => movie.title === title) && movies.find(movie => movie.director === director)) {
            res.status(401).send(`We already have ${title} movie!`)
        } else {
            // I have used this object for if user adds more information, we will get only 3 of them
            const newMovie = {
                id: uuidv4(),
                title,
                director,
                release_date
            };

            movies.push(newMovie);
            res
                .status(200)
                .send(`The  ${newMovie.title} movie added to database! Movie's id is: ${newMovie.id}`);
        }

    } else {
        res.status(401).send('Please add title, director and release date for adding new movie!');
    }


}
// Searching movie with id
export const findMovie = (req, res) => {
    const { id } = req.params;
    if (movies.find(movie => movie.id === id)) {
        const matchedMovie = movies.find((movie) => movie.id === id)
        res
            .status(200)
            .send(matchedMovie);
    } else {
        res.status(404).send('Movie not found!')
    }

}

// Deleting movie with id
export const deleteMovie = (req, res) => {
    const { id } = req.params;
    if (movies.find(movie => movie.id === id)) {
        movies = movies.filter((movie) => movie.id !== id);
        res.status(200).send(`The movie with the id: ${id} has been deleted!`);

    } else {
        res.status(404).send(`The movie with id : ${id} not found in database`);
    }


}