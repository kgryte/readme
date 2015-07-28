/* global require, describe, it */
'use strict';

var mpath = './../lib/async.js';


// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Recursively make directories:
	mkdirp = require( 'mkdirp' ),

	// Path module:
	path = require( 'path' ),

	// Filesystem module:
	fs = require( 'fs' ),

	// Module to proxy required modules:
	proxyquire = require( 'proxyquire' ),

	// Module to be tested:
	cp = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'async', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a destination', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			cp();
		}
	});

	it( 'should throw an error if not provided a valid destination directory', function test() {
		var values = [
			5,
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				cp( value );
			};
		}
	});

	it( 'should throw an error if not provided a valid options argument', function test() {
		var values = [
			'beep',
			5,
			null,
			true,
			undefined,
			NaN,
			[],
			// function(){} // allowed as fcn is variadic
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue1( values[i] ) ).to.throw( TypeError );
			expect( badValue2( values[i] ) ).to.throw( TypeError );
		}
		function badValue1( value ) {
			return function() {
				cp( './beep/boop', value );
			};
		}
		function badValue2( value ) {
			return function() {
				cp( './beep/boop', value, function(){} );
			};
		}
	});

	it( 'should throw an error if provided an invalid option', function test() {
		var values = [
			5,
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				cp( './beep/boop', {
					'title': value
				});
			};
		}
	});

	it( 'should throw an error if provided a callback argument which is not a function', function test() {
		var values = [
			'beep',
			5,
			null,
			true,
			undefined,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				cp( './beep/boop', {}, value );
			};
		}
	});

	it( 'should create a README.md file in a specified directory', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, onFinish );

		function onFinish( error ) {
			if ( error ) {
				assert.ok( false );
				return;
			}
			var bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

			assert.isTrue( bool );
		}
	});

	it( 'should create a configured README.md file in a specified directory', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module',
			'title': 'example',
			'desc': 'Beep boop.',
			'repo': 'jane/example',
			'license': 'MIT',
			'holder': 'Jane Doe'
		}, onFinish );

		function onFinish( error ) {
			var fpath1,
				fpath2,
				f1, f2;
			if ( error ) {
				assert.ok( false );
				return;
			}
			fpath1 = path.join( dirpath, 'README.md' );
			fpath2 = path.join( __dirname, 'fixtures', 'README.md' );

			f1 = fs.readFileSync( fpath1, {
				'encoding': 'utf8'
			});
			f2 = require( fpath2, {
				'encoding': 'utf8'
			});

			assert.deepEqual( f1, f2 );
		}
	});

	it( 'should pass any read errors to a provided callback', function test() {
		var dirpath,
			cp;

		cp = proxyquire( mpath, {
			'fs': {
				'readFile': function read( path, opts, clbk ) {
					clbk( new Error() );
				}
			}
		});

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		cp( dirpath, onFinish );

		function onFinish( error ) {
			if ( error ) {
				assert.ok( true );
				return;
			}
			assert.ok( false );
		}
	});

	it( 'should pass any write errors to a provided callback', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		cp( dirpath, onFinish );

		function onFinish( error ) {
			if ( error ) {
				assert.ok( true );
				return;
			}
			assert.ok( false );
		}
	});

	it( 'should create a README.md file in a specified directory without requiring a callback', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath );

		setTimeout( onTimeout, 500 );

		function onTimeout() {
			var bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

			assert.isTrue( bool );
		}
	});

	it( 'should create a README.md file using a specified template', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module'
		}, onFinish );

		function onFinish( error ) {
			var bool;
			if ( error ) {
				assert.ok( false );
				return;
			}
			bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

			assert.isTrue( bool );
		}
	});

	it( 'should support alternative licenses', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module',
			'title': 'example',
			'desc': 'Beep boop.',
			'repo': 'jane/example',
			'license': 'WTFPL',
			'holder': 'Jane Doe'
		}, onFinish );

		function onFinish( error ) {
			var fpath1,
				fpath2,
				f1, f2;
			if ( error ) {
				assert.ok( false );
				return;
			}
			fpath1 = path.join( dirpath, 'README.md' );
			fpath2 = path.join( __dirname, 'fixtures', 'nondefault_license.md' );

			f1 = fs.readFileSync( fpath1, {
				'encoding': 'utf8'
			});
			f2 = require( fpath2, {
				'encoding': 'utf8'
			});

			assert.deepEqual( f1, f2 );
		}
	});

	it( 'should ignore any unrecognized options', function test() {
		var dirpath;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'beep': 'boop'
		}, onFinish );

		function onFinish( error ) {
			if ( error ) {
				assert.ok( false );
				return;
			}
			var bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

			assert.isTrue( bool );
		}
	});

});
