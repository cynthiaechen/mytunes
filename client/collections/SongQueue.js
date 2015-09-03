// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

  }

  if (songQueue.length === 1) {
    this.at(0).play();
  } else {
    this.push()

  }

  this.model.on('ended', function() {
    this.shift();
  });

});