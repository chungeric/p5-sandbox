let capture = false;
let capturer = new CCapture({
  format: "gif",
  workersPath: "js/",
  verbose: true,
  framerate: 60,
});

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (capture && frameCount === 1) {
    capturer.start();
  }

  /* start drawing stuff */

  background(220);
  circle(frameCount, height / 2, 20);

  /* finish drawing stuff */

  if (capture) {
    capturer.capture(canvas);
  }
}
