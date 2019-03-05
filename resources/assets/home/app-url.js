'use strict';

angular.module('AppUModule', []).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        
    
    
    $urlRouterProvider.otherwise('/app/dashboard');
    $stateProvider
        // new header
        // .state('app', {
        //     url: '/app',
        //     views: {
        //       '': {
        //         templateUrl: 'assets/app/home/views/homelayout.html',
        //         controller: 'HeadCtrl'
        //       }
        //     }
        // })
        // old header
        .state('app', {
            url: '/app',
            views: {
              '': {
                templateUrl: 'assets/app/home/views/layout.html',
                controller: 'HeaderCtrl'
              }
            }
        })
        .state('app.home', {
            url: '/dashboard',
            views: {
                'contentmain': {
                    templateUrl: 'assets/app/home/views/pages/dashboard.html',
                    controller: 'DashboardController'
                }
            }
        })
        .state('app.users', {
            url: '/users',
            views: {
                'contentmain': {
                    templateUrl: 'assets/app/home/views/pages/users/users.html',
                    controller: 'UserController'
                }
            }
        })


}]);
