'use strict';

var ngCookbook = angular.module('ngCookbook', ['ngRoute']);

ngCookbook.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/signin', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SignInCtrl'
    })
    .when('/new-recipe', {
        templateUrl: 'app/new-recipe/new-recipe.html',
        controller: 'NewRecipeCtrl'
    })
    .when('/recipe/', {
        templateUrl: 'app/view-recipe/recipe.html',
        controller: 'ViewRecipeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
