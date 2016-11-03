App.service('mainService',function($http) {
  this.getWeather = function(){
    return $http({
      method:'GET',
      url:'http://api.openweathermap.org/data/2.5/weather?q='+'London'+'&units=imperial&APPID=7913fa7e5034e424ffdfe33754c49fc5'
    });
  };
this.getTrail = function() {
  return $http({
    method: 'GET',
    url: "https://trailapi-trailapi.p.mashape.com/?q[city_cont]=Denver"
  });
};

});
