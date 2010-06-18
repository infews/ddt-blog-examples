describe("SoccerBall - step 1", function () {
  var ball;

  it("should be full after inflating", function() {
    setupBall();
    expect(ball.isFull()).toBe(true);
  });

  it("should remain full after a few kicks", function() {
    setupBall();
    ball.kick();
    expect(ball.isFull()).toBe(true);
  });

  it("should need inflating after playing a game", function() {
    setupBall();
    var game = new Game();
    game.useBall(ball);
    game.play();

    expect(ball.isFull()).toBe(false);
  });

  function setupBall() {
    ball = new SoccerBall();
    ball.inflate();
  }

});
