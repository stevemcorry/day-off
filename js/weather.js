App.controller('weatherCtrl',function($scope,mainService) {
  $scope.getWeather = function(city){
    mainService.getWeather(city).then(function(results) {
      $scope.weather = results.data;
      console.log(results.data);
    });

  };
  $scope.outBack=function() {
      $('body').addClass('outBack');
      $('body').removeClass('firstBack homeBack weatherBack inBack');
  };
  $scope.inBack=function() {
      $('body').addClass('inBack');
      $('body').removeClass('firstBack homeBack weatherBack outBack');
  };

});
