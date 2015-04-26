(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.version',
      'app.view1',
      'app.view2'
    ])
    .config(mainConfig);

  mainConfig.$inject = ['$urlRouterProvider'];

  function mainConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
  }

})();
