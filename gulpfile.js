var gulp = require('gulp'),
  styleguide = require('sc5-styleguide'),
  sass = require('gulp-sass'),
  source = 'sass/*.scss',
  outputPath = 'output';

gulp.task('styleguide:generate', function() {
  return gulp.src(source)
    .pipe(styleguide.generate({
        title: 'Style guide template',
        server: true,
        rootPath: outputPath,
        overviewPath: 'README.md',
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('sass/*.scss')
	.pipe(sass())
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('watch', ['styleguide'], function() {
  gulp.watch(['*.scss'], ['styleguide']);
});
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);
