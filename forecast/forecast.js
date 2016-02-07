(function () {
	'use strict';

	angular.module('weatherApp').controller('forecastController', forecastController);

	forecastController.$inject = ['$scope', 'cityService', '$filter', '$routeParams'];

	function forecastController($scope, cityService, $filter, $routeParams) {
		var fcst = this;
		fcst.days = $routeParams.days || 5;
		fcst.city = cityService.city || 'london';
		fcst.results = cityService.getWeatherDetails(fcst.city, fcst.days);

		fcst.convertTempCel = function (degkel) {
			return Math.round(degkel - 273, 2);
		};

		fcst.convertTodate = function (dt) {
			return $filter('date')(new Date(dt * 1000), 'fullDate');
		};
	}

}());