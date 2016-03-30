(function() {
  'use strict';

  angular
    .module('angular-slider')
    .controller('mainCtrl', slider);

  function slider($scope) {
    $scope.deckDataSet = [
      {
        'title': '',
        'family': '',
        'content': ''
      }
    ];
    $scope.test = 'Hola mundo!'
  }

})();
