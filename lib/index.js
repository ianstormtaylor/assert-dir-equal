
var assert = require('assert');
var equal = require('buffer-equal');
var read = require('fs').readFileSync;
var readdir = require('fs-readdir-recursive');
var resolve = require('path').resolve;
var utf8 = require('is-utf8');

/**
 * Export `assertDirEqual`.
 *
 * @type {Function}
 */

module.exports = assertDirEqual;

/**
 * Assert two directories have files with equivalent contents.
 *
 * @param {String} actual
 * @param {String} expected
 * @param {Object} [options]
 * @param {Function} [opts.filter]
 */

function assertDirEqual(actual, expected, options){
  options = normalizeOpts(options);
  var actuals = readdir(actual, options.filter);
  var expecteds = readdir(expected, options.filter);
  assert.deepEqual(actuals, expecteds);
  actuals.forEach(function(rel){
    var a = read(resolve(actual, rel));
    var e = read(resolve(expected, rel));
    if (utf8(a) && utf8(e)) {
      assert.equal(a.toString(), e.toString());
    } else {
      assert(equal(a, e));
    }
  });
}

/**
 * Normalize the `options` passed in.
 *
 * @param {Object} [options]
 * @return {Object}
 */

function normalizeOpts(options) {
  options = options || {};
  options.filter = options.filter || undefined;
  return options
}
