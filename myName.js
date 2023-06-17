function preload() {
    backgroundImage = loadImage('images/me_turn.jpg');
}

function setup() {
    const container = document.querySelector('.intro-banner');
    const canvas = createCanvas(container.clientWidth, 400);
    canvas.parent(container);

    backgroundImage.resize(width, height);
  }

function draw() {
    background(backgroundImage);
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(255);

    if (frameCount < 30) {
        text('C', width / 2, height / 2);
    } else if (frameCount < 60) {
        text('CH', width / 2, height / 2);
    } else if (frameCount < 120) {
        text('CHL', width / 2, height / 2);
    } else if (frameCount < 240) {
        text('CHLO', width / 2, height / 2);
    } else if (frameCount < 360) {
        text('CHLOE', width / 2, height / 2);
    } else {
        text('CHLOE STUART', width/2, height/2);
    }

    // static text
    textSize(28);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    text("Hello! My name is", width/2, height/3);
}