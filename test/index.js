
const { throws, doesNotThrow } = require('assert');
const equal = require('..');
const { resolve } = require('path');

describe('assert-dir-equal', function(){
  it('should not throw when two diretories are equivalent', function(){
    const one = resolve('test/fixtures/same');
    const two = resolve('test/fixtures/identical');
    doesNotThrow(() => equal(one, two));
  });

  it('should throw when two directories are different', function(){
    const one = resolve('test/fixtures/same');
    const two = resolve('test/fixtures/different-file');
    throws(() => equal(one, two));
  });

  it('should throw for non utf-8 files', function(){
    const one = resolve('test/fixtures/same');
    const two = resolve('test/fixtures/different-image');
    throws(() => equal(one, two));
  });

  it('should ignore hidden files by default', function() {
    const one = resolve('test/fixtures/with-hidden-file');
    const two = resolve('test/fixtures/just-file');
    doesNotThrow(() => equal(one, two));
  })

  it('should allow seeing hidden files', function(){
    const one = resolve('test/fixtures/with-hidden-file');
    const two = resolve('test/fixtures/just-file');
    throws(() => equal(one, two, {filter: () => true}));
  });
});
