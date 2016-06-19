var gulp = require('gulp');
var scss = require('gulp-scss');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

var srcDir = "src/";
var distDir = "dist/";

gulp.task('js', function() {
  return gulp.src(srcDir + '*.js')
    // .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(distDir));
});

gulp.task('scss', function() {
    return gulp.src(srcDir + 'style.scss').
    pipe(scss()).
    pipe(cssnano()).
    pipe(concat('style.css')).
    pipe(gulp.dest(distDir));
});

gulp.task('htmlmin', function() {
  return gulp.src(srcDir + '*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(distDir))
});

gulp.task('imagemin', function() {
    return gulp.src(srcDir + 'assets/*').
    pipe(imagemin()).
    pipe(gulp.dest(distDir + "assets"));
});

gulp.task('default', ['scss', 'htmlmin', 'imagemin', 'js']);
