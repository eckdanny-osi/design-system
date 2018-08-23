const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const tilde = require('node-sass-tilde-importer');

const FILES_CSS = './src/**/*.scss';
const FILES_TSD = './src/**/*.d.ts';
const OUT_DIR = './lib';

gulp.task('build:make:css', () => {
  gulp
    .src(FILES_CSS)
    .pipe(sourcemaps.init())
    .pipe(sass({ importer: tilde }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('build:watch:css', done => {
  gulp.start('build:make:css'); // <= gulp.start to be deprecated in v4
  gulp.watch(FILES_CSS, ['build:make:css']);
  done();
});

gulp.task('build:make:tsd', () => {
  gulp.src(FILES_TSD).pipe(gulp.dest(OUT_DIR));
});

gulp.task('build:watch:tsd', done => {
  gulp.watch(FILES_TSD, ['build:make:tsd']);
  done();
});
