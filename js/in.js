App.controller('inCtrl',function($scope, mainService) {
  $scope.insideAct = 'NETFLIX';
  $scope.ideas = mainService.inIdeas();
  $scope.getAct = function() {
    $scope.insideAct = $scope.ideas[Math.floor(Math.random()*$scope.ideas.length)];
    };
});
