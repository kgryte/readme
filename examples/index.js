'use strict';

var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( './../lib' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'node_module',
	'title': 'beep',
	'desc': 'Beep boop.',
	'repo': 'janedoe/beep',
	'license': 'MIT',
	'holder': 'Jane Doe',
	'sections': [
		'badges',
		'installation',
		'usage',
		'notes',
		'examples',
		'cli',
		'cli.installation',
		'cli.usage',
		'cli.notes',
		'cli.examples',
		'tests',
		'tests.unit',
		'tests.coverage',
		'tests.browsers',
		'license'
	]
});

