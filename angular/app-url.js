'use strict';

angular.module('AppUModule', []).config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
        
    
    
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
              'content@': {
                templateUrl: 'app/views/global/view/layout.html',
                controller: 'HeaderCtrl'
              }
            }
        })
        .state('app', {
            url: '/dashboard',
            views: {
                'contentmain': {
                    templateUrl: 'app/views/global/view/layout.html',
                    controller: 'HeaderCtrl'
                    }
            }
        })

}]);
