
var assert = require('assert');
var equal = require('buffer-equal');
var read = require('fs').readFileSync;
var readdir = require('fs-readdir-recursive');
var resolve = require('path').resolve;
var utf8 = require('is-utf8');

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
    var file = read(resolve(one, rel));
    var other = read(resolve(two, rel));
    if (utf8(file) && utf8(other)) {
      assert.equal(file.toString(), other.toString());
    } else {
      assert(equal(file, other));
    }
  });
}