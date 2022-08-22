const game = new Game();

function preload() {
	game.preload();
}

function setup() {
	createCanvas(1000, 500);
}

function draw() {
	game.draw();

}

function keyPressed() {
	if (keyCode === 32) {
		game.frameCount = frameCount; 
	}
}
