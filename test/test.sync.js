/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Recursively make directories:
	mkdirp = require( 'mkdirp' ),

	// Path module:
	path = require( 'path' ),

	// Filesystem module:
	fs = require( 'fs' ),

	// Module to be tested:
	cp = require( './../lib/sync.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sync', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
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

	it( 'should throw an error if provided an invalid options argument', function test() {
		var values = [
			'beep',
			5,
			null,
			true,
			undefined,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				cp( 'beep/boop', value );
			};
		}
	});

	it( 'should create a README.md file in a specified directory', function test() {
		var dirpath,
			bool;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath );

		bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

		assert.isTrue( bool );
	});

	it( 'should create a configured README.md file in a specified directory', function test() {
		var dirpath,
			fpath1,
			fpath2,
			f1, f2;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module',
			'title': 'example',
			'desc': 'Beep boop.',
			'repo': 'jane/example',
			'license': 'MIT',
			'holder': 'Jane Doe'
		});

		fpath1 = path.join( dirpath, 'README.md' );
		fpath2 = path.join( __dirname, 'fixtures', 'README.md' );

		f1 = fs.readFileSync( fpath1, {
			'encoding': 'utf8'
		});
		f2 = fs.readFileSync( fpath2, {
			'encoding': 'utf8'
		});

		assert.deepEqual( f1, f2 );
	});

	it( 'should create a README.md file using a specified template', function test() {
		var dirpath,
			bool;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module'
		});

		bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

		assert.isTrue( bool );
	});

	it( 'should support alternative licenses', function test() {
		var dirpath,
			fpath1,
			fpath2,
			f1, f2;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'template': 'node_module',
			'title': 'example',
			'desc': 'Beep boop.',
			'repo': 'jane/example',
			'license': 'WTFPL',
			'holder': 'Jane Doe'
		});

		fpath1 = path.join( dirpath, 'README.md' );
		fpath2 = path.join( __dirname, 'fixtures', 'nondefault_license.md' );

		f1 = fs.readFileSync( fpath1, {
			'encoding': 'utf8'
		});
		f2 = fs.readFileSync( fpath2, {
			'encoding': 'utf8'
		});

		assert.deepEqual( f1, f2 );
	});

	it( 'should ignore any unrecognized options', function test() {
		var dirpath,
			bool;

		dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

		mkdirp.sync( dirpath );
		cp( dirpath, {
			'beep': 'boop'
		});

		bool = fs.existsSync( path.join( dirpath, 'README.md' ) );

		assert.isTrue( bool );
	});

});
