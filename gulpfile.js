var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
return gulp.src('*.ts')
    .pipe(ts({
        module: 'commonjs',
        target: 'es6'
    }))
    .pipe(gulp.dest('.'));
});
