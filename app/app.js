(function() {
  'use strict';

  angular
    .module('app', ['ui.router'])
    .config(mainConfig);

  mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function mainConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');

    $stateProvider
      .state('view1', {
        url: '/view1',
        templateUrl: 'view1/view1.html'
      })
      .state('view2', {
        url: '/view2',
        templateUrl: 'view2/view2.html'
      });
  }
})();