'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var settings = {
	paths: {
		sass: './sass/**/*.scss',
		css: './css'
	},
	sass: {
		outputStyle: 'compressed',
		includePaths: [
			'./node_modules/breakpoint-sass/stylesheets',
			'./node_modules/singularitygs/stylesheets'
		]
	}
};

gulp.task('sass', function () {
	gulp.src(settings.paths.sass)
		.pipe(sass(settings.sass).on('error', sass.logError))
		.pipe(gulp.dest(settings.paths.css));
});

gulp.task('sass:watch', function () {
	gulp.watch(settings.paths.sass, ['sass']);
});

gulp.task('copy', function () {
	gulp.src('./node_modules/normalize.css/normalize.css')
		.pipe(gulp.dest(settings.paths.css));
});

gulp.task('default', ['sass', 'copy']);
