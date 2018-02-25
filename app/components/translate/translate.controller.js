'use strict';

/* global ng1nsControllers */

ng1nsControllers
	.controller('TranslateController', ['$translate', '$scope', function translateCtrl($translate, $scope) {
		$scope.changeLanguage = function(langKey) {
			$translate.use(langKey);
		};
	}]);
