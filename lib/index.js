
var assert = require('assert');
var readdir = require('fs-readdir-recursive');
var resolve = require('path').resolve;
var read = require('fs').readFileSync;

/**
 * Expose `assertDirEqual`.
 */

module.exports = assertDirEqual;

/**
 * Assert two directories have files with equivalent contents.
 *
 * @param {String} one
 * @param {String} two
 */

function assertDirEqual(one, two){
  var ones = readdir(one);
  var twos = readdir(two);
  assert.deepEqual(ones, twos);
  ones.forEach(function(rel){
    var file = read(resolve(one, rel), 'utf8');
    var other = read(resolve(two, rel), 'utf8');
    assert.equal(file, other);
  });
}