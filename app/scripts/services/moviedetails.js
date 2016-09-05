'use strict';

/**
 * @ngdoc service
 * @name cnemasApp.movieDetails
 * @description
 * # movieDetails
 * Service in the cnemasApp.
 */
angular.module('cnemasApp')
  .service('movieDetails', ['$http', '$q', function ($http, $q) {
    var url = 'https://api.themoviedb.org/3/movie/',
      apiKey = '2cdc6bb4ff1cc8f902ecb3a7101cc992';

    this.getMovieDetails = function(id) {
      var deferred = $q.defer();

        $http.get(url+parseInt(id), {
          params: {
            api_key: apiKey
          }
        }).then(function(result){
          deferred.resolve(result.data);
        });

      return deferred.promise;
    };

    this.getMovieName = function(id) {
      var deferred = $q.defer();

      $http.get(url+parseInt(id), {
        params: {
          api_key: apiKey
        }
      }).then(function(result){
        deferred.resolve(result.data.title);
      });

      return deferred.promise;
    };

  }]);
