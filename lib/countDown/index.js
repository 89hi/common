/**
 * by mochen
 * 2016-7-12 11:04:42
 */
'use strict';

var parseMs = function(ms) {
  var days = ms / (86400 * 1000) >> 0,
    hours = (ms -= days * 86400 * 1000) / (3600 * 1000) >> 0,
    minutes = (ms -= hours * 3600 * 1000) / (60 * 1000) >> 0,
    seconds = (ms -= minutes * 60 * 1000) / 1000 >> 0,
    ms = (ms -= seconds * 1000) / 10 >> 0;
  return {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
    ms: ms
  }
}

var countDown = function(options) {
  this.left = options.left >> 0 || 0;
  this.interval = options.interval || 333;
  this.start = +new Date();
  this.end = this.start + this.left;
  this.onrun = options.onrun || function() {};
  this.onend = options.onend || function() {};
  this.timer = null;
  this.status = 1;
  this._run();
}
countDown.prototype.stop = function() {
  clearTimeout(this.timer);
  this.status = 0;
  this.timer = null;
}
countDown.prototype._run = function() {
  var self = this;
  if (!this.status) {
    return;
  }
  var now = +new Date();
  if (now >= this.end) {
    this.onend.call(this, parseMs(0));
    this.stop();
  } else {
    this.onrun.call(this, parseMs(this.end - now));
    this.timer = setTimeout(function() {
      self._run();
    }, this.interval)
  }
}

var _countDown = function(options) {
  return new countDown(options);
}

module.exports = _countDown;