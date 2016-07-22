angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Dash', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dashes = [{
    id: 0,
    name:"Shirt",
    price:"$81",
    img: "./img/1.jpg",
  }, {
    id: 1,
    name:"Shirt 1",
    price:"$5",
    img:"./img/2.jpg"
  }, {
    id: 2,
    name:"Shirt2",
    price:"$10",
    img:"./img/3.jpg"
  }, {
    id: 3,
    name:"T恤3",
    price:"8$",
    img:"./img/4.jpg"
  }, {
    id: 4,
    name:"T恤4",
    price:"$6",
    img:"./img/5.jpg"
  }, {
    id: 5,
    name:"T恤5",
    price:"$18",
    img:"./img/6.jpg"
  }];

  return {
    all: function() {
      return dashes;
    },
    remove: function(dash) {
      dashes.splice(dashes.indexOf(dash), 1);
    },
    get: function(dashId) {
      for (var i = 0; i < dashes.length; i++) {
        if (dashes[i].id === parseInt(dashId)) {
          return dashes[i];
        }
      }
      return null;
    }
  };
})


