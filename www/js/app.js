// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider,$urlRouterProvider){

  $stateProvider

  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html'
  })
  .state('menu',{
    url:'/menu',
    templateUrl:'templates/menu.html'
  })
  .state('menu.home',{
    url:'/home',
    views:{
      "menuContent":{
        templateUrl:'templates/home.html'
      }
    }
  })
  .state('menu.item',{
    url:'/item',
    views:{
      "menuContent":{
        templateUrl:'templates/item.html'
      }
    }
  })
  .state('menu.profile',{
    url:'/profile',
    views:{
      "menuContent":{
        templateUrl:'templates/profile.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');


});
