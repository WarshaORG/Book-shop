angular.module('book.Order1' , [])


.controller('OrderController', function ($scope , $window , $location,$route , Order) {
  $scope.order = {};
  // function add order just for admin 
  $scope.addorder = function () {
    Order.addorder($scope.order)
    .then(function (order) {
      $scope.order=order
      console.log(order)
        $location.path('/orders');
        $route.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // function show order for user and admin
  $scope.showorder = function () {
    Order.showorder($scope.order).then(function(data) {
      console.log(data)
    $scope.order = data;
    });
  }

  });