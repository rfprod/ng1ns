'use strict';

function config($translateProvider) {

	$translateProvider.useSanitizeValueStrategy('escape');

	$translateProvider
		.translations('ru', {

			'Nav.Header': 'Стартовый набор AngularJS',

			'Page.Title.Signin': 'Вход в систему',
			'Page.Brief.Signin': 'Введите адрес эл. почты и пароль',

			'Page.Title.Dashboard': 'Панель кампании',
			'Page.Brief.Dashboard': 'Информация о кампании, доступная для вашей учётной записи',

			'Page.Title.Profile': 'Профиль Пользователя',
			'Page.Brief.Profile': 'Информация о вашей учётной записи',

			'Common.Action.Language': 'Язык',
			'Common.Action.Logout': 'Выход',
			'Common.Action.Ok': 'OK',

			'Common.Form.Placeholder.Email': 'Адрес эл. почты',
			'Common.Form.Feedback.Email': 'Неправильный адрес эл. почты',
			'Common.Form.Placeholder.Password': 'Пароль',
			'Common.Form.Feedback.Password': 'Неправильный пароль'

		})
		.translations('en', {

			'Nav.Header': 'AngularJS application starter kit',

			'Page.Title.Signin': 'Sign In',
			'Page.Brief.Signin': 'Provide an Email address and a Password',

			'Page.Title.Dashboard': 'Campaign Dashboard',
			'Page.Brief.Dashboard': 'Campaign information, available for your account',

			'Page.Title.Profile': 'User Profile',
			'Page.Brief.Profile': 'Information about your account',

			'Common.Action.Language': 'Language',
			'Common.Action.Logout': 'Logout',
			'Common.Action.Ok': 'OK',

			'Common.Form.Placeholder.Email': 'Email address',
			'Common.Form.Feedback.Email': 'Wrong email address',
			'Common.Form.Placeholder.Password': 'Password',
			'Common.Form.Feedback.Password': 'Wrong password'

		});

	$translateProvider.preferredLanguage('en');

}

angular.module('ng1ns').config(['$translateProvider', config]);
