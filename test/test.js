/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	cp = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'README.md', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
	});

	it( 'should export a function for creating a README.md file synchronously', function test() {
		expect( cp.sync ).to.be.a( 'function' );
	});

});
