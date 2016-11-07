App.service('mainService',function($http) {
  this.getWeather = function(city){
    $('.weatherResults').css('display','flex');
    return $http({
      method:'GET',
      url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=7913fa7e5034e424ffdfe33754c49fc5'
    });
  };
this.getTrail = function(city,state) {
  return $http({
    method: 'GET',
    url: 'https://trailapi-trailapi.p.mashape.com/?limit=25&q[city_cont]='+city+'&q[state_cont]='+state+'&mashape-key=XBUdCvkajDmshuCe9iLHV1tWXvnZp1y0ZfPjsnhM5vJ38QVlwN'
  });
};

});
