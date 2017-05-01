var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){

	$http({
		method: 'GET',
		url: 'api/tasks'
	}).then(function (response){ //got the data
		$scope.todolist = response.data;
	},function (error){
		console.log('there was an error');
	});

	$scope.submitAddTask = function(){
		$http({
			method: 'POST',
			url: 'api/task',
			data: {title: $scope.tasktoadd, isDone: false}
		}).then(function (response){
			$scope.todolist.push(response.data); //add the task
		},function (error){
			console.log('there was an error adding the task' + error);
		});
	}
}]);