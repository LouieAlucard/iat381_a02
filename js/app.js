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
            when('/edit', {
                templateUrl: 'views/edit.html',
                controller: 'taskEditCtrl'
            }).
            when('/new', {
                templateUrl: 'views/new.html',
                controller: 'taskEditCtrl'
            }).
			otherwise({
				redirectTo: '/main'
			});
	}
]);


todoApp.service('sharedProperties', function () {
    var iconEdit;
    var titleEdit;
    var contentEdit;

    return {
        geticonEdit: function () {
            return iconEdit;
        },
        seticonEdit: function(value) {
            iconEdit = value;
        },

        gettitleEdit: function () {
            return titleEdit;
        },
        settitleEdit: function(value) {
            titleEdit = value;
        },

        getcontentEdit: function () {
            return contentEdit;
        },
        setcontentEdit: function(value) {
            contentEdit = value;
        }
    };
});


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


