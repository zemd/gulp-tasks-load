"use strict";

const gulp = require("gulp");

module.exports = function () {
  return gulp.src("fixtures/**/*.css")
    .pipe(gulp.dest("dest2/"));
};
