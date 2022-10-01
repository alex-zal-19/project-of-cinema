const numberOfFilms = +prompt('Сколько фильмов вы уже посмотпрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
