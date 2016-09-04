'use strict';

/**
 * @ngdoc directive
 * @name cnemasApp.directive:footer
 * @description
 * # footer
 */
angular.module('cnemasApp')
  .directive('footer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/templates/footer.html'
    };
  });
