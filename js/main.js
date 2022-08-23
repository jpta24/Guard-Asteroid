const game = new Game();
let font,
	fontsize = 40;

function preload() {
	font = loadFont('../assets/fonts/BattleStar-K7dl7.ttf');
	game.preload();
}

function setup() {
	createCanvas(1000, 500);
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);
}

function draw() {
	game.draw();
}

function keyPressed() {
	if (keyCode === 32) {
		game.frameCount = frameCount;
		game.isAmmoReloading = true;
		game.ammo--;
		console.log(game.isAmmoReloading + ' - ' + game.ammo);
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
