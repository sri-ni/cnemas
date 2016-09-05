'use strict';

/**
 * @ngdoc service
 * @name cnemasApp.moviesGenres
 * @description
 * # moviesGenres
 * Service in the cnemasApp.
 */
angular.module('cnemasApp')
  .service('moviesGenres', ['$http', '$q', function ($http, $q) {
    var url = 'http://api.themoviedb.org/3/genre/movie/list',
      apiKey = '2cdc6bb4ff1cc8f902ecb3a7101cc992';

    this.getMoviesGenres = function() {
      var deferred = $q.defer();

      $http.get(url, {
        params: {
          api_key: apiKey
        }
      }).then(function(result){
        deferred.resolve(result.data.genres);
      });

      return deferred.promise;
    };

  }]);
