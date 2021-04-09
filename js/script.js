"use strict";

const numberOfFilms = +prompt("How many films have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt("What is your last movie you´ve seen?", "");
const b = prompt("What´s the score?", "");
const c = prompt("What is your last movie you´ve seen?", "");
const d = prompt("What´s the score?", ""); */

for (let i = 0; i < 2; i++) {
    const a = prompt("What is your last movie you´ve seen?", "");
    const b = prompt("What´s the score?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("You seen few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic");
} else if (personalMovieDB.count >= 30) {
    console.log("You a movie lover");
} else {
    console.log("Error");
}


