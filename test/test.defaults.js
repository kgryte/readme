/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	defaults = require( './../lib/defaults.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'README.md template defaults', function tests() {

	it( 'should export an object', function test() {
		expect( defaults ).to.be.an( 'object' );
		assert.ok( Object.keys( defaults ) );
		expect( defaults[ 'node_module' ] ).to.be.an( 'object' );
	});

});
