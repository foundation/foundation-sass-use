const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass-embedded'));

// Define a task to compile SCSS to CSS
gulp.task('sass', function() {
  return gulp.src('scss/foundation.scss') // Source file
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS and log errors
    .pipe(gulp.dest('css')); // Destination folder
});

// Watch for changes in SCSS files and recompile
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));