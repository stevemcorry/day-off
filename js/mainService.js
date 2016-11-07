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

this.inIdeas = function() {
return [
  'Bake cookies',
  'Play a board game',
  'Build a blanket fort',
  'Go through old Photos',
  'Clean out your fridge',
  'Re-arrange the cupboard',
  'Switch up your home decorations',
  'Have a movie marathon',
  'Make dinner together as a family',
  'Have an indoor Olympics',
  'Watch home movies',
  'Read a good book',
  'Do a craft',
  'Make something in the crock pot',
  'Do a work out video',
  'Color – adult coloring books are all the rage now!',
  'Play cards',
  'Play hide and seek',
  'Play flashlight tag',
  'Have a scavenger hunt',
  'Break out the knitting/sewing/crocheting you’ve been putting off',
  'Write a letter to a friend (or a Facebook message)',
  'Take a bubble bath',
  'Update your address book',
  'Make a “campsite” inside',
  'Have an indoor picnic',
  'Give yourself a facial',
  'Drink some tea',
  'Do yoga',
  'Put on a good album and dance around the house',
  'Catch up on the news',
  'Deep clean your house',
  'Give yourself a skin scrub',
  'Research new recipes',
  'Binge-watch a new (to you!) TV series on Netflix',
  'Read the paper',
  'Play a video or computer game',
  'Make ice cream sundaes',
  'Do indoor hopscotch',
  'Go through your closet and put aside clothes for donation',
  'Shoot a video on your phone',
  'Give your pet some extra attention',
  'Do a crossword puzzle or sudoku',
  'Call someone and catch up over the phone',
  'Warm up with a bowl of soup'
];
};

});
