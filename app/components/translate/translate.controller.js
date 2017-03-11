'use strict';

angular.module('ng1ns')

.controller('TranslateController', ['$translate', '$scope', function translateCtrl($translate, $scope) {
	$scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
	};
}]);
