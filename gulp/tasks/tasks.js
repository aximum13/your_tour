const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function () {
    return del([
        'dist/**/*',
        'src/assets/js',
        'src/assets/css',
        'src/assets/*.js',
        'src/assets/*.css',
        'src/assets/*.map'
    ]);
});
gulp.task('fontGen', gulp.series('fontGenerate', 'fontClean'));
gulp.task('iconFontGen', gulp.series('font'));
