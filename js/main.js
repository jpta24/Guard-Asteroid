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

	if (keyCode === 39) {
		// move the player to the right
		game.player.movementX(-10);
	}
	if (keyCode === 37) {
		game.player.movementX(10);
	}
	if (keyCode === 38) {
		game.player.movementY(10);
	}
	if (keyCode === 40) {
		// move the player to the right
		game.player.movementY(-10);
	}
}
