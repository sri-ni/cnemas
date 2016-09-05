'use strict';

/**
 * @ngdoc function
 * @name cnemasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cnemasApp
 */
angular.module('cnemasApp')
  .controller('MainCtrl', ['$scope', 'moviesPopular', '$stateParams', '$location', '$state', 'moviesGenres',
  function ($scope, moviesPopular, $stateParams, $location, $state, moviesGenres) {

    $scope.popularity = [{
      'key': 'desc',
      'name': 'Most Popular'
    }, {
      'key': 'asc',
      'name': 'Least Popular'
    }];
    $scope.moviesGenresOptions = moviesGenres;
    $scope.selectedMoviesGenres = [];

    var page = ($stateParams.page)? parseInt($stateParams.page): 1,
      popularity = ($stateParams.popularity)? $stateParams.popularity: $scope.popularity[0]['key'],
      genres = ($stateParams.genres)? $stateParams.genres: '',
      genreIds = [],
      genreObj = null;

    // Template filter values
    // popularity
    if (popularity) {
      $scope.selectedPopularity = $scope.popularity.find(function(popItem){
        return popItem.key === popularity;
      });
    } else {
      $scope.selectedPopularity = $scope.popularity[0];
    }
    // genres
    if (genres) {
      $scope.selectedGenres = genres;
      genreIds = genres.split(',');
      genreIds.forEach(function(key){
        genreObj = $scope.moviesGenresOptions.find(function(genreItem){
          return genreItem.id === parseInt(key);
        });
        if (genreObj) {
          $scope.selectedMoviesGenres.push(genreObj);
        }
      });
    } else {
      $scope.selectedGenres = '';
      $scope.selectedMoviesGenres = [];
    }
    var selectedMoviesGenresMirror = $scope.selectedMoviesGenres;

    $scope.dropdownPopularitySelected = function (item) {
     if (item.key !== popularity) {
       $location.path('/movies')
        .search({
          'page': 1,
          'popularity': item.key,
          'genres': genres
        });
      }
      // $state.reload();
    };

    $scope.filterMoviesGenres = function() {
      if (selectedMoviesGenresMirror.length === $scope.selectedMoviesGenres.length) {
        return;
      }
      genreIds = $scope.selectedMoviesGenres.map(function(genreObj){
        return genreObj.id;
      });
      genreIds = genreIds.join(',');
      console.log('get new movies filtered by genre:', genreIds);
      $location.path('/movies')
       .search({
         'page': 1,
         'popularity': popularity,
         'genres': genreIds
       });
    };

    $scope.getMoviesNow = function(popularity, page, genreIds){
      var promise = moviesPopular.getPopularMovies(page, popularity, genreIds);
      promise.then(function(data){
        data.results.forEach(function(result) {
          if (!result.backdrop_path) {
            result.img_path = "images/cinema_stock.jpeg";
          } else {
            result.img_path="http://image.tmdb.org/t/p/w500"+result.backdrop_path;
          }
        });
        var totalPages = data['total_pages'];
        $scope.movies = data.results;
        $scope.nextPage = (page+1 <= totalPages)? page+1: 0;
        $scope.previousPage = (page-1 > 0)? page-1: 0;
      });
    };

    // Get fresh data
    $scope.getMoviesNow(popularity, page, genres);

  }]);
