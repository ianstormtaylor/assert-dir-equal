
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
 * @param {String} actual
 * @param {String} expected
 * @param {Object} [opts]
 * @param {Function} [opts.filter]

 */

function assertDirEqual(actual, expected, opts){
  opts = normalizeOpts(opts);
  var actuals = readdir(actual, opts.filter);
  var expecteds = readdir(expected, opts.filter);
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

function normalizeOpts(opts) {
  opts = opts || {};
  opts.filter = opts.filter || undefined;
  return opts
}
