// including plugins
var gulp = require('gulp'),
    less = require("gulp-less"),
    watch = require("gulp-watch");


var paths = {

  // ## Source paths (useful for watches and read tasks, can be globs/arrays)
  src: {
    less: ['stylesheets/*.less', 'stylesheets/**/*.less']
  },

  dest: {
    css: 'stylesheets',
  },
};

// task to compile less to css
gulp.task('compile-less', function () {
    gulp.src(paths.src.less) // path to your file
    .pipe(less())
    .pipe(gulp.dest(paths.dest.css));
});


// task to watch changes to less files
gulp.task('watch-less', function () {
    watch({glob: paths.src.less}, function (files) { // watch any changes on coffee files
        gulp.start('compile-less'); // run the compile task
    });
});
