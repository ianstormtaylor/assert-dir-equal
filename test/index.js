
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
    var two = resolve('test/fixtures/different');
    assert.throws(function(){
      equal(one, two);
    });
  });
});