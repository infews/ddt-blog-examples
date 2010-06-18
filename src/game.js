function Game() {
  var self = this;

  var currentBall;

  self.useBall = function(newBall) {
    currentBall = newBall;
  };

  self.play = function() {
    for(var i=0; i < 200; i++) {
      currentBall.kick();
    }
  };

  return self;
}
