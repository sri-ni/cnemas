'use strict';

/**
 * @ngdoc directive
 * @name cnemasApp.directive:header
 * @description
 * # header
 */
angular.module('cnemasApp')
  .directive('header', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/templates/header.html'
    };
  });
