
var gulp = require('gulp'),
	replace = require('gulp-replace');

//拷贝js文件
gulp.task('javascript', function(){
	
	return gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('build/static/js/'));

});
