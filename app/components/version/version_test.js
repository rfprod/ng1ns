'use strict';

describe('ng1ns.version module', function() {
	beforeEach(module('ng1ns.version'));

	describe('version service', function() {
		it('should return current version', inject(function(version) {
			expect(version).toEqual('1.0');
		}));
	});
});
