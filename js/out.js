App.controller('outCtrl',function($http,mainService) {
  $scope.getTrail = function() {
    mainService.getTrail().then(function(response) {
      $scope.Trail = response.data;
    });
  };
});
