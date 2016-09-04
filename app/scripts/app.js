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
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/movies/1');
    $stateProvider
      .state('movies', {
        url: '/movies/:page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        cache: false,
        data : {
          displayName : 'Popular'
        }
      })
      // .state('movies.page', {
      //   url: '/:page',
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   cache: false,
      //   data : {
      //     displayName : 'Popular.Page'
      //   }
      // })
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
            return movieDetails.getMovieName($stateParams.id)
          }
        }
      });
      // .state('browse', {
      //   url: '/browse',
      //   templateUrl: 'views/browse.html',
      //   controller: 'BrowseCtrl'
      // });
  }]);

// Using angular-route
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
