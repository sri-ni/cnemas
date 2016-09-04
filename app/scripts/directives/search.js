'use strict';

/**
 * @ngdoc directive
 * @name cnemasApp.directive:search
 * @description
 * # search
 */
angular.module('cnemasApp')
  .directive('search', ['$location', function ($location) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.ngModel, function (searchTerm) {
          if (searchTerm) {
            $location.path('/search').search({'q': searchTerm, 'page': 1});
          } else {
            $location.path('/movies');
          }
        });
      }
    };
  }]);
