(function() {
  'use strict';
  // https://www.npmjs.com/package/gulp-sass
  var gulp = require('gulp'),
      //gutil = require('gulp-util'),
      filesize = require('gulp-filesize'),
      // dest = require('gulp-dest'), https://www.npmjs.com/package/gulp-dest
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps');

  var match = {
    recurse: '**/*'
  };

  var src = './src/';
  var dist = './dist/';

  var srcAll = src + match.recurse,
      classesAll = srcAll + 'classes.scss',
      attrsAll = srcAll + 'attrs.scss',
      distClasses = dist + 'classes',
      distAttrs = dist + 'attrs',
      distMaps = dist + 'maps';

  var sassConf = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  gulp.task('sass-classes', function() {
    return gulp
      .src(classesAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(gulp.dest(distClasses))
      .pipe(filesize());
  });

  gulp.task('sass-attrs', function() {
    return gulp
      .src(attrsAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(gulp.dest(distAttrs))
      .pipe(filesize());
  });

  // gulp.task('sass', function () {
  //   return gulp
  //     .src(srcSass)
  //     .pipe(sass())
  //     .pipe(gulp.dest(dist))
  //     .pipe(filesize());
  // });
  gulp.task('sass-all', ['sass-classes', 'sass-attrs'])

  gulp.task('default', ['sass-all']);

})();
