var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var prefixerOptions = {
  browsers: ['last 10 versions']
};

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(prefixerOptions))
    .pipe(gulp.dest('./app/temp/styles'));
});