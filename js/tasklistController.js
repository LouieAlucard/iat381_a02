todoApp.controller('taskListCtrl', ['$scope', '$document', '$http', function ($scope, $document, $http) {

	// $http.get('./src/note.json').success(function(data) {
	// 	$scope.taskData = data;
	// });

	$scope.taskData = [
		{
	    "iconUrl": 		"./img/icon/1.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl": 	"Food Package",
		"content": 		"Foam meat trays; Foam egg cartons; Foam clamshells for takeout food; Foam cups; Foam bowls."},
	    {
	    "iconUrl": 		"./img/icon/3.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl		":"Food Package",
		"content": 		"Foam meat trays; Foam egg cartons; Foam clamshells for takeout food; Foam cups; Foam bowls."},
		{
	    "iconUrl": 		"./img/icon/7.png",
	    "iconClass": 	"taskIcon",
	    "detailUrlas": 	"Food Package",
		"content": 		"Foam meat trays; Foam egg cartons; Foam clamshells for takeout food; Foam cups; Foam bowls."},
	    {
	    "iconUrl": 		"./img/icon/2.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl": 	"Food Package",
	    "content": 		"Foam meat trays; Foam egg cartons; Foam clamshells for takeout food; Foam cups; Foam bowls."},
	    {
	    "iconUrl": 		"./img/icon/add.png",
	    "iconClass": 	"addIcon",
	    "detailUrl": 	"Food Package",
	    "content": 		"Foam meat trays; Foam egg cartons; Foam clamshells for takeout food; Foam cups; Foam bowls."}

	];

	$scope.taskNumber = $scope.taskData.length;


	$scope.cWidth = window.innerWidth;
	$scope.cHeight= window.innerHeight;


	$scope.centerX = $scope.cWidth / 2;
	$scope.centerY = $scope.cHeight * 0.4;
	$scope.centerYAlt = function(change) {
		var y = $scope.centerY;
		y = y + change;
		return y;
	}


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


