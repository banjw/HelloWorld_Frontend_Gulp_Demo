var gulp = require('gulp'),
	compass = require('gulp-compass');

gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(compass({
			css: 'build/static/css',
			sass: 'src/scss',
			style: 'compressed'
		}))
		.pipe(gulp.dest('build/static/css'));
});
