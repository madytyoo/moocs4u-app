angular.module('moocs4u', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/about',
            {
                controller: 'NavCtrl',
                templateUrl: '/partials/about.tpl.html'

            })
            .otherwise({ redirectTo: '/about' });
    })
    .controller('NavCtrl', function ($scope,$http,$timeout,$location) {

    })