(function() {
  'use strict';

  angular
    .module('angular-slider')
    .controller('mainCtrl', slider);

  function slider($scope) {
    $scope.deckDataSet = [
      {
        'title': '1',
        'family': 'fa fa-hand-rock-o',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '2',
        'family': 'fa fa-hand-o-right',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '3',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '4',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '5',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '6',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '7',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '8',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '9',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '10',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '11',
        'family': '',
        'img': './images/default.png',
        'content': ''
      },
      {
        'title': '12',
        'family': '',
        'img': './images/default.png',
        'content': ''
      }
    ];
    $scope.test = 'Welcome To Angular Slider! :-)'
  }

})();
