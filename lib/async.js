'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	isFunction = require( 'validate.io-function' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	mustache = require( 'mustache' ),
	merge = require( 'utils-merge2' )(),
	noop = require( '@kgryte/noop' ),
	validate = require( './validate.js' ),
	defaults = require( './defaults.js' );


// COPY //

/**
* FUNCTION: cp( dest[, opts ][, clbk ] )
*	Asynchronously creates a README.md file.
*
* @param {String} dest - README.md destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.template="node_module"] - README.md template to use
* @param {String} [opts.title=""] - title
* @param {String} [opts.desc=""] - description
* @param {String} [opts.repo=""] - Github repository
* @param {String} [opts.license="MIT"] - license
* @param {String} [opts.holder=""] - copyright holder
* @param {String[]} [opts.sections] - sections
* @param {Function} [clbk] - callback to invoke upon attempting to create a README.md file
* @returns {Void}
*/
function cp() {
	var args = arguments,
		nargs = args.length,
		tmpl = 'node_module',
		opts = {},
		options,
		fpath,
		dpath,
		dest,
		clbk,
		err,
		flg;

	if ( !nargs ) {
		throw new Error( 'insufficient input arguments. Must provide a file destination.' );
	}
	dest = args[ 0 ];
	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( nargs === 1 ) {
		clbk = noop;
	}
	else if ( nargs === 2 ) {
		if ( isObject( args[ 1 ] ) ) {
			options = args[ 1 ];
			clbk = noop;
			flg = true;
		}
		else if ( isFunction( args[ 1 ] ) ) {
			clbk = args[ 1 ];
		}
		else {
			throw new TypeError( 'invalid input argument. Second argument must either be an options object or a callback. Value: `' + args[ 1 ] + '`.' );
		}
	}
	else {
		options = args[ 1 ];
		clbk = args[ 2 ];
		flg = true;
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	}
	if ( flg ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts = merge( {}, defaults[ tmpl ], opts );
	tmpl = opts.template || tmpl;

	opts.year = new Date().getFullYear();
	if ( opts.license === 'MIT' ) {
		opts.license = '';
	}

	fpath = path.join( __dirname, tmpl, 'README.md' );
	dpath = path.join( dest, 'README.md' );

	fs.readFile( fpath, {'encoding':'utf8'}, onRead );

	/**
	* FUNCTION: onRead( error, file )
	*	Callback invoked upon reading a file.
	*
	* @private
	* @param {Error} error - error object
	* @param {String} file - file contents
	* @returns {Void}
	*/
	function onRead( error, file ) {
		var out;
		if ( error ) {
			return clbk( error );
		}
		out = mustache.render( file, opts );
		fs.writeFile( dpath, out, onWrite );
	}

	/**
	* FUNCTION: onWrite( error )
	*	Callback invoked upon writing a file.
	*
	* @private
	* @param {Error} error - error object
	* @returns {Void}
	*/
	function onWrite( error ) {
		if ( error ) {
			return clbk( error );
		}
		clbk();
	}
} // end FUNCTION cp()


// EXPORTS //

module.exports = cp;
