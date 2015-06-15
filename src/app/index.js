'use strict';

angular.module('ngCookbook', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/signin', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SignInCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
