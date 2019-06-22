
var gulp = require('gulp');

gulp.task('font', function(){
	return gulp.src(['src/fonts/**/*.*'])
		.pipe(gulp.dest('build/static/fonts/'));
});
