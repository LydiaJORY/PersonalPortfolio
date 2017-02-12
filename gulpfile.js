'use strict';
 // Inclure Gulp :)
var gulp = require('gulp');

// Inclure les Plugins
var pump = require('pump');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
 

 // Concatation et minification des JS :)
gulp.task('js', function () {
    gulp.src(['./node_modules/jquery/dist/jquery.js', './js/*.js'])
        .pipe(uglify())
        .pipe(concat('scripts.js'))
    	.pipe(gulp.dest('./dist/js/'));
});

 // Compilage de Sass :)
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
 // Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

 // Default Task
gulp.task('default', ['sass','js','watch']);
 