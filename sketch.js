var font;
var vehicles = [];
var bg;


function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  bg = loadImage('17.jpg')
  createCanvas(700, 600);
  // background(51);

  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('Mayank Jha', 100, 400, 100, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
background(bg);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
