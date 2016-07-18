/**
* Shop controller
* @namespace statume.shop.controllers
*/
(function () {
  'use strict';

  angular
    .module('statume.shop.controllers')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['$scope'];

  /**
  * @namespace ProductController
  */
  function ProductController($scope) {
    var vm = this;

    vm.productlist = productlist;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf thinkster.authentication.controllers.RegisterController
    */
    function productlist() {
      console.log('This is ProductController');
    }
  }
})();
