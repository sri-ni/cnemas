'use strict';

/**
 * @ngdoc overview
 * @name cnemasApp
 * @description
 * # cnemasApp
 *
 * Main module of the application.
 */
angular
  .module('cnemasApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'btorfs.multiselect'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/movies?page=1');
    $stateProvider
      .state('movies', {
        url: '/movies?page&popularity&genres',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        cache: false,
        data : {
          displayName : 'Popular'
        },
        resolve: {
          moviesGenres: function(moviesGenres) {
            return moviesGenres.getMoviesGenres();
          }
        }
      })
      .state('moviedetails', {
        url: '/movies/details/:id',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        cache: false,
        data : {
          displayName : '{{movieTitle}}'
        },
        resolve: {
          movieTitle: function($stateParams, movieDetails) {
            return movieDetails.getMovieName($stateParams.id);
          }
        }
      })
      .state('searchresults', {
        url: '/search?q&page',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        cache: false,
        data : {
          displayName : 'Search Results'
        }
      })
      .state('searchresultsmoviedetails', {
        url: '/search/details/:id',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        cache: false,
        data : {
          displayName : '{{movieTitle}}'
        },
        resolve: {
          movieTitle: function($stateParams, movieDetails) {
            return movieDetails.getMovieName($stateParams.id);
          }
        }
      });
      // .state('movies.page', {
      //   url: '/:page',
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   cache: false,
      //   data : {
      //     displayName : 'Popular.Page'
      //   }
      // })

      // .state('browse', {
      //   url: '/browse',
      //   templateUrl: 'views/browse.html',
      //   controller: 'BrowseCtrl'
      // });
  }]);

// Using angular-route
// .when('/searchResults', {
//   templateUrl: 'views/searchresults.html',
//   controller: 'SearchresultsCtrl',
//   controllerAs: 'searchResults'
// })
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .when('/browse', {
  //       templateUrl: 'views/browse.html',
  //       controller: 'BrowseCtrl',
  //       controllerAs: 'browse'
  //     })
  // .when('/movie', {
  //   templateUrl: 'views/movie.html',
  //   controller: 'MovieCtrl',
  //   controllerAs: 'movie'
  // })

  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
