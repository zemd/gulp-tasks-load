"use strict";

const gulp = require("gulp");

module.exports = function () {
  return gulp.src("gulp/*.js")
    .pipe(gulp.dest("dest1/"));
};
