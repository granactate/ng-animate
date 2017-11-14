(function () {

    var module = angular.module("app", ['ui.router', 'ngAnimate']);

  module.config(function ($stateProvider, $urlRouterProvider) {
    var step1 = {
      name: 'step1',
      url: '/step1',
      templateUrl : "templates/view1.html"
    };

    var step2 = {
      name: 'step2',
      url: '/step2',
      templateUrl : "templates/view2.html"
    };

    var step3 = {
      name: 'step3',
      url: '/step3',
      templateUrl : "templates/view3.html"
    };

    $stateProvider.state(step1);
    $stateProvider.state(step2);
    $stateProvider.state(step3);

    $urlRouterProvider.otherwise('/step1');
  });
})();