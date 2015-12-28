/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	flatten = require( './../lib/sections.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'README.md sections', function tests() {

	it( 'should export a function', function test() {
		expect( flatten ).to.be.a( 'function' );
	});

	it( 'should flatten an array of sections', function test() {
		var expected,
			sections,
			actual;

		sections = [
			'beep',
			'boop'
		];

		expected = {
			'section:beep': true,
			'section:boop': true
		};

		actual = flatten( sections );
		assert.deepEqual( actual, expected );
	});

});
