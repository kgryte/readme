'use strict';

/**
* FUNCTION: flatten( sections )
*	Flattens a `sections` array.
*
* @param {String[]} sections - sections
* @returns {Object} flattened sections
*/
function flatten( sections ) {
	var out,
		key,
		i;

	out = {};
	for ( i = 0; i < sections.length; i++ ) {
		key = 'section:' + sections[ i ].replace( /\./, ':' );
		out[ key ] = true;
	}
	return out;
} // end FUNCTION flatten()


// EXPORTS //

module.exports = flatten;
