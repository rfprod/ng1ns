'use strict';

angular.module('ng1ns')

	.directive('pageTitle', ['$rootScope', function($rootScope) {
		return {
			templateUrl: 'views/common/pageTitle.html',
			link: function(scope) {
				scope.title = $rootScope.$state.current.data.pageTitle;
				scope.leadText = $rootScope.$state.current.data.pageLead;
				scope.showLevelUp = false;
				scope.levelUp = undefined;
				scope.listener = function(event, toState /*, toParams, fromState, fromParams*/) {
					var title = 'appTitle', lead;
					if (toState.data && toState.data.pageTitle) { title = toState.data.pageTitle; }
					if (toState.data && toState.data.pageLead) { lead = toState.data.pageLead; }
					scope.pageTitle = title;
					scope.pageLead = lead;
					/*
					*	level up button (for views which are not listed in the main menu)
					*
					*	TODO - reconfig levelUp button visibility
					*/
					if (toState.name.indexOf('list.user.profile') !== -1) {
						scope.showLevelUp = true;
						scope.levelUp = 'app.dashboard.list.user';
					}else{
						scope.showLevelUp = false;
						scope.levelUp = undefined;
					}
				};
				scope.listener({}, $rootScope.$state.current);
				$rootScope.$on('$stateChangeStart', scope.listener);
			}
		};
	}])

	.directive('pager', [function() {
		return {
			link: function(scope, element, attrs) {
				console.log('pager attrs',attrs);
				console.log('pager element',element);
				scope.selectPreviousPage = function() {
					console.log('previous pageSelected');
					if (scope.urlParams.page > 0) {
						scope.urlParams.page--;
						console.log('selected page',scope.urlParams.page);
						scope.pagerCallback();
					}
				};
				scope.selectPage = function(event) {
					console.log('pageSelected',event);
					if (scope.urlParams.page !== parseInt(event.target.id)){
						scope.urlParams.page = parseInt(event.target.id);
						console.log('selected page',scope.urlParams.page);
						scope.pagerCallback();
					}
				};
				scope.selectNextPage = function() {
					console.log('next pageSelected');
					if (scope.urlParams.page < scope.total.pages) {
						scope.urlParams.page++;
						console.log('selected page',scope.urlParams.page);
						scope.pagerCallback();
					}
				};
				scope.setSize = function(event) {
					console.log('setSize',event);
					if (event.target.innerText === '-') {
						scope.urlParams.size = 0;
						console.log('new size',scope.urlParams.size);
					} else if (scope.urlParams.size !== parseInt(event.target.innerText)) {
						scope.urlParams.size = parseInt(event.target.innerText);
						console.log('new size',scope.urlParams.size);
					}
					scope.pagerCallback();
				};
			}
		};
	}])

	.directive('currentYear', [function() {
		return {
			link: function(scope, element/*, attrs*/) {
				scope.currentYear = new Date().getFullYear();
				angular.element(element)[0].innerHTML = '&copy; '+scope.currentYear;
			}
		};
	}]);
