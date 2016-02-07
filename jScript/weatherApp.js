(function () {
	'use strict';

	var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource','ui.bootstrap']);

	weatherApp.config(['$routeProvider', function ($routeProvider) {

		$routeProvider

			.when('/home', {
				templateUrl: 'search/search.html',
				controller: 'searchController',
				controllerAs: 'srch'
			})
			.when('/forecast', {
				templateUrl: 'forecast/forecast.html',
				controller: 'forecastController',
				controllerAs: 'fcst'
			})
			.when('/forecast/:days', {
				templateUrl: 'forecast/forecast.html',
				controller: 'forecastController',
				controllerAs: 'fcst'
			})
			.otherwise({
				redirectTo: '/home'
			});

	}]);

}());