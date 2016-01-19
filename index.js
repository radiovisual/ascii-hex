'use strict';
module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	var hex = str.charCodeAt(0).toString(16);

	return Number('0x' + hex);
};
