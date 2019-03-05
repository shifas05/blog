
    angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'AppUModule',
        'angular-jwt'
        ])
    
    .config(['$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])
    // .config(['$httpProvider', 'jwtOptionsProvider', 
    //     function Config($httpProvider, jwtOptionsProvider) {
    //     jwtOptionsProvider.config({
    //         tokenGetter: ['localstorage', function(localstorage) {
    //             return localStorage.getItem('token_book');
    //         }],
    //         unauthenticatedRedirectPath: '/login',
    //         whiteListedDomains: ['payment.test', 'localhost']
    //     });

    //     // $httpProvider.interceptors.push('jwtInterceptor');
    // }])
    .config(function Config($httpProvider, jwtInterceptorProvider) {
      jwtInterceptorProvider.tokenGetter = function() {
        return localStorage.getItem('token_book');
      }
      $httpProvider.interceptors.push('jwtInterceptor');
    })
    .run(function($rootScope, jwtHelper, $location) {

       // auth.hookEvents(); //Check User is Authenticated before letting them thorugh to secure routes 
        var token = localStorage.getItem('token_book');  //get token 

        if(token){ //if token exists and is expired
            if (jwtHelper.isTokenExpired(token)) {

                    //sign the user out 
                      alert("token Out");
                      localStorage.removeItem('token_book');
                      $location.path('/logout');
            }
            else { //if token exists but is not expired - sign the user back in. 
                // auth.authenticate(localStorage.getItem('profile'), token);
            }
        } 

        // });

    })
    .filter('amountInWords', function () {
        return function (amount) {
           if (!amount) {

           } else{
                var words = new Array();
            words[0] = '';
            words[1] = 'One';
            words[2] = 'Two';
            words[3] = 'Three';
            words[4] = 'Four';
            words[5] = 'Five';
            words[6] = 'Six';
            words[7] = 'Seven';
            words[8] = 'Eight';
            words[9] = 'Nine';
            words[10] = 'Ten';
            words[11] = 'Eleven';
            words[12] = 'Twelve';
            words[13] = 'Thirteen';
            words[14] = 'Fourteen';
            words[15] = 'Fifteen';
            words[16] = 'Sixteen';
            words[17] = 'Seventeen';
            words[18] = 'Eighteen';
            words[19] = 'Nineteen';
            words[20] = 'Twenty';
            words[30] = 'Thirty';
            words[40] = 'Forty';
            words[50] = 'Fifty';
            words[60] = 'Sixty';
            words[70] = 'Seventy';
            words[80] = 'Eighty';
            words[90] = 'Ninety';
            amount = amount.toString();
            var atemp = amount.split(".");
            var number = atemp[0].split(",").join("");
            var n_length = number.length;
            var words_string = "";
            if (n_length <= 9) {
                var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                var received_n_array = new Array();
                for (var i = 0; i < n_length; i++) {
                    received_n_array[i] = number.substr(i, 1);
                }
                for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                    n_array[i] = received_n_array[j];
                }
                for (var i = 0, j = 1; i < 9; i++, j++) {
                    if (i == 0 || i == 2 || i == 4 || i == 7) {
                        if (n_array[i] == 1) {
                            n_array[j] = 10 + parseInt(n_array[j]);
                            n_array[i] = 0;
                        }
                    }
                }
                value = "";
                for (var i = 0; i < 9; i++) {
                    if (i == 0 || i == 2 || i == 4 || i == 7) {
                        value = n_array[i] * 10;
                    } else {
                        value = n_array[i];
                    }
                    if (value != 0) {
                        words_string += words[value] + " ";
                    }
                    if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                        words_string += "Crores ";
                    }
                    if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                        words_string += "Lakhs ";
                    }
                    if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                        words_string += "Thousand ";
                    }
                    if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                        words_string += "Hundred and ";
                    } else if (i == 6 && value != 0) {
                        words_string += "Hundred ";
                    }
                }
                words_string = words_string.split("  ").join(" ");
            }
            return words_string;
           }
        };
    });



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

'use strict';

angular.module('app').constant('settings', {
    APP_ENV: 'testing',
    APP_NAME: 'demo',
    BACKEND_URL: backend,
	BACKEND_URL_API: backend + '/api/home/v1/',

});
angular
.module('app')
.controller('DashboardController', ['$scope', '$http', '$stateParams', 
	function($scope, $http, $stateParams) {
    // console.log('123')
	
}]);
angular
.module('app')
.controller('HeadCtrl', ['$rootScope', '$scope' ,'$stateParams','$timeout','$document','$transitions',
    function($rootScope, $scope, $stateParam,$timeout,$document,$transitions) {
        console.log('456')
}]);

angular
.module('app')
.controller('HeaderCtrl', ['$rootScope', '$scope' ,'$stateParams','$timeout','$document','$transitions','$http','settings',
    function($rootScope, $scope, $stateParam,$timeout,$document,$transitions,$http,settings) {
        // console.log('789')
}]);

angular
.module('app')
.controller('UserController', [ '$scope', '$http', '$stateParams', 
    function($scope, $http, $stateParams){
        // console.log('nooooooo');
}]);
