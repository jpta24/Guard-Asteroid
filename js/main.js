const game = new Game();
let font,
	fontsize = 40;

let button;
let button2;

function preload() {
	font = loadFont('../assets/fonts/BattleStar-K7dl7.ttf');
	game.preload();
}

function setup() {
	createCanvas(1000, 500);
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);
	game.setup()

}

function draw() {
	game.draw();
	// if (game.player.damage === 2) {
	// 	this.button.position(-100, -100);
	// 	button2.position(620, 455);
	// 	game.player.draw();
		
	// 	//DISPLAY SCORE
	// 	fill(0, 255, 255);
	// 	textSize(60);
	// 	text(game.player.score, 502, 250);
	// }
}

function keyPressed() {
	if (
		keyCode === 32 &&
		game.ammo.isAmmoReloading === false &&
		game.ammo.ammo > 0
	) {
		game.frameCount = frameCount;
		game.ammo.isAmmoReloading = true;
		game.ammo.ammo--;
		game.ammo.ammoFrameCount = frameCount;
	}

}
