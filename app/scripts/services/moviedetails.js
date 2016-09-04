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

    this.getMovieDetails = function(id) {
      var deferred = $q.defer(),
        url = 'https://api.themoviedb.org/3/movie/'+parseInt(id)+'?api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992';

      $http.get(url)
        .then(function(result){
        deferred.resolve(result.data);
      });

      return deferred.promise;
    };

  }]);
