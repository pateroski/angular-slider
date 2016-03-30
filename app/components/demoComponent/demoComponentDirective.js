angular.module('simple-angular-seed')

.directive('demoComponent', [function() {
        return {
            restrict: 'E',
            templateUrl: 'components/demoComponent/demoComponent.html'
        };
    }]);