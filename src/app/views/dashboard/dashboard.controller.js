'use strict';

ngCookbook
  .controller('DashboardCtrl', function ($scope) {
    $scope.recipes = [
      {
        'name': 'Recipe One',
        'image': 'http://placehold.it/243x162/222/ccc',
        'id': 1
      },
      {
        'name': 'Recipe Two',
        'image': 'http://placehold.it/243x162/444/ccc',
        'id': 2
      },
      {
        'name': 'Recipe Three',
        'image': 'http://placehold.it/243x162/666/ccc',
        'id': 3
      },
      {
        'name': 'Recipe Four',
        'image': 'http://placehold.it/243x162/888/ccc',
        'id': 4
      },
      {
        'name': 'Recipe Five',
        'image': 'http://placehold.it/243x162/bbb/666',
        'id': 5
      }
    ];
  });
