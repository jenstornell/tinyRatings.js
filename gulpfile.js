var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var minifyJS = require('gulp-minify');

function css(name) {
  gulp.watch('assets/css/src/' + name + '.scss', [name + '_css']);
  gulp.task(name + '_css', function() {
    return gulp.src([
      'assets/css/src/' + name + '.scss'
      ])
      .pipe(concat(name))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets/css/dist'))
      .pipe(rename(name + '.min.scss'))
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('assets/css/dist'))
  });
}

// JS
gulp.task('js', function() {
  gulp.src([
    'assets/js/script.js'
    ])
    .pipe(minifyJS({
      ext:{
        min:'.min.js'
      },
    }))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('assets/js'))
});

// Default
gulp.task('default', function() {
    css('style');
    gulp.watch('assets/js/script.js',   ['js' ]);
});