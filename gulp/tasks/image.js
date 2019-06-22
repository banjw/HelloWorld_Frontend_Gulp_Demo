
var gulp = require('gulp');

//拷贝图像文件
gulp.task('image', function(){
	return gulp.src('src/images/**/*.*')
		.pipe(gulp.dest('build/static/images/'));

});
