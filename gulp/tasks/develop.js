var gulp = require('gulp'),
	runSequence = require('gulp-run-sequence'),
	clean = require('gulp-clean');

gulp.task('develop', function(){
	runSequence(/*'clean',*/'sass', 'html', 'javascript', 'font', 'tpl', 'image', 'copy', 'watch');
	
});

gulp.task('clean', function(){
    //清除编译后的文件
	return gulp.src('build/**/*').pipe(clean());
});