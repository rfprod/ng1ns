'use strict';

/* global ng1nsControllers */

ng1nsControllers
	.controller('NavigationController', ['$rootScope', '$scope', '$state', 'UserService', 'API', function($rootScope, $scope, $state, UserService, API) {
		$scope.user = UserService;

		$scope.logout = function() {
			API.LogOutService().query({user_token: $scope.user.model.token}).$promise.then(function(response) {
				console.log('Log Out Service, response:', response);
				$rootScope.$broadcast('resetuser');
				$state.go('app.sign-in');
			});
		};
	}]);
