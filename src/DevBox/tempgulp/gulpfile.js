var gulp          =     require('gulp'),
    plumber       =     require('gulp-plumber'),
    rename        =     require('gulp-rename');
var autoprefixer  =     require('gulp-autoprefixer');
var babel         =     require('gulp-babel');
var concat        =     require('gulp-concat');
var jshint        =     require('gulp-jshint');
var uglify        =     require('gulp-uglify');
var imagemin      =     require('gulp-imagemin'),
    cache         =     require('gulp-cache');
var sass          =     require('gulp-sass');
var browserSync   =     require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('src/assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/images/'));
});

gulp.task('styles', function(){
  gulp.src(['src/assets/style/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/assets/style/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src('src/assets/js/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('dist/assets/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/scripts/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("src/assets/style/**/*.scss", ['styles']);
  gulp.watch("src/assets/js/**/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
});