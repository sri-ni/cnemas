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

    this.getPopularMovies = function(page) {
      var deferred = $q.defer();

      $http.get('http://api.themoviedb.org/3/movie/popular?api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page='+page).then(function(result){
        deferred.resolve(result.data);
        console.log('deferred.resolve: ', result.data);
      });

      return deferred.promise;
    };
  }]);
