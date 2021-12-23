var canvas, background, database;
var form, game, player;
var gameState = 0;
var playerCount=0;


function setup() {
  canvas = createCanvas(400,400);
  database = firebase.database();
}

function draw() {
  background(255);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}