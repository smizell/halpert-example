var _ = require('underscore'),
    friends = require('./friends'),
    express = require('express'),
    app = express();

app.use(express.bodyParser());

function getFriend(friends, href) {
  return _.filter(friends.collection.items, function(friend) {
    return friend.href == href;
  })
}

function friendCollection(friends, name, href) {
  var friend = getFriend(friends, href);
  return { 
    collection: {
      version: '1.0',
      href: href,
      items: friend
    }
  }
}

function addFriend(friends, data) {
  var count = friends.collection.items.length + 1;
  var friend = {
    href : "/friends/fake"+count,
    data : [
      {name : "full-name", value : data ['full-name'], prompt : "Full Name"},
      {name : "email", value : data.email, prompt : "Email"}
    ],
    links : [
      {rel : "blog", href : data.blog, prompt : "Blog"},
      {rel : "avatar", href : data.avatar, prompt : "Avatar", render : "image"}
    ]
  }
  friends.collection.items.push(friend);
  return friends;
}

function findFriends(friends, term, href) {
  var items = _.filter(friends.collection.items, function(friend) {
    return friend.href.indexOf(term) != -1;
  })
  return { 
    collection: {
      version: '1.0',
      href: href,
      items: items
    }
  }
}

app.get('/friends', function(req, res) {
  res.format({
    'application/json': function() {
      res.send(friends)
    },
    'application/vnd.collection+json': function() {
      res.send(friends)
    }
  })
});

app.post('/friends', function(req, res) {
  var newFriends = addFriend(friends, req.body);
  res.format({
    'application/json': function() {
      res.send(newFriends)
    },
    'application/vnd.collection+json': function() {
      res.send(newFriends)
    }
  })
});

app.get('/friends/search', function(req, res) {
  var searchedFriends = findFriends(friends, req.query.search, req.url);
  res.format({
    'application/json': function() {
      res.send(searchedFriends)
    },
    'application/vnd.collection+json': function() {
      res.send(searchedFriends)
    }
  })
});

app.get('/friends/:name', function(req, res) {
  var friend = friendCollection(friends, req.params.name, req.url)
  res.format({
    'application/json': function() {
      res.send(friend)
    },
    'application/vnd.collection+json': function() {
      res.send(friend)
    }
  })
});

app.listen(3000)