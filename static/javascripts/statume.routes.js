(function () {
  'use strict';

  angular
    .module('statume.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/products', {
      controller: 'ProductController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/shop/products.html'
    }).otherwise('/');
  }
})();
