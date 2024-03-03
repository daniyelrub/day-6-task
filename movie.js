class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing the getPG method
const movies = [
    new Movie("Iron Man", "Marvel Studios", "PG-13"),
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "G"),
    new Movie("Toy Story", "Pixar Animation Studios", "G"),
];







