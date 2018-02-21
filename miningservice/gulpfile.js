var gulp = require('gulp');
    sass = require('gulp-sass');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    fileinclude = require('gulp-file-include'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function () {
    return gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('libs', function() {
    return gulp.src([
        'app/libs/parallax/parallax.min.js',
        'app/libs/pagescroll/PageScroll2id.min.js',
        'app/libs/mfp/jquery.magnific-popup.min.js',
        'app/libs/dist/slideout.min.js',
        'app/libs/jquery/jquery.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('js', function() {
    return gulp.src([
        'app/js/bootstrap.min.js',
        'app/js/common.js',
        ])
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch',['default'], function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});