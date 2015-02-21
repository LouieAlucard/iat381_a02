todoApp.controller('taskListCtrl', ['$scope', '$document', '$http', function ($scope, $document, $http) {

	$http.get('./src/note.json').success(function(data) {
		$scope.taskData = data;
	});



	$scope.cWidth = window.innerWidth;
	$scope.cHeight= window.innerHeight;


	$scope.centerX = $scope.cWidth / 2;
	$scope.centerY = $scope.cHeight * 0.4;

	$scope.centerR = $scope.cWidth * 0.25;
	$scope.taskDisR = $scope.centerR * 1.5;
	$scope.taskSize = $scope.centerR * 0.5;

	var angle = 0;
    var taskCoords = [];

    while (angle < 360) {
    	taskCoords.push([
    		$scope.centerX+$scope.taskDisR*Math.cos(Math.PI*(angle/180))-$scope.taskSize/2, 
    		$scope.centerY+$scope.taskDisR*Math.sin(Math.PI*(angle/180))-$scope.taskSize/2
    	]);
    	angle = angle + 24;

	}

	$scope.taskCoords = taskCoords;

	
	

	


}]);


