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
            when('/edit/:index', {
                templateUrl: 'views/edit.html',
                controller: 'taskEditCtrl'
            }).
            when('/new', {
                templateUrl: 'views/new.html',
                controller: 'taskNewCtrl'
            }).
			otherwise({
				redirectTo: '/main'
			});
	}
]);


todoApp.service('sharedProperties', function () {
    var data = [
        {
        "iconUrl":      "1",
        "iconClass":    "taskIcon",
        "detailUrl":    "Food Package",
        "title":        "Assignment 02",
        "content":      "- due Monday!"},
        {
        "iconUrl":      "3",
        "iconClass":    "taskIcon",
        "detailUrl      ":"Food Package",
        "title":        "Mailing",
        "content":      "- Post office closes @ 5"},
        {
        "iconUrl":      "7",
        "iconClass":    "taskIcon",
        "detailUrlas":  "Food Package",
        "title":        "Grocery",
        "content":      "- tomato, carrot, milk, egg"},
        {
        "iconUrl":      "2",
        "iconClass":    "taskIcon",
        "detailUrl":    "Food Package",
        "title":        "Tax Filing",
        "content":      "- $ 205"}
    ];

    var dataChanged = false;

    var setTaskData = function(newdata) {
        data = newdata;
     }

    var addTaskData = function(newdata) {
        data.push(newdata);
    }

    var getTaskData = function(){
        return data;
    }
    
    var removeTaskData = function(num){
        data.splice (num, 1);
    }

    return {
        setTaskData: setTaskData,
        getTaskData: getTaskData,
        addTaskData: addTaskData,
        removeTaskData: removeTaskData
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
    })
    .directive('ngXlinkHref', function () {
        return {
            priority: 99,
            restrict: 'A',
            link: function (scope, element, attr) {
                var attrName = 'xlink:href';
                attr.$observe('ngXlinkHref', function (value) {
                if (!value)
                  return;

                attr.$set(attrName, value);
                });
            }
        };
    });

