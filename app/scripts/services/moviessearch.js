'use strict';

/**
 * @ngdoc service
 * @name cnemasApp.moviessearch
 * @description
 * # moviessearch
 * Service in the cnemasApp.
 */
angular.module('cnemasApp')
  .service('moviesSearch', ['$http', '$q', function ($http, $q) {
    var url = 'http://api.themoviedb.org/3/search/movie',
      apiKey = '2cdc6bb4ff1cc8f902ecb3a7101cc992';

    this.searchMovies = function(term, page) {
      var deferred = $q.defer();

      $http.get(url, {
        params: {
          api_key: apiKey,
          language: 'en',
          page: page,
          query: term
        }
      }).then(function(result){
        deferred.resolve(result.data);
      });

      return deferred.promise;
    };

  }]);
