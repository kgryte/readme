example
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Beep boop.


## Installation

``` bash
$ npm install example
```


## Usage

``` javascript
var foo = require( 'example' );
```

#### foo()

What does `foo` do?

``` javascript
foo()
// returns `undefined`
```


## Examples

``` javascript
var foo = require( 'example' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Jane Doe.


[npm-image]: http://img.shields.io/npm/v/example.svg
[npm-url]: https://npmjs.org/package/example

[build-image]: http://img.shields.io/travis/jane/example/master.svg
[build-url]: https://travis-ci.org/jane/example

[coverage-image]: https://img.shields.io/codecov/c/github/jane/example/master.svg
[coverage-url]: https://codecov.io/github/jane/example?branch=master

[dependencies-image]: http://img.shields.io/david/jane/example.svg
[dependencies-url]: https://david-dm.org/jane/example

[dev-dependencies-image]: http://img.shields.io/david/dev/jane/example.svg
[dev-dependencies-url]: https://david-dm.org/dev/jane/example

[github-issues-image]: http://img.shields.io/github/issues/jane/example.svg
[github-issues-url]: https://github.com/jane/example/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
