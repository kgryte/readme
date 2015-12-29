{{{title}}}
===
{{#sections.section:badges}}
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]
{{/sections.section:badges}}

> {{{desc}}}
{{#sections.section:installation}}


## Installation

``` bash
$ npm install {{{title}}}
```
{{/sections.section:installation}}
{{#sections.section:usage}}


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
{{/sections.section:usage}}
{{#sections.section:notes}}


## Notes

*	First note.
{{/sections.section:notes}}
{{#sections.section:examples}}


## Examples

``` javascript
var foo = require( '{{{title}}}' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```
{{/sections.section:examples}}
{{#sections.section:cli}}


---
## CLI
{{#sections.section:cli:installation}}

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g {{{title}}}
```
{{/sections.section:cli:installation}}


{{#sections.section:cli:usage}}
### Usage

``` bash

```
{{/sections.section:cli:usage}}
{{#sections.section:cli:notes}}


### Notes

* 	First note
{{/sections.section:cli:notes}}
{{#sections.section:cli:examples}}


### Examples

``` bash
$
```
{{/sections.section:cli:examples}}
{{/sections.section:cli}}
{{#sections.section:tests}}


---
## Tests

{{#sections.section:tests:unit}}
### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.
{{/sections.section:tests:unit}}
{{#sections.section:tests:coverage}}


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```
{{/sections.section:tests:coverage}}
{{#sections.section:tests:browsers}}


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->
{{/sections.section:tests:browsers}}
{{/sections.section:tests}}
{{#sections.section:license}}


---
## License

{{#license}}{{license}}{{/license}}{{^license}}[MIT license](http://opensource.org/licenses/MIT){{/license}}.


## Copyright

Copyright &copy; {{year}}. {{#holder}}{{holder}}.{{/holder}}
{{/sections.section:license}}


[npm-image]: http://img.shields.io/npm/v/{{{title}}}.svg
[npm-url]: https://npmjs.org/package/{{{title}}}

[build-image]: http://img.shields.io/travis/{{{repo}}}/master.svg
[build-url]: https://travis-ci.org/{{{repo}}}

[coverage-image]: https://img.shields.io/codecov/c/github/{{{repo}}}/master.svg
[coverage-url]: https://codecov.io/github/{{{repo}}}?branch=master

[dependencies-image]: http://img.shields.io/david/{{{repo}}}.svg
[dependencies-url]: https://david-dm.org/{{{repo}}}

[dev-dependencies-image]: http://img.shields.io/david/dev/{{{repo}}}.svg
[dev-dependencies-url]: https://david-dm.org/dev/{{{repo}}}

[github-issues-image]: http://img.shields.io/github/issues/{{{repo}}}.svg
[github-issues-url]: https://github.com/{{{repo}}}/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
