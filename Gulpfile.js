'use strict';

var gulp = require('gulp'),
    nodemon = require('nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'app/index.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['start'], function() {

});