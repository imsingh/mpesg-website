'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
    js: [
        './node_modules/vue/dist/vue.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        './node_modules/instafeed.js/instafeed.min.js'
        ],
    sass: ['./src/sass/**/*.scss'],
    html: ['index.html'],
    fonts: ['./node_modules/bootstrap-sass/assets/fonts/**/*', 'node_modules/font-awesome/fonts/**/*'],
    assets: ['./src/assets/**/*'],
    watches: {
        'html': ['index.html'],
        'js' : ['./src/js/**/*.js']
    }
};

gulp.task('default', ['copy', 'watch'] , function() {
    browserSync({server: './dist'});
});
 
gulp.task('compile-sass', function () {
  return gulp.src(path.sass)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('compile-js', function () {
  return gulp.src(path.watches.js)
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream: true}));
});

gulp.task('copy_html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});
gulp.task('copy_js', function() {
    return gulp.src(path.js)
        .pipe(concat('vendor.bundle.js'))
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('copy_fonts', function() {
    return gulp.src(path.fonts)
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy_assets', function() {
    return gulp.src(path.assets)
        .pipe(gulp.dest('./dist/assets'));
})
 
gulp.task('sass:watch', function () {
  gulp.watch(path.sass, ['compile-sass']);
});

gulp.task('html:watch', function() {
    gulp.watch(path.watches.html, ['copy_html'])
});

gulp.task('js:watch', function() {
    gulp.watch(path.watches.js, ['compile-js'])
});

gulp.task("assets:watch", function() {
    gulp.watch(path.assets, ['copy_assets']);
});

gulp.task('watch', ['html:watch', 'sass:watch', 'js:watch', 'assets:watch']);

gulp.task('copy', ['copy_html', 'copy_js', 'copy_fonts', 'copy_assets'] );

gulp.task('build', ['copy', 'compile-js', 'compile-sass']);