todoApp.controller('taskNewCtrl', function ($scope, $document, $routeParams, sharedProperties, $location, $http) {

	$scope.iconData = [];
	for(var i = 0; i < 15; i++) {
    	$scope.iconData.push(i+1);
	}


	var taskEdit = {};
	$scope.title = taskEdit.title;
    $scope.detail = taskEdit.content;
    $scope.iconSelected = "0";
    $scope.iconSelect = function(v) {
        $scope.iconSelected =  v;
    }
      
    $scope.submit = function() {
       	if ($scope.title) {
         	taskEdit.title = this.title;
         	taskEdit.content = this.detail;
         	taskEdit.iconUrl = $scope.iconSelected;	
            taskEdit.iconClass = "taskIcon"; 

         	sharedProperties.addTaskData(taskEdit);
    		$location.path('#/home');
       	}
    };


    
});


