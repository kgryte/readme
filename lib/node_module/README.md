{{{title}}}
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> {{{desc}}}


## Installation

``` bash
$ npm install {{{title}}}
```


## Usage

``` javascript
var foo = require( '{{{title}}}' );
```

#### foo()

What does `foo` do?

``` javascript
foo()
// returns `undefined`
```


## Examples

``` javascript
var foo = require( '{{{title}}}' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

{{#license}}{{license}}{{/license}}{{^license}}[MIT license](http://opensource.org/licenses/MIT){{/license}}.


## Copyright

Copyright &copy; {{year}}. {{#holder}}{{holder}}.{{/holder}}


[npm-image]: http://img.shields.io/npm/v/{{{title}}}.svg
[npm-url]: https://npmjs.org/package/{{{title}}}

[travis-image]: http://img.shields.io/travis/{{{repo}}}/master.svg
[travis-url]: https://travis-ci.org/{{{repo}}}

[codecov-image]: https://img.shields.io/codecov/c/github/{{{repo}}}/master.svg
[codecov-url]: https://codecov.io/github/{{{repo}}}?branch=master

[dependencies-image]: http://img.shields.io/david/{{{repo}}}.svg
[dependencies-url]: https://david-dm.org/{{{repo}}}

[dev-dependencies-image]: http://img.shields.io/david/dev/{{{repo}}}.svg
[dev-dependencies-url]: https://david-dm.org/dev/{{{repo}}}

[github-issues-image]: http://img.shields.io/github/issues/{{{repo}}}.svg
[github-issues-url]: https://github.com/{{{repo}}}/issues
