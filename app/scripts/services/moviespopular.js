'use strict';

/**
 * @ngdoc service
 * @name cnemasApp.moviesPopular
 * @description
 * # moviesPopular
 * Service in the cnemasApp.
 */
angular.module('cnemasApp')
  .service('moviesPopular', ['$http', '$q', function ($http, $q) {

    this.getPopularMovies = function(page, popularity, genreIds) {
      var deferred = $q.defer(),
        url;

      url = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.'+popularity+'&api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page='+page+'&with_genres='+genreIds;

      $http.get(url)
        .then(function(result){
        deferred.resolve(result.data);
      });

      return deferred.promise;
    };
  }]);


  // movie api
  //http://api.themoviedb.org/3/movie/popular?api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page=
  // discover api
  //http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page=
