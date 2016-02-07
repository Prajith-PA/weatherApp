(function () {
	'use strict';

	angular.module('weatherApp').directive('disForecast', disForecast);

	disForecast.$inject = ['$uibModal'];

	function disForecast($modal) {
		return {
			restrict: 'E',
			templateUrl: 'directive/disForcast.html',
			scope: {
				wObj: '=',
				conDate: '&',
				conDeg: '&'
			},
			link: function (scope, element, attrs) {
				console.log(scope);
				scope.getDetails = function (obj) {
					var modalInstance = $modal.open({
						templateUrl: 'directive/modal.html',
						controller: function ($scope) {
							$scope.dat = new Date(obj.dt * 1000);
							$scope.wObj = obj;
							$scope.cancel = function () {
								modalInstance.dismiss('cancel');
							};
							console.log($scope);
						},
						size: 'md'
					});

					modalInstance.result.then(function () {
						console.log('Finished');
					}, function () {
						console.log('Modal dismissed at : ' + new Date());
					});
				};
			}



		};
	}

}());