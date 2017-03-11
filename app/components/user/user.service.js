'use strict';

angular.module('ng1ns')

.factory('UserService', ['$rootScope', function($rootScope) {
	/*
	* TODO
	*	reconfig service accroding to project needs
	*/
	var srvc = {
		model: { id: '', login: '', firstName: '', lastName: '', email: '', role: '', token: ''},

		SaveUser: function() { sessionStorage.userService = angular.toJson(srvc.model); },

		RestoreUser: function() {
			if (typeof sessionStorage.userService != 'undefined') srvc.model = angular.fromJson(sessionStorage.userService);
		},

		ResetUser: function() {
			srvc.model.id = '';
			srvc.model.login = '';
			srvc.model.firstName = '';
			srvc.model.lastName = '';
			srvc.model.email = '';
			srvc.model.role = '';
			srvc.model.token = '';
			sessionStorage.userService = angular.toJson(srvc.model);
		}
	};

	$rootScope.$on('saveuser', srvc.SaveUser);
	$rootScope.$on('restoreuser', srvc.RestoreUser);
	$rootScope.$on('resetuser', srvc.ResetUser);

	return srvc;
}]);
