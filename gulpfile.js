(function() {
  // esversion: 6
  'use strict';
  // https://www.npmjs.com/package/gulp-sass
  let gulp = require('gulp'),
      //gutil = require('gulp-util'),
      filesize = require('gulp-filesize'),
      // dest = require('gulp-dest'), https://www.npmjs.com/package/gulp-dest
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      minifycss = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
      del = require('del');
      //browserSync = require('browser-sync'),
      //reload = browserSync.reload,
      //path = require('path'),
      //shell = require('gulp-shell');


  let match = {
    recurse: '**/*'
  };

  let root = './',
      //src = './src/',
      src = './src-new/',         // TODO: remove -new
      tmp = './.tmp/',
      tmpBuild = tmp + 'build/',
      //dist = './dist/';
      dist = './dist-new/';       // TODO: remove -new

  let srcAll = src + match.recurse,
      tmpAll = tmpBuild + match.recurse,
      distAll = dist + match.recurse,
      sassAll = srcAll + '.scss',
      classesAll = srcAll + 'classes.scss',
      attrsAll = srcAll + 'attrs.scss',
      distClasses = dist + 'classes',
      distAttrs = dist + 'attrs',
      distMaps = dist + 'maps';

  let sassConf = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  gulp.task('clean', () => {
    return del([distAll, tmpAll, './dist_new/'], (err, paths) => {
      return gutil.log('cleaned files/folders:\n', paths.join('\n'), gutil.colors.green());
    });
  });

  // NOTE: gulp.dest can be used multiple times:
  // https://gulp.readme.io/docs/gulpdestpath-options
  gulp.task('sass-classes', ['clean'], () => {
    return gulp
      .src(classesAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(rename({
        dirname: ''
      }))
      .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(distClasses))
      .pipe(filesize());
  });

  gulp.task('sass-attrs', ['clean'], () => {
    return gulp
      .src(attrsAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(rename({
        dirname: ''
      }))
      .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(distAttrs))
      .pipe(filesize());
  });

  gulp.task('sass-all', ['sass-classes', 'sass-attrs']);

  gulp.task('min-classes', ['sass-classes'], () => {
    return gulp
      .src(distClasses + match.recurse)
      .pipe(concat('flex.classes.css'))
      .pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });

  gulp.task('min-attrs', ['sass-attrs'], () => {
    return gulp
      .src(distAttrs + match.recurse)
      .pipe(concat('flex.attrs.css'))
      .pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });

  gulp.task('min-all', [ 'min-classes', 'min-attrs' ]);

  gulp.task('default', () => {
    // watch all sass files and re-run the min
    gulp.watch(sassAll,['min-all']);
  });

})();
