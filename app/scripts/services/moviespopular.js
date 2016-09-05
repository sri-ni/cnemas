'use strict';

/**
 * @ngdoc service
 * @name cnemasApp.moviesPopular
 * @description
 * # moviesPopular
 * Service in the cnemasApp.
 */
angular.module('cnemasApp')
  .service('moviesPopular', ['$http', '$q', '$location', 'ngToast',
  function ($http, $q, $location, ngToast) {
    var url = 'http://api.themoviedb.org/3/discover/movie',
      apiKey = '2cdc6bb4ff1cc8f902ecb3a7101cc992';

    this.getPopularMovies = function(page, popularity, genreIds) {
      var deferred = $q.defer();

      $http.get(url, {
        params: {
          api_key: apiKey,
          page: page,
          sort_by: 'popularity.'+popularity,
          with_genres: genreIds
        }
      }).then(function(result){
        deferred.resolve(result.data);
      }, function(error) {
        console.log('ERR: moviesPopular.getPopularMovies ', error.status);
        ngToast.create({
          className: 'danger',
          content: 'Something went wrong! Redirecting home.',
          dismissButton: true,
          timeout: 5000
        });
        $location.path('/movies').search({'page': 1});
      });

      return deferred.promise;
    };
  }]);
