
App.config(['$routeProvider',function ($routeProvider) {
  'use strict';
    
      $routeProvider.
        when('/users', {
          templateUrl: 'users/users.html'
        }).
        when('/users/:userId/:userName', {
          templateUrl: 'user_detail/user_detail.html'
        }).
        otherwise('/users');
}])
