
# assert-dir-equal

  Assert that the contents of two directories are equal.

## Installation

    $ npm install assert-dir-equal

## Example

```js
var assert = require('assert-dir-equal');

// doesn't throw
assert('path/to/actual', 'path/to/expected');

// throws
assert('path/to/actual', 'path/to/not-identical');
```

## License

  MIT
