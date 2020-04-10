App.controller('userDetailController', ['$scope','$http','$routeParams',
    function ($scope,$http,$routeParams) {

  $scope.globalLoader=true;
  $scope.userId=$routeParams.userId
  $scope.userName=$routeParams.userName
  $http({
    url:"https://jsonplaceholder.typicode.com/posts?userId=",
    params:{userId:$routeParams.userId},
    method:"get"
  }).then(function (data) {
    $scope.userDetail=data.data
    $scope.globalLoader=false;
  })
   
    }]);