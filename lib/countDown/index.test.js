/**
 * by mochen
 * 2016-7-1 16:04:43
 */
'use strict';

var countDown = require('./index.js');
var expect = require('chai').expect;

describe(' countDown 测试', function() {

  it('剩余500ms,测试onend返回', function(done) {
    countDown({
      left: 500,
      onend: function(data) {
        expect(data.d).equal(0);
        done();
      }
    })
  });
  it('剩余3200ms,测试onrun条件返回', function(done) {
    countDown({
      left: 3200,
      onrun: function(data) {
        if (data.s < 3) {
          expect(data.s).to.be.equal(2);
          done();
        }
      }
    })
  });
  it('剩余1200ms,测试onrun第一次返回秒数为1', function(done) {
    countDown({
      left: 1200,
      onrun: function(data) {
        expect(data.s).to.be.equal(1);
        done();
      }
    })
  });
})