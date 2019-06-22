var gulp = require('gulp'),
	config = require('../config');
//监视文件，并且可以在文件发生改动时候做一些事情
gulp.task('watch', function () {
	gulp.watch('src/tpl/**/*.tpl', ['tpl']);
	gulp.watch(['src/scss/**/*.scss'], ['sass']);
	gulp.watch(['src/js/**/*.*'], ['javascript']);
	gulp.watch(['src/html/**/*.html'], ['html']);
});