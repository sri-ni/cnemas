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

    this.searchMovies = function(term, page) {
      var deferred = $q.defer(),
        url = 'http://api.themoviedb.org/3/search/movie?query='+term+'&language=en&api_key=2cdc6bb4ff1cc8f902ecb3a7101cc992&page='+parseInt(page);

      $http.get(url)
        .then(function(result){
          deferred.resolve(result.data);
        });

      return deferred.promise;
    };

  }]);
