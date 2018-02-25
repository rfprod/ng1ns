'use strict';

describe('ng1ns.nav module', function() {

	beforeEach(module('ng1ns'));

	describe('Nav controller', function() {
		var scope, state, ctrl, UserService, API;

		beforeEach(inject(function($rootScope, $controller, _$state_, _UserService_, _API_) {
			scope = $rootScope.$new();
			state = _$state_;
			state.current.name = 'test';
			API = _API_;
			UserService = _UserService_;
			ctrl = $controller('NavigationController', {$scope: scope, $state: state, UserService: UserService, API: API});
		}));

		it('should be defined', function(){
			expect(ctrl).toBeDefined();
		});

		it('should have proper definitions', function() {
			expect(scope.user).toBeDefined();
			expect(scope.logout).toBeDefined();
		});

	});
});
