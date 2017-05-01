var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	console.log('hello from the contrloller');

	person1 = {
		name: "tio",
		email: "sdas@sada.sa",
		number: "32432"
	};

	person2 = {
		name: "tivvvvo",
		email: "sdas@sadavvvv.sa",
		number: "32432vvv"
	};

	person3 = {
		name: "tio4",
		email: "sdas@sa4444da.sa",
		number: "324344442"
	};

	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;
}]);