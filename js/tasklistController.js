todoApp.controller('taskListCtrl',  function ($scope, $document, $routeParams, sharedProperties, $window, $route, $http) {
    
    
    var unbind = taskRemoveWatch.watch(function(newVal) {
        sharedProperties.removeTaskData(newVal);
        var d =  sharedProperties.getTaskData();
        console.log(d);
        $route.reload();
    });

    // Unbind the listener when the scope is destroyed
    $scope.$on('$destroy', unbind);

	// $http.get('./src/note.json').success(function(data) {
	// 	$scope.taskData = data;
	// });


	
	$scope.taskData = sharedProperties.getTaskData();
	$scope.taskCompleted = $window.taskCompleted;
    $scope.taskNumber = $scope.taskData.length;
	$scope.taskNumberDisplay = $scope.taskData.length + $window.taskCompleted;


	
	var navH = angular.element(document.getElementsByClassName('navbar-fixed-top')[0].clientHeight);
	$scope.cWidth = window.innerWidth;
	$scope.cHeight = window.innerHeight;


	$scope.centerX = $scope.cWidth / 2;
	$scope.centerY = $scope.cHeight * 0.4;
	$scope.centerR = $scope.cWidth * 0.23;
	$scope.centerYAlt = function(change) {
		var y = $scope.centerY;
		y = y + change;
		return y;
	}
	

	$scope.taskDisR = $scope.centerR * 1.7;
	$scope.taskSize = $scope.centerR * 0.6;
	var angle = -66;
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
	$scope.displayW = $scope.cWidth * 0.09;
	$scope.displayH = $scope.cHeight * 0.07;
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


