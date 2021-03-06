'use strict';

 // Inclure Gulp depuis node modules :)
var gulp = require('gulp');

// Inclure les Plugins
var pump = require('pump');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');


 // Concatation et minification des JS :)
gulp.task('js', function (cb) {

  pump([
      gulp.src(['./node_modules/jquery/dist/jquery.js', './js/*.js']),
          uglify(),
          concat('scripts.js'),
      	  gulp.dest('./dist/js/')
    ],
    cb
  );
});


 // Compilage de Sass :)
gulp.task('sass', function () {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css/'));
});

 
 // Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
  gulp.watch('./js/**/*.js', ['js'])
  ;
});

 // Default Task
gulp.task('default', ['sass','js','watch']);


 
 // dire bonjour :D
 gulp.task('hello', function() {
  console.log('Hello Lylyy >///<');
});


