angular.module('simple-angular-seed', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                templateUrl: 'modules/home/home.html'
            });

    }]);