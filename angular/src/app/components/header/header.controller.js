'use strict';

angular.module('ngCookbook')
  .controller('HeaderCtrl', function ($scope) {

    $scope.userControlItems = [
      {
        'title': 'Add Recipe',
        'url': '/#/new-recipe'
      },
      {
        'title': 'Log Out',
        'url': '/#/signin'
      }
    ];
  });
