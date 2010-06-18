function PlaygroundBall() {
  var self = this;

  var air = 0;

  self.inflate = function() {
    air = 100;
  };

  self.isFull = function() {
    return air > 90;
  };

  self.kick = function() {
    air = air - 0.1;
  };

  self.smell = function() {
    return 'Nostalgic';
  };

  return self;
}
