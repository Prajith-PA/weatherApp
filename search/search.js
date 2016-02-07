(function() {
	'use strict';
	
	angular.module('weatherApp').controller('searchController',searchController);
	
	searchController.$inject = ['$scope','cityService','$location'];
	function searchController($scope,cityService,$location) {
		var srch = this;
		srch.city = cityService.city;
		
		$scope.$watch('srch.city',function() {
			cityService.city = srch.city;
		});
		
		srch.clickChange = function() {
			$location.path('/forecast');	
		};
	}

}());