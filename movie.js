let numberOfFilms;

function start () {
        numberOfFilms = +prompt("Сколько вы фильмов посмотрели?", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько вы фильмов посмотрели?", "");  
        }
        }
start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
            


function rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", " "),
                b = prompt("На сколько оцените его?", " ");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
        } else {
        console.log('error');
        i--;
        }
        }
        }
//rememberMyFilms();


function detectPersonalLevel () {
        if (personalMovieDb.count < 10) {
        console.log("112233");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("123");
        } else if (personalMovieDb.count >= 30) {
        console.log('332211');
        } else {
        console.log('error');
        }
        }
//detectPersonalLevel();

function snowMyDB (hiden) {
        if (!hiden) {
            console.log(personalMovieDb);
        }
        }
snowMyDB(personalMovieDb.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр фильма под номером : ${i}`);
    }
}
writeYourGenres();
