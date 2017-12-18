const gulp = require('gulp');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

// Compile Sass
gulp.task('sass', () => {
    return gulp.src(['src/scss/*.scss'])
    .pipe(plumber(function(error) {
        gutil.beep();
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
})

// Watch & Serve
gulp.task('serve', () => {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
})

// Default 
gulp.task('default', ['serve']);