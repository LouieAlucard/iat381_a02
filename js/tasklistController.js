todoApp.controller('taskListCtrl',  function ($scope, $document, $routeParams, sharedProperties, $http) {

	// $http.get('./src/note.json').success(function(data) {
	// 	$scope.taskData = data;
	// });


	
	$scope.taskData = sharedProperties.getTaskData();
	$scope.taskNumber = $scope.taskData.length;


	
	var navH = angular.element(document.getElementsByClassName('navbar-fixed-top')[0].clientHeight);
	$scope.cWidth = window.innerWidth;
	$scope.cHeight = window.innerHeight-navH[0];


	$scope.centerX = $scope.cWidth / 2;
	$scope.centerY = $scope.cHeight * 0.4;
	$scope.centerR = $scope.cWidth * 0.23;
	$scope.centerYAlt = function(change) {
		var y = $scope.centerY;
		y = y + change;
		return y;
	}
	

	$scope.taskDisR = $scope.centerR * 1.4;
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
	$scope.taskCoordsLast = [taskCoords[$scope.taskNumber][0], taskCoords[$scope.taskNumber][1]];


	//side and bottem feature
	$scope.displayW = $scope.cWidth * 0.07;
	$scope.displayH = $scope.cHeight * 0.05;
	$scope.dispalyY = $scope.cHeight - $scope.displayH;
	$scope.dispalyX = $scope.cWidth - $scope.displayW;
	
	$scope.sideIconSize = $scope.displayW * 0.9;
	$scope.sideIconX = $scope.sideIconSize * 0.1;
	$scope.sideIconXr = $scope.cWidth - $scope.sideIconSize;
	$scope.sideIconY = $scope.cHeight / 2;
	$scope.botIconX = $scope.cWidth  / 2 - $scope.sideIconSize/2;
	$scope.botIconY = $scope.cHeight - $scope.sideIconSize;



	
	$scope.taskDetailY = $scope.cHeight * 0.75;
	$scope.taskDetailH = $scope.cHeight * 0.4;
	$scope.svgHeight = $scope.cHeight + $scope.cHeight * 0.15;

	$scope.textDetailX = $scope.cWidth * 0.1;
	$scope.textDetailY = $scope.taskDetailY * 1.1;
	$scope.textDetailYAlt = function(lineNumber) {
		var y = $scope.textDetailY;
		y = y + lineNumber *15;
		return y;
	}

	$scope.iconDetailX = $scope.cWidth * 0.8;
	$scope.iconDetailY = $scope.taskDetailY * 1.05;
	$scope.iconDetailSize = $scope.cWidth * 0.12;








	


});


