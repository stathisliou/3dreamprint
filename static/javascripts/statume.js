(function () {
  'use strict';

  angular
    .module('statume', [
      'statume.routes',
      'statume.shop'
    ]);

  angular
    .module('statume.routes', ['ngRoute']);

  angular
    .module('statume', [
        'statume.config',
      ]);

    angular
      .module('statume.config', []);
})();
