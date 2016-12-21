var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function() {
    return gulp.src('./src/Style/index.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
        .pipe(gulp.dest('./src'))
});

gulp.task('watch', function() {
    gulp.watch('./src/Style/*.scss', ['style']);
});

gulp.task('default', ['style', 'watch']);
