"use strict";

const numberOfFilms = +prompt("How many films have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

