/**
 * by mochen
 * 2016-7-4 16:03:43
 */
'use strict';

var colors = require('colors');

var ignore = [];

var fs = require('fs'),
  path = require('path'),

  ROOT = path.dirname(__dirname),

  libPath = path.resolve(ROOT, 'lib');

var dirs = filterDir(fs.readdirSync(libPath), ignore);

run(dirs);

function run(dirs) {
  dirs.forEach(function(item) {
    var filePath = path.resolve(libPath, item, 'index.test.js');
    if (fs.existsSync(filePath)) {
      require(filePath);
    } else {
      console.log(colors.green.underline(item + '/index.test.js') + ' ' + colors.red.inverse('is not exists!'));
    }
  });
}


function filterDir(dirs, ignore) {
  var tmp = [],
    ignore = ignore.join('|') || '';
  dirs.forEach(function(item) {
    var _path = path.resolve(libPath, item);
    if (!fs.statSync(_path).isDirectory()) return;
    if (!ignore) {
      tmp.push(item);
    }
    var regExp = new RegExp(ignore);
    if (!regExp.test(item)) {
      tmp.push(item);
    }
  });
  return tmp;
}