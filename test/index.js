
var assert = require('assert');
var equal = require('..');
var resolve = require('path').resolve;

describe('assert-dir-equal', function(){
  it('should not throw when two diretories are equivalent', function(){
    var one = resolve('test/fixtures/same');
    var two = resolve('test/fixtures/identical');
    assert.doesNotThrow(function(){
      equal(one, two);
    });
  });

  it('should throw when two directories are different', function(){
    var one = resolve('test/fixtures/same');
    var two = resolve('test/fixtures/different-file');
    assert.throws(function(){
      equal(one, two);
    });
  });

  it('should throw for non utf-8 files', function(){
    var one = resolve('test/fixtures/same');
    var two = resolve('test/fixtures/different-image');
    assert.throws(function(){
      equal(one, two);
    });
  });

  it('should ignore hidden files by default', function() {
    var one = resolve('test/fixtures/with-hidden-file');
    var two = resolve('test/fixtures/just-file');
    assert.doesNotThrow(function () {
      equal(one, two);
    });
  })
});
