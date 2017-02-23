angular.module('addbook' , [])

.controller('BookController', function ($scope , $window , $location ,$route, book) {
  $scope.book = {};

  if($location.path() === '/books/add'){
  if(!$window.localStorage.getItem("user.type")) {
        $location.path('/');
      } 
  }
  // function add book just for admin 
  $scope.addbook = function () {
  	book.addbook($scope.book)
  	.then(function (Book) {
        console.log(Book)
        $route.reload();
        $location.path('/books');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // delete book
  $scope.deleteBook= function (b) {
    book.deleteBook(b)
    .then(function (Book) {
        console.log(Book)
        $location.path('/books')
        $route.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 // update book for admin
  $scope.updateBook= function () {
    book.updateBook($scope.book)
    .then(function (Book) {
        console.log(Book)
        $location.path('/books');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  $scope.updateButton = function(b){
    book.updBook = b;
    $location.path('/books/edit');
  }

  // function show book for user and admin
  $scope.showBook = function () {
  	book.showbook($scope.book).then(function(data) {
		$scope.book = data;
    console.log($scope.book)
	});
  }

  $scope.getBook = function(){
    $scope.book = book.updBook;
  }

  });

