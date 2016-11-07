App.controller('outCtrl',function($http,mainService,$scope) {
  $scope.getTrail = function(city,state) {
    mainService.getTrail(city,state).then(function(response) {
      $scope.trails = response.data.places;
      console.log($scope.trails);
    });
  };

$scope.toggle = function() {
  $scope.hidden=!$scope.hidden;
};

});
