'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	isStringArray = require( 'validate.io-string-array' ),
	contains = require( 'validate.io-contains' ),
	templates = require( './templates.js' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} [options.title] - title
* @param {String} [options.desc] - description
* @param {String} [options.repo] - Github repository
* @param {String} [options.license] - license
* @param {String} [options.holder] - copyright holder
* @param {String[]} [options.sections] - sections
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	var key, i;
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'template' ) ) {
		opts.template = options.template;
		if ( !isString( opts.template ) ) {
			return new TypeError( 'invalid option. Template option must be a string primitive. Option: `' + opts.template + '`.' );
		}
		if ( !contains( templates, opts.template ) ) {
			return new Error( 'invalid option. Unrecognized template name. Must be one of [' + templates.join( ',' ) + '] Option: `' + opts.template + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'title' ) ) {
		opts.title = options.title;
		if ( !isString( opts.title ) ) {
			return new TypeError( 'invalid option. Title option must be a string primitive. Option: `' + opts.title + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'invalid option. Description must be a string primitive. Option: `' + opts.desc + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'repo' ) ) {
		opts.repo = options.repo;
		if ( !isString( opts.repo ) ) {
			return new TypeError( 'invalid option. Repository option must be a string primitive. Option: `' + opts.repo + '`.' );
		}
		if ( opts.repo.split( '/' ).length !== 2 ) {
			return new Error( 'invalid option. Repository option must consist of two parts: an owner/organization and a repository name. Option: `' + opts.repo + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'license' ) ) {
		opts.license = options.license;
		if ( !isString( opts.license ) ) {
			return new TypeError( 'invalid option. License option must be a string primitive. Option: `' + opts.license + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'holder' ) ) {
		opts.holder = options.holder;
		if ( !isString( opts.holder ) ) {
			return new TypeError( 'invalid option. Copyright holder option must be a string primitive. Option: `' + opts.holder + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'sections' ) ) {
		if ( !isStringArray( options.sections ) ) {
			return new TypeError( 'invalid option. Sections option must be a string array. Option: `' + options.sections + '`.' );
		}
		for ( i = 0; i < options.sections.length; i++ ) {
			key = 'section:' + options.sections[ i ].replace( /\./, ':' );
			opts[ key ] = true;
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
