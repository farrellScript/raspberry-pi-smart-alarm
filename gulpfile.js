var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles',function(){
  gulp.src('./app/scss/index.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(autoprefixer({
      browsers:['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
})

//Watch task
gulp.task('default',function() {
    gulp.watch('./app/scss/index.scss',['styles'])
});
