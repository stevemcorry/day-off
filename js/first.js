App.controller('firstCtrl',function($scope) {
  $scope.firstBack=function() {
    $('body').addClass('firstBack');
    $('body').removeClass('homeBack inBack weatherBack outBack');
  };
  $scope.homeBack=function() {
      $('body').addClass('homeBack');
      $('body').removeClass('firstBack inBack weatherBack outBack');
  };
  $scope.inBack=function() {
      $('body').addClass('inBack');
      $('body').removeClass('firstBack homeBack weatherBack outBack');
  };
  $scope.outBack=function() {
      $('body').addClass('outBack');
      $('body').removeClass('firstBack inBack weatherBack homeBack');
  };
});
