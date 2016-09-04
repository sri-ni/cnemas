'use strict';

/**
 * @ngdoc directive
 * @name cnemasApp.directive:breadcrumbs
 * @description
 * # breadcrumbs
 */
angular.module('cnemasApp')
  .directive('breadcrumbs', ['$state', '$stateParams', '$interpolate',
  function ($state, $stateParams, $interpolate) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/templates/breadcrumbs.html',
      scope: {
        // displaynameProperty: '@'
      },
      link: function(scope) {
        scope.breadcrumbs = [];
        if ($state.$current.name !== '') {
          updateBreadcrumbsArray();
        }
        scope.$on('$stateChangeSuccess', function() {
          updateBreadcrumbsArray();
        });

        function updateBreadcrumbsArray() {
          var breadcrumbs = [],
            currentState = $state,
            currentUrl = $state.current.url,
            currentName = $state.$current.data.displayName,
            name = null;

          console.log('currentState: ',
            currentUrl,
            currentUrl.split('/'));
          currentUrl = currentUrl.split('/');

          currentUrl.forEach (function(urlBit){
            switch (urlBit) {
              case '':
                name = 'Home';
                break;
              case 'movies':
                name = 'Popular';
                break;
              case 'search':
                name = 'Search';
                break;
              case 'details':
                name = currentName;
                break;
            }
            if (name !== null) {
              breadcrumbs.push({
                displayName: name
              });
            }
            name = null;
          });

          scope.breadcrumbs = breadcrumbs;
        }
      }
    };
  }]);
