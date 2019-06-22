var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

//拷贝HTML文件
gulp.task('html', function() {
  return gulp.src(['src/html/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build/'));
});
