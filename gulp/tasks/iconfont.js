const gulp = require('gulp'),
    iconFont = require("gulp-iconfont"),
    consolidate = require("gulp-consolidate"),
    config = require('../config');

const fontName = 'svgfont';

gulp.task('font', function(){
    return gulp.src(config.src.svgFont+'*.svg')
        .pipe(iconFont({
            fontName: fontName,
            prependUnicode: false,
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001,
            fontStyle: 'normal',
            fontWeight: 'normal'
        }))
        .on('glyphs', function(glyphs) {
            console.log(glyphs);

            gulp.src(config.src.helpers+'_svgfont.sass')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: fontName,
                    fontPath: '/assets/fonts/',
                    className: 'if'
                }))
                .pipe(gulp.dest(config.src.scss+'components/'));

            gulp.src(config.src.helpers+'icons.html')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: fontName,
                    fontPath: '/assets/fonts/',
                    className: 'if',
                    htmlBefore: '<i class="if ',
                    htmlAfter: '"></i>',
                    htmlBr: ''
                }))
                .pipe(gulp.dest(config.dist.root));
        })
        .pipe(gulp.dest(config.dist.root+'assets/fonts/'));
});
