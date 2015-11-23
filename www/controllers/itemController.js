app.controller('itemCtrl',function($scope,$stateParams,$rootScope){
  $rootScope.visible=false;
$rootScope.title=$stateParams.title.replace(":","");
console.log($rootScope.itemData);
})
