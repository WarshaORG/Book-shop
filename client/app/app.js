angular.module('books',
  ['book.auth',
  'book.main',
  'book.services',
  'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: 'app/account/signin.html',
      controller: 'AuthController'
    })     
	.when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
})