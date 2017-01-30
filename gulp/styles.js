'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import compass from 'gulp-compass';
import sourcemaps from 'gulp-sourcemaps';
import cssNano from 'gulp-cssnano';
import rename from 'gulp-rename';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';

const compassOptions = {
    config_file: 'config.rb',
    sourcemap: true,
    css: 'src/css',
    sass: 'src/scss'
};

// compile SASS with sourcemaps
gulp.task('compass', () => {
    gulp.src(global.paths.sass)
        .pipe(sourcemaps.init())
        .pipe(compass(compassOptions)).on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(global.paths.css))
        .pipe(livereload());
});

// compile SASS (excludes sourcemaps)
gulp.task('compass_dist', () => {
    compassOptions.sourcemap = false;

    gulp.src(global.paths.sass)
    .pipe(compass(compassOptions)).on('error', function(error) {
        gutil.log(error.toString());
        this.emit('end');
    })
    .pipe(cssNano())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(global.paths.dist));
});
