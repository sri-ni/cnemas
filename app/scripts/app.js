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
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
