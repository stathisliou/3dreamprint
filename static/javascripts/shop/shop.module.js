(function () {
  'use strict';

  angular
    .module('statume.shop', [
      'statume.shop.controllers',
      'statume.shop.directives',
      'statume.shop.services'
    ]);

  angular
    .module('statume.shop.controllers', []);

  angular
    .module('statume.shop.directives', ['ngDialog']);

  angular
    .module('statume.shop.services', []);
})();
