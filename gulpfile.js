'use strict';
 // Inclure Gulp :)
var gulp = require('gulp');

// Inclure les PlugIn
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
 
 // Compilage de Sass :)
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
 // Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

 // Default Task
gulp.task('default', ['sass']);
 