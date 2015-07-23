var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
  return del(["./dist/**/*"]);
});

gulp.task('sass', ['clean'], function() {
  gulp.src([
            './src/flex-layout.scss',
            './src/flex-axis.scss',
            './src/flex-resize.scss',
            './src/flex-media-query.scss',
            './src/flex-ordering.scss',
            './src/positioning.scss',
            './src/misc.scss',
            './src/flex-all.scss'
          ])
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./dist/noprefix/'));
});

gulp.task('autoprefixer', ['sass'], function() {
  gulp.src('./dist/noprefix/**/*')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/modules'));
});

gulp.task('min', ['autoprefixer'], function() {
  gulp.src('./dist/modules/flex-all.css')
        .pipe(minifyCss({
          compatibility: 'ie8',
          ext: '.min.css',
          extDot: 'last'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['min']);
