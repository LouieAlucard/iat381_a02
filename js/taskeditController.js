todoApp.controller('taskEditCtrl', function ($scope, $document, $routeParams, sharedProperties, $location, $http) {

	// $http.get('./src/note.json').success(function(data) {
	// 	$scope.taskData = data;
	// });
	$scope.taskData = sharedProperties.getTaskData();

	
	var keyEdit = $location.path()[$location.path().length-1];

	var taskEdit;

	angular.forEach($scope.taskData, function(value, key) {
      	if (keyEdit == key) {
      		taskEdit = value;	
      	}
    });


	$scope.title = taskEdit.title;
    $scope.detail = taskEdit.content;
      
    $scope.submit = function() {
       	if ($scope.title) {
         	taskEdit.title = this.title;
         	taskEdit.content = this.detail;
         	angular.forEach($scope.taskData, function(value, key) {
		      	if (keyEdit == key) {
		      		value = taskEdit;	
		      	}
	      	
    		});
    		sharedProperties.setTaskData($scope.taskData);
    		$location.path('#/home');
       	}
    };
	
});


