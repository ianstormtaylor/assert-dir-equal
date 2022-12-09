
const assert = require('assert');
const equal = require('buffer-equal');
const read = require('fs').readFileSync;
const readdir = require('fs-readdir-recursive');
const resolve = require('path').resolve;
const utf8 = require('is-utf8');

/**
 * Normalize the `options` passed in.
 *
 * @param {Object} [options]
 * @return {Object}
 */

function normalizeOptions(options) {
  options = options || {};
  options.filter = options.filter || undefined;
  return options
}

/**
 * Assert two directories have files with equivalent contents.
 *
 * @param {String} actual
 * @param {String} expected
 * @param {Object} [options]
 * @param {Function} [opts.filter]
 */

function assertDirEqual(actual, expected, options){
  options = normalizeOptions(options);
  const actuals = readdir(actual, options.filter);
  const expecteds = readdir(expected, options.filter);
  assert.deepStrictEqual(actuals, expecteds);
  actuals.forEach(function(rel){
    const a = read(resolve(actual, rel));
    const e = read(resolve(expected, rel));
    if (utf8(a) && utf8(e)) {
      assert.equal(a.toString(), e.toString());
    } else {
      assert(equal(a, e));
    }
  });
}

module.exports = assertDirEqual;