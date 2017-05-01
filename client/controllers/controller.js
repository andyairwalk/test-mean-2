var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){

	$http({
		method: 'GET',
		url: 'api/tasks'
	}).then(function (response){
		console.log('I got the data requested');
		console.log(response);
		$scope.contactlist = response.data;
	},function (error){
		console.log('there was an error');
	});
}]);