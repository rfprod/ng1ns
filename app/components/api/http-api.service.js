'use strict';

/*
*	set it for API Host if needed
*/
//var apiHost = 'http://127.0.0.1:8001';

/*
*	dynamically set backend base url to be able to deploy on any domain
*/
function setBaseUrl(absUrl) {
	/*
	var root = absUrl.substring(0,absUrl.indexOf('#')-1);
	if (host == 'localhost') return 'http://localhost:7070'; // development
	else return root; // deployment
	*/
	return absUrl.match(new RegExp(/http(s)?:\/\/[^/]+/))[0];
}

angular.module('ng1ns')

	.service('API', ['$resource', '$location', function($resource, $location) {
		var baseUrl = setBaseUrl($location.$$absUrl);
		console.log('abs base url:', baseUrl);

		/*
		*	TODO
		*	use following code as quickstart
		*	for now urls are wrong and should be revonfigures
		*/
		this.AuthService = function() {
			return $resource(baseUrl + '/login', {}, {
				query: {method: 'POST', params: {}, isArray: false,
					interceptor: {
						response: function(response) {
							response.resource.$httpHeaders = response.headers;
							return response.resource;
						}
					}
				}
			});
		};

		this.LogOutService = function() {
			return $resource(baseUrl + '/logout', {}, {
				query: {method: 'GET', params: {}, isArray: false,
					interceptor: {
						response: function(response) {
							response.resource.$httpHeaders = response.headers;
							return response.resource;
						}
					}
				}
			});
		};

		this.GetMeService = function() {
			return $resource(baseUrl + '/api/users/me', {}, {
				query: {method: 'GET', params: {}, isArray: true,
					interceptor: {
						response: function(response) {
							response.resource.$httpHeaders = response.headers;
							return response.resource;
						}
					}
				}
			});
		};
	}]);
