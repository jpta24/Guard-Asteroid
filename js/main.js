const game = new Game();
let font,
	fontsize = 40;

let btnReloadWeapons;
let btnPlayAgaing;
let btnPlayWithKeyboard;
let btnPlayWithMouse;

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

	if (keyCode === 13 && game.isKeyboardEnable === true) {
		game.weapon.isWeaponReloading = true;
		game.weapon.weaponFrameCount = frameCount;
		game.weapon.isLoadingComplete = true;
	}

}
