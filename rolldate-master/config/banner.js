/**
 * banner description
 */
var pkg = require('../package.json'),
	version = pkg.version,
	released = 'Licensed under MIT',
	repository = pkg.repository.url,
	author = 'Copyright ' + (new Date()).getFullYear() + ' 雾空',
	date = 'Released on: aug 4, 2018';

module.exports = {
	'info': [
		'eslint-disable',
		'Rolldate ' + version,
		author,
		repository,
		released,
		date
	].join('\n')
}