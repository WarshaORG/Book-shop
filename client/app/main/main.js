angular.module('book.main', [])

.controller('MainController', function ($scope) {
	 

$scope.loggedIN=false

$scope.show=function () {
	 $scope.loggedIN= !$scope.loggedIN
}
});




