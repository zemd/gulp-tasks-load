# Yet another gulp tasks loader

> Load your tasks from directory.

[![npm version](https://badge.fury.io/js/gulp-tasks-load.svg)](https://www.npmjs.com/package/gulp-tasks-load)
[![Code Climate](https://codeclimate.com/github/zemd/gulp-tasks-load/badges/gpa.svg)](https://codeclimate.com/github/zemd/gulp-tasks-load)
[![dependencies:?](https://img.shields.io/david/zemd/gulp-tasks-load.svg)](https://david-dm.org/zemd/gulp-tasks-load)
[![devDependencies:?](https://img.shields.io/david/dev/zemd/gulp-tasks-load.svg?style=flat)](https://david-dm.org/zemd/gulp-tasks-load)

## Installation

```bash
npm install gulp-tasks-load --save
```

or 

```bash
yarn add gulp-tasks-load
```

## Usage

To configure gulp tasks simply import the package and pass glob as it's first parameter. Paths like "gulp/folder/task.js"
will be converted into tasks like `folder:task`.

```javascript
const path = require("path");
require("gulp-tasks-load")(path.join(__dirname, "gulp", "**/*.js"));
```

Then `gulp --tasks` will show you something like:

```
Using gulpfile path/to/your/gulpfile.js
Tasks for path/to/your/gulpfile.js
├── sub:sub1
├── task1
└── task2
```

## Configuration

You must pass `base` option with second parameter if your tasks folder is not called as `gulp`.
```javascript
require("gulp-tasks-load")("tasks/**/*.js", {base: "tasks"});
```

You can also pass options object to `node-glob` function by setting third parameter.
```javascript
require("gulp-tasks-load")("tasks/**/*.js", {base: "tasks"}, {debug: true});
```
See more options in [glob](https://github.com/isaacs/node-glob#options) package.


## License

gulp-tasks-load is released under the MIT license.

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/red_rabbit)

