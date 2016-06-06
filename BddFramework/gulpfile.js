var gulp = require('gulp');
var del = require('del');

gulp.task('cleanTestResults', function () {
    del(['/testresults/']);
});

gulp.task('runLocalTests', ['cleanTestResults'], function () {
    
});


