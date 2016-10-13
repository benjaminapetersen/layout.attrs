(function() {
  'use strict';
  // https://www.npmjs.com/package/gulp-sass
  var gulp = require('gulp'),
      //gutil = require('gulp-util'),
      filesize = require('gulp-filesize'),
      // dest = require('gulp-dest'), https://www.npmjs.com/package/gulp-dest
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      //minifycss = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      //uglify = require('gulp-uglify'),
      //rename = require('gulp-rename'),
      //concat = require('gulp-concat'),
      del = require('del');
      //browserSync = require('browser-sync'),
      //reload = browserSync.reload,
      //path = require('path'),
      //shell = require('gulp-shell');


  var match = {
    recurse: '**/*'
  };

  var root = './',
      src = './src/',
      tmp = './.tmp/',
      tmpBuild = tmp + 'build/',
      dist = './dist/';

  var srcAll = src + match.recurse,
      tmpAll = tmpBuild + match.recurse,
      distAll = dist + match.recurse,
      classesAll = srcAll + 'classes.scss',
      attrsAll = srcAll + 'attrs.scss',
      distClasses = dist + 'classes',
      distAttrs = dist + 'attrs',
      distMaps = dist + 'maps';

  var sassConf = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  gulp.task('clean', function() {
    return del([distAll, tmpAll, './dist_new/'], function(err, paths) {
      return gutil.log('cleaned files/folders:\n', paths.join('\n'), gutil.colors.green());
    });
  });

  gulp.task('sass-classes', ['clean'], function() {
    return gulp
      .src(classesAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(gulp.dest(distClasses))
      .pipe(filesize());
  });

  gulp.task('sass-attrs', ['clean'], function() {
    return gulp
      .src(attrsAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(gulp.dest(distAttrs))
      .pipe(filesize());
  });

  gulp.task('sass-test', function () {
    return gulp
      .src('./src-new/**/*')
      .pipe(sass())
      // .pipe(autoprefixer('last 10 versions'))
      // .pipe(minifycss()) prefer to do a separate min run.
      .pipe(gulp.dest('./dist-new'))
      .pipe(filesize());
  });

  gulp.task('sass-all', ['sass-classes', 'sass-attrs']);

  gulp.task('default', ['sass-all']);

})();
