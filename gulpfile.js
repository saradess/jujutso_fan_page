const gulp = require('gulp');
const sass = require('gulp-dart-sass'); // Use o gulp-dart-sass
const plumber = require('gulp-plumber');

function styles() {
    return gulp.src('./src/styles/main.scss') // Caminho mais específico
        .pipe(plumber()) // Previne que o Gulp pare em caso de erro
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}