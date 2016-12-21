"use strict";

const gulp = require("gulp");
const path = require("path");

const globby = require("globby");
const isValidGlob = require("is-valid-glob");
const slash = require("slash");

/**
 * @param {string|string[]} glob
 * @param {{base:string}} options
 * @param {{}} globOptions node-glob options
 */
module.exports = function (glob, options = {base: "gulp"}, globOptions = {}) {

  if (!isValidGlob(glob)) {
    throw new Error('Invalid glob argument: ' + glob);
  }

  let basePath = path.resolve(process.cwd(), options.base);

  globby.sync(glob, globOptions)
    .forEach(function (file) {
      let filePath = path.resolve(process.cwd(), file);

      let taskName = path.relative(basePath, filePath);
      taskName = slash(taskName);
      taskName = taskName.substring(0, taskName.length - path.extname(taskName).length);
      taskName = taskName.replace(new RegExp("\/", "g"), ":");

      gulp.task.apply(gulp, [taskName].concat(require(filePath)));
    });
};

