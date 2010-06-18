describe("SoccerBall - step 2", function () {
  var ball, game;

  beforeEach(function() {
    ball = new SoccerBall();
    ball.inflate();
  });

  it("should be full after inflating", function() {
    expect(ball.isFull()).toBe(true);
  });

  it("should remain full after a few kicks", function() {
    ball.kick();
    ball.kick();
    ball.kick();

    expect(ball.isFull()).toBe(true);
  });

  it("should need inflating after playing a game", function() {
    var game = new Game();

    game.useBall(ball);
    game.play();

    expect(ball.isFull()).toBe(false);
  });
});
