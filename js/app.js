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


//svg error soluation
todoApp.directive('ngX', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngX', function(x) {
                elem.attr('x', x);
            });
        };
    })
    .directive('ngY', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngY', function(y) {
                elem.attr('y', y);
            });
        };
    })
    .directive('ngWidth', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngWidth', function(width) {
                elem.attr('width', width);
            });
        };
    })
    .directive('ngHeight', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngHeight', function(height) {
                elem.attr('height', height);
            });
        };
    })
    .directive('ngCx', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngCx', function(cx) {
                elem.attr('cx', cx);
            });
        };
    })
    .directive('ngCy', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngCy', function(cy) {
                elem.attr('cy', cy);
            });
        };
    })
    .directive('ngR', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngR', function(r) {
                elem.attr('r', r);
            });
        };
    });


