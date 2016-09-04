'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MainCtrl', ['$scope', 'moviesPopular', '$stateParams', '$location', '$state',
  function ($scope, moviesPopular, $stateParams, $location, $state) {

    console.log($state);

    // get page number
    console.log('stateParams: ',$stateParams.page);
    var page = ($stateParams.page)? parseInt($stateParams.page): 1;
    $scope.page = page;

    $scope.getMoviesNow = function(popularity){
      page = $scope.page;
      var promise = moviesPopular.getPopularMovies(page, popularity);

      promise.then(function(data){
        data.results.forEach(function(result) {
          if (!result.backdrop_path) {
            result.img_path = "images/cinema_stock.jpeg";
          } else {
            result.img_path="http://image.tmdb.org/t/p/w500"+result.backdrop_path;
          }
        });
        // console.log('results: ', data);
        var totalPages = data['total_pages'];
        $scope.movies = data.results;
        $scope.nextPage = (page+1 <= totalPages)? page+1: 0;
        $scope.previousPage = (page-1 > 0)? page-1: 0;
      });
    };

    // popularity sort
    $scope.popularity = [{
      'key': 'desc',
      'name': 'Most'
    }, {
      'key': 'asc',
      'name': 'Least'
    }];
    $scope.selectedPopularity = window.popularity || $scope.popularity[0];
    $scope.dropdownPopularitySelected = function (item) {
       $scope.selectedPopularity = item;
       window.popularity = item;
      //  $scope.page = 1;
      //  $location.path("/");
      //  console.log($location.path());
      //  console.log($scope.selectedPopularity);
       if ($location.path() === '/movies/1') {
         $state.reload();
       } else {
          $location.path("/movies/1");
       }
      //  $scope.getMoviesNow($scope.selectedPopularity.key);
    };


    $scope.getMoviesNow($scope.selectedPopularity.key);
  }]);
