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
    $urlRouterProvider.otherwise('/popular');
    $stateProvider
      .state('popular', {
        url: '/popular',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        cache: false
      })
      .state('popularpage', {
        url: '/popular/:page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        cache: false
      })
      .state('movie', {
        url: '/movie/:id',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        cache: false
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('browse', {
        url: '/browse',
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      });
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
