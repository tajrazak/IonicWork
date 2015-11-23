app.controller('navBackCtrl',function($scope, $ionicHistory,$location,$rootScope,$stateParams){

  $rootScope.title='Back';
  $rootScope.maintitle="DinnerDash"
  $scope.goBack=function(){
    console.log($location.path()+","+$stateParams.type+','+$stateParams.title)
    if($location.path()!='/home')
    {
      $rootScope.visible=true;
      $ionicHistory.goBack();
      $rootScope.maintitle="DinnerDash";
    }
  }

})
