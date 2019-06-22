var gulp = require('gulp');
//copy其他资源
gulp.task('copy', function(){
	gulp.src(['lib/**/*.*'])
		.pipe(gulp.dest('build/lib'));
});