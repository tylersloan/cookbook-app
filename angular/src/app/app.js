'use strict';

var ngCookbook = angular.module('ngCookbook', ['ngRoute']);

ngCookbook.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/signin', {
        templateUrl: 'app/views/signin/signin.html',
        controller: 'SignInCtrl'
    })
    .when('/recipe', {
        templateUrl: 'app/views/view-recipe/recipe.html'
        //controller: 'ViewRecipeCtrl'
    })
    .when('/new-recipe', {
        templateUrl: 'app/views/new-recipe/new-recipe.html',
        controller: 'NewRecipeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
