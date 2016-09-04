'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:SearchresultsCtrl
 * @description
 * # SearchresultsCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'moviesSearch',
  function ($scope, $stateParams, moviesSearch) {
    $scope.searchTerm = $stateParams.q;
    var searchTerm = $stateParams.q,
      page = ($stateParams.page)? parseInt($stateParams.page): 1;

    $scope.searchMoviesNow = function(searchTerm, page) {
      var promise = moviesSearch.searchMovies(searchTerm, page);

      promise.then(function(data){
        data.results.forEach(function(result) {
          if (!result.poster_path) {
            result.imgPath = "images/cinema_stock.jpeg";
          } else {
            result.imgPath="http://image.tmdb.org/t/p/w500"+result.poster_path;
          }
          result.releaseYear = result['release_date'].split('-')[0];
        });
        var page = data.page;
        var totalPages = data['total_pages'];
        $scope.movies = data.results;
        $scope.nextPage = (page+1 <= totalPages)? page+1: 0;
        $scope.previousPage = (page-1 > 0)? page-1: 0;
      });
    };

    // $scope.gotoPage = function(targetPage){
    //   page = targetPage;
    //   $scope.searchMoviesNow(searchTerm, page);
    // };

    $scope.searchMoviesNow(searchTerm, page);

  }]);
