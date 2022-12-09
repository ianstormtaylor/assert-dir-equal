
# assert-dir-equal

Assert that the contents of two directories are equal. Uses file list checks, string comparison for utf-8 compatible files, and buffer contents comparison for binaries.

## Installation

    npm install assert-dir-equal

## Example

```js
const assert = require('assert-dir-equal');

// doesn't throw
assert('path/to/actual', 'path/to/expected');

// throws
assert('path/to/actual', 'path/to/not-identical');
```

Files starting with a dot are ignored by default, so they do not contribute to the equality check. This can be altered with filter option:

```js
// check *all* files, including hidden ones
assert('path/to/actual', 'path/to/expected', {filter: () => true});
```

## License

[MIT](LICENSE)
