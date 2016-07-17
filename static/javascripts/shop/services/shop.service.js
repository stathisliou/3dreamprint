# create an AngularJS service that will handle communication between the client and the server.

/**
* Shop
* @namespace statume.shop.services
*/
(function () {
  'use strict';

  angular
    .module('statume.shop.services')
    .factory('Shop', Shop);
    Authentication.$inject = ['$http'];

      /**
      * @namespace Shop
      * @returns {Factory}
      */
      function Authentication($http) {
        /**
        * @name Shop
        * @desc The Factory to be returned
        */
        var Shop = {
          product_list: product_list
        };

        return Shop;

        /**
        * @name product_list
        * @desc Try to render products
        * @param
        * @returns {Promise}
        * @memberOf thinkster.authentication.services.Authentication
        */
        function product_list() {
          return $http.post('/api/v1/accounts/', {
            console.log('This is the product_list');
          });
        }
      }
    })();
