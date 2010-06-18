
function expectKickedBallToBeFull(ballToKick) {
  ballToKick.kick();
  ballToKick.kick();
  ballToKick.kick();

  expect(ballToKick.isFull()).toBe(true);
}

function expectWellUsedBallNotToBeFull(ballToKick, game) {
  game.useBall(ballToKick);
  game.play();

  expect(ballToKick.isFull()).toBe(false);
}


describe("SoccerBall - step 3", function () {
  var ball, game;

  beforeEach(function() {
    game = new Game();
    ball = new SoccerBall();
    ball.inflate();
  });

  it("should be full after inflating", function() {
    expect(ball.isFull()).toBe(true);
  });

  it("should remain full after a few kicks", function() {
    expectKickedBallToBeFull(ball);
  });

  it("should need inflating after playing a game", function() {
    expectWellUsedBallNotToBeFull(ball, game);
  });

});

describe("PlaygroundBall - step 3", function () {
  var ball, game;

  beforeEach(function() {
    game = new Game();
    ball = new PlaygroundBall();
    ball.inflate();
  });

  it("should smell, well like elementary school", function() {
    expect(ball.smell()).toEqual('Nostalgic');
  });

  it("should be full after inflating", function() {
    expect(ball.isFull()).toBe(true);
  });

  it("should remain full after a few kicks", function() {
    expectKickedBallToBeFull(ball);
  });

  it("should need inflating after playing a game", function() {
    expectWellUsedBallNotToBeFull(ball, game);
  });

});
