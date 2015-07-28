README
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a `README.md` file.


## Installation

``` bash
$ npm install @kgryte/readme
```


## Usage

``` javascript
var cp = require( '@kgryte/readme' );
```

#### cp( dest[, opts ][, clbk ] )

Asynchronously create a `README.md` file in a specified `destination` directory.

``` javascript
cp( 'path/to/a/directory', onCreate );

function onCreate( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
```

The function accepts the following `options`:
*	__template__: `README.md` template name. Default: `'node_module'`.
*	__title__: title. Default: `''`.
*	__desc__: description. Default: `''`.
*	__repo__: Github repository.
*	__license__: license. Default: [`'MIT'`](http://opensource.org/licenses/MIT)'`.
*	__holder__: copyright holder.

By default, a `node_module` template is used. To specify a different `README.md` template, set the `template` option.

``` javascript
cp( 'path/to/a/directory', {
	'template': 'node_module'
});
```

To specify `README.md` fields, set the corresponding `options`.

``` javascript
cp( 'path/to/a/directory', {
	'title': 'beep',
	'holder': 'Jane Doe',
	'repo': 'janedoe/beep'
});
```



#### cp.sync( dest[, opts] )

Synchronously create a `README.md` file in a specified `destination` directory.

``` javascript
cp.sync( 'path/to/a/directory' );
```

The function accepts the same `options` as the asynchronous version.


## Notes

* 	Supported templates may be found in the `./lib` directory and are named according to the directory name.
*	The repository is assumed to be a Github repository. Thus, only the owner/organization and repository names are needed; e.g.,

	```
	kgryte/readme
	```


## Examples

``` javascript
var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( '@kgryte/readme' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'node_module',
	'title': 'beep',
	'desc': 'Beep boop.',
	'repo': 'janedoe/beep',
	'license': 'MIT',
	'holder': 'Jane Doe'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

---
## CLI


### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g @kgryte/readme
```


### Usage

``` bash
Usage: readme [options] [destination]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -tmpl  --template [name]     Template name. Default: 'node_module'.
         --title [title]       Title. Default: ''.
  -desc  --description [desc]  Description. Default: ''.
         --repo [repo]         Repository. Default: ''.
         --license [name]      License. Default: 'MIT'.
         --holder [holder]     Copyright author.
```


### Examples

``` bash
$ cd ~/my/project/directory
$ readme
# => creates a README.md file in the current working directory
```

To specify a destination other than the current working directory, provide a `destination`.

``` bash
$ readme ./../some/other/directory
```



---
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

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/readme.svg
[npm-url]: https://npmjs.org/package/@kgryte/readme

[travis-image]: http://img.shields.io/travis/kgryte/readme/master.svg
[travis-url]: https://travis-ci.org/kgryte/readme

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/readme/master.svg
[codecov-url]: https://codecov.io/github/kgryte/readme?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/readme.svg
[dependencies-url]: https://david-dm.org/kgryte/readme

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/readme.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/readme

[github-issues-image]: http://img.shields.io/github/issues/kgryte/readme.svg
[github-issues-url]: https://github.com/kgryte/readme/issues
