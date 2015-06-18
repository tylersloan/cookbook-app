'use strict';

angular.module('ngCookbook')
  .controller('headerCtrl', function ($scope) {
    $scope.userControlItems = [
      {
        'title': 'Add Recipe',
        'url': '/add-recipe'
      },
      {
        'title': 'Log Out',
        'url': '/signin'
      }
    ];
  });
