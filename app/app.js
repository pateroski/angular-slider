angular.module('angular-slider', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
      url: '/slider',
      controller: 'mainCtrl',
      templateUrl: 'modules/main/main.html'
    })
  }
]);
