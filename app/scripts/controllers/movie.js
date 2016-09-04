'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MovieCtrl', ['$scope', '$stateParams', 'movieDetails',
  function ($scope, $stateParams, movieDetails) {
    var promise = movieDetails.getMovieDetails($stateParams.id);

    promise.then(function(data){
      data.releaseYear = data['release_date'].split('-')[0];
      if (!data.poster_path) {
        data.imgPath = "images/cinema_stock.jpeg";
      } else {
        data.imgPath="http://image.tmdb.org/t/p/w500"+data.poster_path;
      }
      $scope.movie = data;
    });

  }]);
