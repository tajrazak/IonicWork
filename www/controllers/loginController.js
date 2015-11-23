app.controller('loginCtrl',function($scope,$http,$state,$location){



  $scope.submit=function(){

  $http.post('http://localhost:3000/login',$scope.login).success(function(data){

    if(data.success)
    {
       $location.path('/home');
       console.log(data)
    }

    })
  }

})
