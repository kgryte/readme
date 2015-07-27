'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
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
* @param {String} [options.license=] - license
* @param {String} [options.holder] - copyright holder
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'cp()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'template' ) ) {
		opts.template = options.template;
		if ( !isString( opts.template ) ) {
			return new TypeError( 'cp()::invalid option. Template option must be a string primitive. Option: `' + opts.template + '`.' );
		}
		if ( !contains( templates, opts.template ) ) {
			return new Error( 'cp()::invalid option. Unrecognized template name. Must be one of [' + templates.join( ',' ) + '] Option: `' + opts.template + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'title' ) ) {
		opts.title = options.title;
		if ( !isString( opts.title ) ) {
			return new TypeError( 'cp()::invalid option. Title option must be a string primitive. Option: `' + opts.title + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'cp()::invalid option. Description must be a string primitive. Option: `' + opts.desc + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'repo' ) ) {
		opts.repo = options.repo;
		if ( !isString( opts.repo ) ) {
			return new TypeError( 'cp()::invalid option. Repository option must be a string primitive. Option: `' + opts.repo + '`.' );
		}
		if ( opts.repo.split( '/' ).length !== 2 ) {
			return new Error( 'cp()::invalid option. Repository option must consist of two parts: an owner/organization and a repository name. Option: `' + opts.repo + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'license' ) ) {
		opts.license = options.license;
		if ( !isString( opts.license ) ) {
			return new TypeError( 'cp()::invalid option. License option must be a string primitive. Option: `' + opts.license + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'holder' ) ) {
		opts.holder = options.holder;
		if ( !isString( opts.holder ) ) {
			return new TypeError( 'cp()::invalid option. Copyright holder option must be a string primitive. Option: `' + opts.holder + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
