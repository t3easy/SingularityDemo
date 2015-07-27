'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var settings = {};
var paths = {};

paths.sass = './sass/**/*.scss';
paths.css = './css';

gulp.task('sass', function () {
	gulp.src(paths.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.css));
});

gulp.task('sass:watch', function () {
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('copy', function () {
	gulp.src('./node_modules/normalize.css/normalize.css')
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'copy']);
