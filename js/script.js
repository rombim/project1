"use strict";

const numberOfFilms = +prompt("How many films have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is your last movie you´ve seen?", "");
const b = prompt("What´s the score?", "");
const c = prompt("What is your last movie you´ve seen?", "");
const d = prompt("What´s the score?", "");

for (let i = 0; i < 2; i++) {
    const a = prompt("What is your last movie you´ve seen?", "");
    const b = prompt("What´s the score?", "");
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);


