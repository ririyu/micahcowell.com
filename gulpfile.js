var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');


gulp.task('style', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(rename('main.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('bundle', function() {
	return gulp.src('src/js/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('dist/js/'));
});


gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['style']);
});
gulp.task('default', ['style', 'bundle', 'watch']);
