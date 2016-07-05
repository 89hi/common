/**
 * by mochen
 * 2016-7-4 16:03:43
 */
'use strict';

var colors = require('colors');

var ignore = ["^\\.", "^_", "node_modules"];

var fs = require('fs'),
  path = require('path'),

  ROOT = path.dirname(__dirname);

var dirs = filterDir(fs.readdirSync(ROOT), ignore);

run(dirs);

function run(dirs) {
  dirs.forEach(function(item) {
    var filePath = path.resolve(item, 'index.test.js');
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
    if (!fs.statSync(item).isDirectory()) return;
    var regExp = new RegExp(ignore);
    if (!regExp.test(item)) {
      tmp.push(item);
    }
  });
  return tmp;
}