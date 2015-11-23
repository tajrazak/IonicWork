app.controller('homeCtrl',function($scope,$http,$q,$location,$rootScope){

// $('ion-header-bar').remove();
// $('body').append('<my-dir></my-dir>')
$rootScope.visible=true;

  var first=$http.get('http://localhost:3000/getItems'),
  second=$http.get('http://localhost:3000/getPics');

  $q.all([first,second]).then(function(results){

    results[0].data.items.forEach(function(item){
      results[1].data.pictures.forEach(function(pics){
        if(pics.hasOwnProperty(item.id))
        item.picurl=pics[item.id];
      });


    })

   console.log(results[0].data.items)
   $scope.itemsData=results[0].data.items;
  })

$scope.showDetails=function(item){
$rootScope.maintitle="";
$rootScope.itemData=item;
}



});
