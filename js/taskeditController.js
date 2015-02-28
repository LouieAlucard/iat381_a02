todoApp.controller('taskEditCtrl', ['$scope', '$document', '$http', function ($scope, $document, $http) {

	// $http.get('./src/note.json').success(function(data) {
	// 	$scope.taskData = data;
	// });

	$scope.taskData = [
		{
	    "iconUrl": 		"./img/icon/1.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl": 	"Food Package",
	    "title": 		"ggg",
		"content": 		"no shit gg Foam  Foam bowls."},
	    {
	    "iconUrl": 		"./img/icon/3.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl		":"Food Package",
	    "title": 		"dota",
		"content": 		"let me dota"},
		{
	    "iconUrl": 		"./img/icon/7.png",
	    "iconClass": 	"taskIcon",
	    "detailUrlas": 	"Food Package",
	    "title": 		"fail",
		"content": 		"failed fucked it"},
	    {
	    "iconUrl": 		"./img/icon/2.png",
	    "iconClass": 	"taskIcon",
	    "detailUrl": 	"Food Package",
	    "title": 		"meat",
	    "content": 		"meet plaesesfdasdf sdfff"},
	    {
	    "iconUrl": 		"./img/icon/add.png",
	    "iconClass": 	"addIcon",
	    "detailUrl": 	"Food Package",
	    "content": 		"find some one who play blazblue"}

	];

	
}]);


