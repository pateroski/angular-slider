(function() {
  'use strict';

  angular
    .module('simple-angular-seed')
    .controller('homeCtrl', controller);
  
  function controller($scope) {
    $scope.test = 'Hola mundo';
  }

})();
