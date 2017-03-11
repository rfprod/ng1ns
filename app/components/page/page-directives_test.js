'use strict';

describe('ng1ns page directives: ', function () {

	beforeEach(module('ng1ns'));
	beforeEach(module('ngTemplates'));

	var rootScope, scope, element, controller;

	describe('pageTitle', function () {

		beforeEach(inject(function($rootScope, $compile) {
			rootScope = $rootScope;
			spyOn(rootScope, '$on');
			scope = $rootScope.$new();
			element = $compile('<div page-title></div>')(scope);
		}));

		it('element must be defined', function () {
			expect(element).toBeDefined();
		});

		it('must have properties in respective state and methods', function () {
			scope.$state.current = {};
			scope.$state.current.data = {};
			scope.$state.current.data.pageTitle = 'zzz';
			scope.$state.current.data.pageLead = 'zzz';
			scope.$state.current.name = 'zzz';
			scope.$digest();
			expect(scope.title).toBeDefined();
			expect(scope.leadText).toBeDefined();
			expect(scope.listener).toBeDefined();
			expect(rootScope.$on).toHaveBeenCalled();
		});

	});

	describe('pager', function () {

		beforeEach(inject(function($rootScope, $compile) {
			scope = $rootScope.$new();
			scope.pagerCallback = function() { return true; };
			scope.urlParams = { page: 0, size: 10 };
			element = $compile('<div pager></div>')(scope);
			spyOn(scope, 'pagerCallback');
		}));

		it('element must be defined', function () {
			expect(element).toBeDefined();
		});

		it('must have properties in respective state and methods', function () {
			expect(scope.selectPreviousPage).toBeDefined();
			expect(scope.selectPage).toBeDefined();
			expect(scope.selectNextPage).toBeDefined();
			expect(scope.setSize).toBeDefined();
		});

		it('must call callback on selectPreviousPage method call', function () {
			scope.urlParams.page = 1;
			scope.selectPreviousPage();
			expect(scope.pagerCallback).toHaveBeenCalled();
		});

		it('must call callback on selectPage method call', function () {
			scope.selectPage({ target: { innerText: 9 } });
			expect(scope.pagerCallback).toHaveBeenCalled();
		});

		it('must call callback on selectNextPage method call', function () {
			scope.total = { pages: 9 };
			scope.selectNextPage();
			expect(scope.pagerCallback).toHaveBeenCalled();
		});

		it('must call callback on setSize method call', function () {
			scope.setSize({ target: { innerText: 10 } });
			expect(scope.pagerCallback).toHaveBeenCalled();
		});

	});

	describe('currentYear', function () {

		beforeEach(inject(function($rootScope, $compile) {
			scope = $rootScope.$new();
			element = $compile('<span current-year></span>')(scope);
			scope.$digest();
		}));

		it('element must be defined', function () {
			expect(element).toBeDefined();
		});

		it('display current year', function () {
			expect(scope.currentYear).toBeDefined();
			console.log('element: ', element);
			expect(element[0].innerHTML).toEqual('© '+scope.currentYear);
		});

	});

});
