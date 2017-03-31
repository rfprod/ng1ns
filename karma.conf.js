module.exports = function(config) {
	config.set({

		basePath: './app',

		files: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js', // eslint-disable-line indent

			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-touch/angular-touch.js',
			'bower_components/angular-bootstrap/ui-bootstrap.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/angular-loader/angular-loader.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-spinner/dist/angular-spinner.js',
			'bower_components/angular-translate/angular-translate.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/d3/d3.js',
			'bower_components/nvd3/build/nv.d3.js',
			'bower_components/angular-nvd3/dist/angular-nvd3.js',
			'bower_components/angular-mocks/angular-mocks.js',

			'app.js',
			'components/**/*.js',
			'views/**/*.js',
			'views/**/*.html'
		],

		frameworks: ['jasmine'],

		// convert html-templates to js files for inclusion in tests
		preprocessors: {
			'views/**/*.html': ['ng-html2js']
		},

		ngHtml2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: 'app/',
			//stripSuffix: '.ext',
			// prepend this to the
			//prependPrefix: 'served/',

			// - setting this option will create only a single module that contains templates
			//   from all the files, so you can load them all with module('foo')
			// - you may provide a function(htmlPath, originalPath) instead of a string
			//   if you'd like to generate modules dynamically
			//   htmlPath is a originalPath stripped and/or prepended
			//   with all provided suffixes and prefixes
			moduleName: 'ngTemplates'
		},

		plugins: [
			//'karma-chrome-launcher',
			'karma-ng-html2js-preprocessor',
			'karma-phantomjs-launcher',
			'karma-jasmine'
		],

		//browsers: ['Chrome'],
		//browsers: ['Firefox'],
		browsers: ['PhantomJS'],

		phantomjsLauncher: {
			/*
			*	exit phantomjs if a ResourceError is encountered
			*	useful if karma exits without killing phantomjs)
			*/
			exitOnResourceError: true
		},
		/*
		*	overrides the error, warn instead
		*	by default returns error if there're no tests defined
		*/
		failOnEmptyTestSuite: false,
		browserNoActivityTimeout: 10000,
		
		//hostname: process.env.IP,
		//port: 8080,
		//runnerPort: 0,

		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		singleRun: false,
		colors: true

	});
};
