// Route for all page when url go to page
angular.module('books', [
  'book.auth',
  'book.main',
  'ngMap',
  'book.map',
  'book.services',
  'addbook',
  'book.Order1',
  'ngRoute'
  ])


.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller: 'AuthController'
    })
  .when('/books',{
    templateUrl:'app/account/showbooks.html',
    controller:'BookController'
  })
    .when('/signin', {
      templateUrl: 'app/account/signin.html',
      controller: 'AuthController'
    })     
  .when('/signout', {
      templateUrl: 'app/account/signout.html',
      controller: 'AuthController'
    })
  .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
  .when('/books/add',{
    templateUrl: 'app/account/add_book.html',
    controller:'BookController'
  })
  .when('/orders',{
    templateUrl:'app/account/Orders.html',
    controller:'OrderController'
  })
  .when('/aboutus',{
    templateUrl:'app/account/aboutus.html',
    controller:'BookController'
  })
    .otherwise({redirectTo:'/'});
})

