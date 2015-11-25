app.controller('menuCtrl',function($scope,$state,$location,userService){

  $location.path('/menu/home')
$scope.user_ProfileData=userService.userData;
console.log($scope.user_ProfileData)

})
