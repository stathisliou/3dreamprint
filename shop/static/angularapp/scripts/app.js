'use strict';

angular.module('treedreamApp', ['ui.router', 'ngResource'])

/* and configuration to avoid conflicts with django tags */
.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
})

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'static/angularapp/views/home.html',
                        controller  : 'HomeController'
                    }
                }

            });

        $urlRouterProvider.otherwise('/');
        })
    ;
