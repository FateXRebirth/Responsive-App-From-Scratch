const gulp = require('gulp');
const Util = require('gulp-util');
const BrowserSync = require('browser-sync').create();
const Sass = require('gulp-sass');
const Plumber = require('gulp-plumber');
const If = require('gulp-if');
const Concat = require('gulp-concat');
const CleanCSS = require('gulp-clean-css');
const Sourcemaps = require('gulp-sourcemaps');
const Rename = require('gulp-rename');
const Uglify = require('gulp-uglify');
const Autoprefixer = require('gulp-autoprefixer');
const Iconfont = require('gulp-iconfont');    
const Env = require('gulp-env');
const Consolidate = require("gulp-consolidate");
const Spritesmith = require('gulp.spritesmith');
const Header = require('gulp-header');
const Merge = require('merge-stream');
const Fs = require('fs');
const del = require('del');

var env = JSON.parse(Fs.readFileSync('.env.json'));

// Initialization
var root = './';
var src = 'source';
var dest = 'public';

// Watch & Serve
gulp.task('serve', () => {
    BrowserSync.init({
        server: 'public'
    });
    gulp.watch([src + '/sass/*.scss'], gulp.series('Sass(style.css)'));
    gulp.watch([src + '/js/*.js'], gulp.series('Minify(main.js)'));
    gulp.watch([dest + '/js/*.js']).on('change', BrowserSync.reload);
    gulp.watch([dest + '/*.html']).on('change', BrowserSync.reload);
})

// Compile Sass for main css
gulp.task('Sass(style.css)', () => {
    return gulp.src([src + '/sass/*.scss'])
    .pipe(Plumber(function(error) {
        Util.beep();
        Util.log(Util.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(Sass())
    .pipe(Autoprefixer(eval(env.autoprefixer)))
    .pipe(If(!env.isProduction, Sourcemaps.init()))
    .pipe(If(!env.isProduction, Sourcemaps.write()))
    .pipe(If(env.isProduction, CleanCSS({ compatibility: 'ie8' })))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(BrowserSync.stream());
})

// Compile Sass for third-party css
gulp.task('Sass(plugin.css)', () => {
    return gulp.src([
        'bower_components/Ionicons/css/ionicons.css',
        'bower_components/jquery-ui/themes/ui-lightness/jquery-ui.css'],
        { base: 'bower_components/' }
    )
    .pipe(Concat('plugin.css'))
    .pipe(If(!env.isProduction, Sourcemaps.init()))
    .pipe(If(!env.isProduction, Sourcemaps.write()))
    .pipe(If(env.isProduction, CleanCSS({ compatibility: 'ie8' })))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(BrowserSync.stream());
})

// Compile for main javascript file
gulp.task('Minify(main.js)', () => {
    return gulp.src([
            src + '/js/main.js'
        ])
    .pipe(Concat('main.js'))
    .pipe(If(env.isProduction, Uglify()))
    .pipe(gulp.dest(dest + '/js'));
});

// Compile for third-party javascript file
gulp.task('Minify(plugin.js)', () => {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'bower_components/lodash/dist/lodash.js'],
        { base: 'bower_components/' }
    )
    .pipe(Concat('plugin.js'))
    .pipe(If(env.isProduction, Uglify()))
    .pipe(gulp.dest(dest + '/js'));
});

// Default 
gulp.task('default', gulp.parallel('serve', 'Sass(style.css)', 'Sass(plugin.css)', 'Minify(main.js)', 'Minify(plugin.js)'));