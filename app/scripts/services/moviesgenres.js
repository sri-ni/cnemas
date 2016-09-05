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

    this.getMoviesGenres = function() {
      var deferred = $q.defer(),
        url = 'http://api.themoviedb.org/3/genre/movie/list?api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992';

      $http.get(url)
        .then(function(result){
          deferred.resolve(result.data.genres);
        });

      return deferred.promise;
    };

  }]);
