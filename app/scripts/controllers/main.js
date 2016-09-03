'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MainCtrl', ['$scope', 'moviesPopular',
  function ($scope, moviesPopular) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var promise = moviesPopular.getPopularMovies();

    promise.then(function(data){
      // data.results.forEach(function(result) {
      //   result.img_path="http://image.tmdb.org/t/p/w300"+result.backdrop_path;
      // })
      console.log(data.results);
      $scope.movies = data.results;
    });
  }]);
