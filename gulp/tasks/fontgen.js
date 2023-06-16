const gulp = require('gulp'),
    del = require('del'),
    fontGen = require('gulp-fontgen');

gulp.task('fontGenerate', function() {

    return gulp.src('./font-convert/src/' + '*.{ttf,otf}')
        .pipe(fontGen({
            dest: './font-convert/build/'
        }));
});

gulp.task('fontClean', function() {
    return del([
        './font-convert/build/' + '*',
        '!' + './font-convert/build/' + '*.{woff,woff2}'
    ]);
});
