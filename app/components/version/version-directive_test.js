'use strict';

describe('ng1ns.version module', function() {
	beforeEach(module('ng1ns.version'));

	describe('app-version directive', function() {
		it('should print current version', function() {
			module(function($provide) {
				$provide.value('version', 'TEST_VER');
			});
			inject(function($compile, $rootScope) {
				var element = $compile('<span app-version></span>')($rootScope);
				expect(element.text()).toEqual('TEST_VER');
			});
		});
	});
});
