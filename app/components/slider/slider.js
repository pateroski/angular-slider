(function() {
  'use strict';
  angular
    .module('angular-slider')
    .directive('slider', directive);

  function directive() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'components/slider/slider.html',
      scope: {
        deckDataSet: '='
      }
    };
    return directive;
  }
})();
