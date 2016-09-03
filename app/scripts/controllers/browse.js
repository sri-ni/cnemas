'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('BrowseCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.family = [
      'Rishi',
      'Riddhi'
    ];
  }]);
