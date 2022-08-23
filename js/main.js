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
	

	let col = color(0,255,255)
	
	button = createButton('RELOAD WEAPONS');
	button.style('font-size', '8px');
	button.style('font-weight', 'bolder');
	button.style('font-family', 'verdana');
	button.style('width', '60px');
	button.style('height', '60px');
	button.style('border-radius', '10px');
	button.style('border-style', 'outset');
	// button.style('justify-content', 'center');
	button.style('background-color', col);
	button.position(560, 470);
	button.mousePressed(function () {
			game.weapon.isWeaponReloading = true;
			game.weapon.weaponFrameCount = frameCount
			game.weapon.isLoadingComplete = true
		});
}

function draw() {
	game.draw();
}

function keyPressed() {
	if (keyCode === 32 && game.ammo.isAmmoReloading === false && game.ammo.ammo > 0) {
		game.frameCount = frameCount;
		game.ammo.isAmmoReloading = true;
		game.ammo.ammo--;
		game.ammo.ammoFrameCount = frameCount
	}

	if (keyCode === 39) {
		game.player.movementX(-10);
	}
	if (keyCode === 37) {
		game.player.movementX(10);
	}
	if (keyCode === 38) {
		game.player.movementY(10);
	}
	if (keyCode === 40) {
		game.player.movementY(-10);
	}
}
