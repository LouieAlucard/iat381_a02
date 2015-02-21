var todoApp = angular.module('todoApp', [
	'ngRoute'
]);

todoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/main', {
				templateUrl: 'views/home.html',
				controller: 'taskListCtrl'
			}).
			otherwise({
				redirectTo: '/main'
			});
	}
]);

