(function() {
  'use strict';
  angular
    .module('angular-slider')
    .directive('card', directive);

  function directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/card/card.html',
      scope: {
        cardTitle: '@',
        cardFamily: '@',
        cardImg: '@',
        cardConent: '@'
      }
    };
    return directive;
  }
})();
