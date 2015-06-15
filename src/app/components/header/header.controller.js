'use strict';

angular.module('ngCookbook')
  .controller('HeaderCtrl', function ($scope) {
    $scope.date = new Date();
  });
