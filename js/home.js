App.controller('homeCtrl',function($scope,mainService) {

  $scope.outBack=function() {
      $('body').addClass('outBack');
      $('body').removeClass('firstBack inBack weatherBack homeBack');
  };
  $scope.inBack=function() {
      $('body').addClass('inBack');
      $('body').removeClass('firstBack homeBack weatherBack outBack');
  };
  $scope.weatherBack=function() {
      $('body').addClass('weatherBack');
      $('body').removeClass('firstBack inBack homeBack outBack');
  };

});
