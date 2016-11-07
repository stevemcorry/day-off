var App = angular.module('myApp',['ui.router']);
App.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl:'view/home.html',
    controller: 'homeCtrl'
  })
  .state('first', {
    url:'/start',
    templateUrl: 'view/first.html',
    controller: 'firstCtrl'
  })
  .state('in', {
    url: '/in',
    templateUrl: 'view/in.html',
    controller: 'inCtrl'
  })
  .state('out', {
    url: '/out',
    templateUrl: 'view/out.html',
    controller: 'outCtrl'
  })
  .state('weather', {
    url: '/weather',
    templateUrl: 'view/weather.html',
    controller: 'weatherCtrl'
  });
});
