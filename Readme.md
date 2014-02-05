
# assert-dir-equal

  Assert that the contents of two directories are equal.

## Installation

    $ npm install assert-dir-equal

## Example

```js
var assert = require('assert-dir-equal');

// doesn't throw
assert('path/to/dir', 'path/to/identical-dir');

// throws
assert('path/to/dir', 'path/to/different-dir');
```

## License

  MIT