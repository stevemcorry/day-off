App.controller('weatherCtrl',function($scope,mainService) {
  $scope.getWeather = function(){
    mainService.getWeather().then(function(results) {
      $scope.weather = results.data;
      console.log(results.data);
    });
  };

});
