'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	merge = require( 'utils-merge2' )(),
	mustache = require( 'mustache' ),
	path = require( 'path' ),
	fs = require( 'fs' ),
	defaults = require( './defaults.js' ),
	validate = require( './validate.js' );


// COPY //

/**
* FUNCTION: cp( dest[, opts ] )
*	Synchronously creates a README.md file.
*
* @param {String} dest - README.md destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.template="node_module"] - README.md template to use
* @param {String} [opts.title=""] - title
* @param {String} [opts.desc=""] - description
* @param {String} [opts.repo=""] - Github repository
* @param {String} [opts.license="MIT"] - license
* @param {String} [opts.holder=""] - copyright holder
*/
function cp( dest, options ) {
	var tmpl = 'node_module',
		opts = {},
		fpath,
		dpath,
		out,
		err;

	if ( !isString( dest ) ) {
		throw new TypeError( 'cp()::invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( arguments.length > 1 ) {
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

	out = fs.readFileSync( fpath, {
		'encoding': 'utf8'
	});
	out = mustache.render( out, opts );

	fs.writeFileSync( dpath, out );
} // end FUNCTION cp()


// EXPORTS //

module.exports = cp;
