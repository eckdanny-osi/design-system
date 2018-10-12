const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const tildeImporter = require('node-sass-tilde-importer');

gulp
  .src('scss/styles.scss')
  .pipe(sourceMaps.init())
  .pipe(sass({ importer: tildeImporter }))
  .pipe(sourceMaps.write('./'))
  .pipe(gulp.dest('./dist'));
