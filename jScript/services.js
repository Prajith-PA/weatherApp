(function () {
	'use strict';

	angular.module('weatherApp').service('cityService', cityService);

	cityService.$inject = ['$resource']

	function cityService($resource) {

		var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
		var appid = '44db6a862fba0b067b1930da0d769e98';

		this.getWeatherDetails = function (city, count) {
			var weatherAPI = $resource(url, {
				callback: "JSON_CALLBACK"
			}, {
				get: {
					method: "JSONP"
				}
			});
			var results = weatherAPI.get({
				q: city,
				cnt: count,
				appid: appid
			});
			return results;
		};

	}

}());