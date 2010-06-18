
function describeAirIntegrityOf(context) {

  it("should be full after inflating", function() {
    expect(context.ball.isFull()).toBe(true);
  });

  it("should remain full after a few kicks", function() {
    context.ball.kick();
    context.ball.kick();
    context.ball.kick();

    expect(context.ball.isFull()).toBe(true);
  });

  it("should need inflating after playing a game", function() {
    context.game.useBall(context.ball);
    context.game.play();

    expect(context.ball.isFull()).toBe(false);
  });

}

describe("SoccerBall - step 4", function () {
  var ball, game;
  var sharedDependencies = {};

  beforeEach(function() {
    game = new Game();
    ball = new SoccerBall();
    ball.inflate();

    sharedDependencies.ball = ball;
    sharedDependencies.game = game;
  });

  describeAirIntegrityOf(sharedDependencies);
});

describe("PlaygroundBall - step 4", function () {
  var ball, game;
  var sharedDependencies = {};

  beforeEach(function() {
    game = new Game();
    ball = new PlaygroundBall();
    ball.inflate();

    sharedDependencies.ball = ball;
    sharedDependencies.game = game;
  });

  it("should smell, well like elementary school", function() {
    expect(ball.smell()).toEqual('Nostalgic');
  });

  describeAirIntegrityOf(sharedDependencies);
});
