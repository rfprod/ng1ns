'use strict';

angular.module('ng1ns', [ // eslint-disable-line no-unused-vars
	'angularSpinner',
	'ngAnimate',
	'ngResource',
	'ngSanitize',
	'ngTouch',
	'nvd3',
	'pascalprecht.translate',
	'ui.router',
	'ui.bootstrap',

	'ng1ns.version'
])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'usSpinnerConfigProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, usSpinnerConfigProvider) {
			$urlRouterProvider.otherwise('/app/sign-in');

			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'views/common/layout.html'
				})

				.state('app.sign-in', {
					url: '/sign-in',
					templateUrl: 'views/sign-in/sign-in.html',
					controller: 'SignInController',
					data: {
						requireAuth: false,
						pageTitle: 'Page.Title.Signin',
						pageLead: 'Page.Brief.Signin'
					},
					resolve: {}
				});

			$locationProvider.html5Mode({enabled: true, requireBase: true});

			usSpinnerConfigProvider.setDefaults({
				lines: 13, // The number of lines to draw
				length: 28, // The length of each line
				width: 14, // The line thickness
				radius: 42, // The radius of the inner circle
				scale: 1, // Scales overall size of the spinner
				corners: 1, // Corner roundness (0..1)
				color: '#fff', // #rgb or #rrggbb or array of colors
				opacity: 0.25, // Opacity of the lines
				rotate: 0, // The rotation offset
				direction: 1, // 1: clockwise, -1: counterclockwise
				speed: 1, // Rounds per second
				trail: 60, // Afterglow percentage
				fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
				zIndex: 2e9, // The z-index (defaults to 2000000000)
				className: 'spinner', // The CSS class to assign to the spinner
				top: '50vh', // Top position relative to parent
				left: '50%', // Left position relative to parent
				shadow: true, // Whether to render a shadow
				hwaccel: false, // Whether to use hardware acceleration
				position: 'fixed' // Element positioning
			});
		}
	])
	.run(['$rootScope', '$state', '$animate', '$window', '$location', 'Auth',
		function ($rootScope, $state, $animate, $window, $location, Auth) {
			$animate.enabled(true); // enable animations on app start
			$rootScope.$state = $state;
			$rootScope.$on('$stateChangeStart', function (event, toState) {
				if (toState.data.requiresAuth && !Auth.authenticated()) {
					if ($location.$$host === 'localhost') {
						console.log('no token, running on localhost, not refirecting');
					} else {
						event.preventDefault();
						window.location.href='/';
					}
				}
			});
		}
	]);
