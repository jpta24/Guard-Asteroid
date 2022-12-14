const game = new Game();
let font,
	fontsize = 40;

let btnReloadWeapons;
let btnPlayAgaing;
let btnPlayWithKeyboard;
let btnPlayWithMouse;

let laserAudio;
let explosioAudio;
let crashAudio;
let reloadWeaponAudio;
let reloadAmmoAudio;

function preload() {
	font = loadFont('assets/fonts/BattleStar-K7dl7.ttf');
	
	laserAudio = loadSound('assets/audio/Laser.mp3');
	explosioAudio = loadSound('assets/audio/Explosion Hit.mp3');
	crashAudio = loadSound('assets/audio/Ship Crashing.mp3');
	reloadWeaponAudio = loadSound('assets/audio/reloadWeapon.mp3')
	reloadAmmoAudio = loadSound('assets/audio/reloadAmmo.mp3')
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
		if (!reloadAmmoAudio.isPlaying()) {
			reloadAmmoAudio.play()
		}
	}

	if (keyCode === 13 && game.isStarted === true && game.ammo.isAmmoReloading === false) {
		game.weapon.isWeaponReloading = true;
		game.weapon.weaponFrameCount = frameCount;
		game.weapon.isLoadingComplete = true;
		if (!reloadWeaponAudio.isPlaying()) {
			reloadWeaponAudio.play()
		}
	}

}
