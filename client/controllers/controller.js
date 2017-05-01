var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){

	var updateList = function() {
		$http({
			method: 'GET',
			url: 'api/tasks'
		}).then(function (response){ //got the data
			$scope.todolist = response.data;
		},function (error){
			console.log('there was an error');
		});
	}

	updateList();

	$scope.submitAddTask = function(){
		if($scope.tasktoadd != null) {
			$http({
				method: 'POST',
				url: 'api/task',
				data: {title: $scope.tasktoadd, isDone: false}
			}).then(function (response){
				$scope.todolist.push(response.data); //add the task
				$scope.tasktoadd = '';
			},function (error){
				console.log('there was an error adding the task' + error);
			});
		}
	}

	$scope.deleteTask = function(item){
		$http({
		method: 'DELETE',
			url: 'api/task/' + item,
		}).then(function (response){ 
			updateList();
		},function (error){
			console.log('there was an error deleting the task');
		});
	}
}]);
