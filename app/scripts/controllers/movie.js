'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MovieCtrl', ['$scope', '$stateParams', 'movieDetails', '$state', 'movieTitle',
  function ($scope, $stateParams, movieDetails, $state, movieTitle) {

    $scope.movieTitle = movieTitle;
    $state.current.data.displayName = movieTitle;
    $state.$current.data.displayName = movieTitle;
    console.log($state);

    console.log($stateParams.id);

    var promise = movieDetails.getMovieDetails($stateParams.id);

    promise.then(function(data){
      data.releaseYear = data['release_date'].split('-')[0];
      if (!data.poster_path) {
        data.imgPath = "images/cinema_stock.jpeg";
      } else {
        data.imgPath="http://image.tmdb.org/t/p/w500"+data.poster_path;
      }
      $scope.movie = data;
      // $scope.movie = data.title;
    });

  }]);
