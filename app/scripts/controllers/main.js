'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MainCtrl', ['$scope', 'moviesPopular', '$stateParams',
  function ($scope, moviesPopular, $stateParams) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // get page number
    console.log('stateParams: ',$stateParams.page);
    var page = ($stateParams.page)? parseInt($stateParams.page): 1;

    var promise = moviesPopular.getPopularMovies(page);

    promise.then(function(data){
      data.results.forEach(function(result) {
        if (!result.backdrop_path) {
          result.img_path = "images/cinema_stock.jpeg";
        } else {
          result.img_path="http://image.tmdb.org/t/p/w500"+result.backdrop_path;
        }
      })
      console.log('results: ', data);
      var totalPages = data['total_pages'];
      $scope.movies = data.results;
      $scope.nextPage = (page+1 <= totalPages)? page+1: 0;
      $scope.previousPage = (page-1 > 0)? page-1: 0;
      // data = null;
    });
  }]);
