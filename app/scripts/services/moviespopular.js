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
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getPopularMovies = function(page, popularity) {
      var deferred = $q.defer();

      console.log('getPopularMovies popularity: ', popularity);

      $http.get('http://api.themoviedb.org/3/discover/movie?sort_by=popularity.'+popularity+'&api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page='+page)
        .then(function(result){
        deferred.resolve(result.data);
        console.log('deferred.resolve: ', result.data);
      });

      return deferred.promise;
    };
  }]);


  // movie api
  //http://api.themoviedb.org/3/movie/popular?api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page=
  // discover api
  //http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page=
