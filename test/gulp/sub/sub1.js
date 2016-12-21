"use strict";

const gulp = require("gulp");

module.exports = function () {
  return gulp.src("fixtures/*.*")
    .pipe(gulp.dest("dest3/"));
};
