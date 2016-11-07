App.directive('myDirective',function() {
  return{
    restrict: 'EA',
    link: function(scope,element,attr) {
        console.log('still works');
        $('.trailLink').on('click',function() {
          $('.trailInfo').toggleClass('showInfo');
        });
      }
    };

});
