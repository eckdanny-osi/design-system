const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const tilde = require('node-sass-tilde-importer');
const postcss = require('gulp-postcss');

const FILES_JS = [
  './src/**/*.js',
  './src/**/*.jsx',
  '!./src/**/*.stories.js',
  '!./src/**/*.spec.js',
  '!./src/**/*.test.js',
  '!./src/**/__test__',
  '!./src/__mocks__/**/*.js',
];

const FILES_CSS = ['./src/*.scss', './src/**/*.scss'];

gulp.task('js', function() {
  return gulp
    .src([...FILES_JS])
    .pipe(
      babel({
        plugins: [['import-rename', { '^(.*)\\.scss$': '$1.css' }]],
      })
    )
    .pipe(gulp.dest('./lib'));
});

gulp.task('ts', () => {
  return gulp.src('./src/**/*.ts').pipe(gulp.dest('./lib'));
});

// gulp.task('css', function() {
//   const plugins = [
//     require('postcss-import')({
//       root: __dirname,
//       path: [path.join(__dirname, './src')],
//     }),
//     // require('postcss-mixins')(),
//     // require('postcss-each')(),
//     // require('postcss-apply')(),
//     // require('postcss-nesting')(),
//     // require('postcss-reporter')({ clearMessages: true })
//   ];

//   return (
//     gulp
//       .src(FILES_CSS)
//       .pipe(
//         sass({
//           // includePaths: [ path.join(__dirname, '/node_modules') ],
//           importer: tilde,
//         }).on('error', sass.logError)
//       )
//       // .pipe(postcss(plugins))
//       .pipe(
//         rename({
//           extname: '.module.css',
//         })
//       )
//       .pipe(gulp.dest('./lib'))
//   );
// });

gulp.task('dumbcss', () => {
  // gulp.src(FILES_CSS).pipe(gulp.dest('./lib'));
  gulp
    .src(FILES_CSS)
    .pipe(
      sass({
        // includePaths: [ path.join(__dirname, '/node_modules') ],
        importer: tilde,
      }).on('error', sass.logError)
    )
    .pipe(
      rename({
        extname: '.css',
      })
    )
    .pipe(gulp.dest('./lib'));
});

// // gulp.task('tsd', function () {
// //   gulp.src('./components/**/*.d.ts')
// //     .pipe(gulp.dest('./lib'));
// // });

// // gulp.task('default', ['js', 'css', 'tsd']);

gulp.task('build:watch', done => {
  gulp.start('default');
  const watcher = gulp.watch([...FILES_JS, ...FILES_CSS], ['js', 'dumbcss']);
  done();
});

gulp.task('default', ['js', 'dumbcss']);
