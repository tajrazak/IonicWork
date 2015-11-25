app.controller('loginCtrl',function($scope,$http,$state,$location,userService){



  $scope.submit=function(){

    $http.post('http://localhost:3000/login',$scope.login).success(function(data){

      if(data.success)
      {
        $location.path('/menu');
        userService.userData=data;
        //console.log(data)
      }

    })
  }

})
