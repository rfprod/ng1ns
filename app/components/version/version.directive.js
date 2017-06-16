'use strict';

angular.module('ng1ns.version.app-version', [])

	.directive('appVersion', ['version', function(version) {
		return function(scope, elm) {
			elm.text(version);
		};
	}]);
