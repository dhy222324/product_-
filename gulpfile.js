let gulp = require('gulp'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
imagemin = require('gulp-imagemin');

gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dis/css'));
})

gulp.task('js',()=>{
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dis/js'));
})
gulp.task('img',()=>{
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dis/img'));
})
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/img/*',['img']);
})