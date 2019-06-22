var gulp = require('gulp');
var tmodjs = require('gulp-tmod');
 
gulp.task('tpl', function(){
  gulp.src(['src/tpl/**/*.tpl'])
			.pipe(tmodjs({
				base: 'src/tpl',
				combo: true,
				type: 'amd',
				output: 'build/static/template',
				helpers: 'src/js/template/helper.js'
		})).pipe(gulp.dest('build/static/template'));
});
