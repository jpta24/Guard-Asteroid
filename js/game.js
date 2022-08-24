class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		// CHANGE THE MAX WIDTH AND HEIGHT
		this.asteroidImgs = [];
		this.rocketLeft = new RocketLeft();
		this.rocketRight = new RocketRight();
		this.backgroundImages;
		this.playerImg;
		this.north = 0;
		this.horizont = 0;
		this.rightWeapon = [];
		// FUNCIONA PERO LO CAMBIO A POSICION FIJA PARA EVALUAR LA BALA
		// this.asteroids = [
		// 	new Asteroid(
		// 		Math.floor(Math.random() * 900) + 50,
		// 		Math.floor(Math.random() * 400) + 50,
		// 		Math.floor(Math.random() * 5)
		// 	),
		// ];
		this.asteroids = [new Asteroid(408, 150, Math.floor(Math.random() * 5))];
		this.frameCount;
		this.rocketsImg;
		this.rocketRightAmmo = {
			isExplosion: false,
			explosionFrameCount: 0,
			explosionX: 0,
			explosionY: 0,
			explosionW: 0,
			explosionH: 0,
		};
		this.rocketLeftAmmo = {
			isExplosion: false,
			explosionFrameCount: 0,
			explosionX: 0,
			explosionY: 0,
			explosionW: 0,
			explosionH: 0,
		};
		this.ammo = {
			ammoFrameCount: 0,
			isAmmoReloading: false,
			ammo: 5,
			timerFixer: 0,
		};
		this.weapon = {
			weaponFrameCount: 0,
			isWeaponReloading: false,
			isLoadingComplete: false,
		};
	}

	setup() {
		let col = color(0, 255, 255);

		button = createButton('RELOAD WEAPONS');
		button.style('font-size', '8px');
		button.style('font-weight', 'bolder');
		button.style('font-family', 'verdana');
		button.style('width', '60px');
		button.style('height', '60px');
		button.style('border-radius', '10px');
		button.style('border-style', 'outset');
		button.style('background-color', col);
		button.mousePressed(function () {
			game.weapon.isWeaponReloading = true;
			game.weapon.weaponFrameCount = frameCount;
			game.weapon.isLoadingComplete = true;
		});

		button2 = createButton('PLAY AGAIN');
		button2.style('font-size', '20px');
		button2.style('font-weight', 'bolder');
		button2.style('font-family', 'verdana');
		button2.style('width', '120px');
		button2.style('height', '80px');
		button2.style('border-radius', '10px');
		button2.style('border-style', 'outset');
		button2.style('background-color', color(0, 255, 255));
		button2.mousePressed(function () {
			game.player.damage = 0;
			game.ammo.ammo = 5;
			game.asteroids = [
				new Asteroid(
					Math.floor(Math.random() * 900) + 50,
					Math.floor(Math.random() * 400) + 50,
					Math.floor(Math.random() * 5)
				),
			];
		});
		// button.position(560, 470);
		// button.position(563, 470);
		// // button.position(567, 470);
		// button2.position(-100, -100);
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/sky.png'), x: 0, y: 0, speed: 0 },
			{ src: loadImage('assets/background/Galaxy1.png') },
		];
		this.playerImg = [
			{ src: loadImage('assets/background/panel.png') },
			{ src: loadImage('assets/background/radar.png') },
			{ src: loadImage('../assets/background/Explosion Blue.gif') },
			{ src: loadImage('../assets/background/panel damaged.png') },
			{ src: loadImage('../assets/background/rocket panel.png') },
			{ src: loadImage('../assets/background/Game over.png') },
		];
		this.asteroidImgs = [
			{ src: loadImage('assets/background/Asteroid 1.png') },
			{ src: loadImage('assets/background/Asteroid 2.png') },
			{ src: loadImage('assets/background/Asteroid 3.png') },
			{ src: loadImage('assets/background/Asteroid 4.png') },
			{ src: loadImage('assets/background/Asteroid 5.png') },
			{ src: loadImage('../assets/background/Explosion Fire.gif') },
		];
		this.rocketsImg = [
			{ src: loadImage('../assets/background/rocket left.png') },
			{ src: loadImage('../assets/background/rocket right.png') },
			{ src: loadImage('../assets/background/blue propulsion left.gif') },
			{ src: loadImage('../assets/background/blue propulsion right.gif') },
		];
	}

	draw() {
		clear();
		this.background.draw();

		// ASTEROID
		// CHANGE FREQUENCY
		if (game.player.damage < 2) {
			// button.position(560, 470);
			button.position(563, 470);
			// button.position(567, 470);
			button2.position(-100, -100);
			if (frameCount % 900 === 0) {
				// FUNCIONA PERO LO CAMBIO A POSICION FIJA PARA EVALUAR LA BALA
				this.asteroids.push(
					new Asteroid(
						Math.floor(Math.random() * 900) + 50,
						Math.floor(Math.random() * 400) + 50,
						Math.floor(Math.random() * 5)
					)
				);
				// SOLO PARA PRUEBAS
				// this.asteroids.push(
				// 	new Asteroid(500, 200, Math.floor(Math.random() * 5))
				// );
			}

			for (let i = this.asteroids.length - 1; i >= 0; i--) {
				this.asteroids[i].draw();
			}
			this.asteroids = this.asteroids.filter((asteroid) => {
				if (asteroid.isActive) {
					return true;
				} else {
					return false;
				}
			});
			//ASTEROID EXPLOSION
			// ROCKET RIGHT
			if (
				this.rocketRightAmmo.isExplosion === true &&
				this.rocketRightAmmo.explosionFrameCount + 50 > frameCount
			) {
				//EXPLOSION RIGHT AMMO
				imageMode(CENTER);
				translate(
					this.rocketRightAmmo.explosionX,
					this.rocketRightAmmo.explosionY
				);

				image(
					this.asteroidImgs[5].src,
					0,
					0,
					this.rocketRightAmmo.explosionW,
					this.rocketRightAmmo.explosionH
				);

				imageMode(CORNER);
				translate(
					 - this.rocketRightAmmo.explosionX,
					 - this.rocketRightAmmo.explosionY
				);
			} else {
				this.rocketRightAmmo.isExplosion = false;
				this.rocketRightAmmo.explosionFrameCount = 0;
			}

			//ROCKET LEFT
			if (
				this.rocketLeftAmmo.isExplosion === true &&
				this.rocketLeftAmmo.explosionFrameCount + 50 > frameCount
			) {
				//EXPLOSION RIGHT AMMO
				imageMode(CENTER);
				translate(
					this.rocketLeftAmmo.explosionX,
					this.rocketLeftAmmo.explosionY
				);

				image(
					this.asteroidImgs[5].src,
					0,
					0,
					this.rocketLeftAmmo.explosionW,
					this.rocketLeftAmmo.explosionH
				);

				imageMode(CORNER);
				translate(
					 - this.rocketLeftAmmo.explosionX,
					- this.rocketLeftAmmo.explosionY
				);
			} else {
				this.rocketLeftAmmo.isExplosion = false;
				this.rocketLeftAmmo.explosionFrameCount = 0;
			}

			// WEAPON
			if (game.frameCount + 90 > frameCount && game.frameCount > 0) {
				game.rocketLeft.rocketLaunchLeft();
				game.rocketRight.rocketLaunchRight();
				for (let i = this.asteroids.length - 1; i >= 0; i--) {
					this.asteroids[i].receiveDamage();
				}
			} else {
				game.rocketRight.x = 738;
				game.rocketRight.y = 270;
				game.rocketRight.width = 139;
				game.rocketRight.height = 137;
				game.rocketRight.z = 1;

				game.rocketLeft.x = 238;
				game.rocketLeft.y = 270;
				game.rocketLeft.width = 139;
				game.rocketLeft.height = 137;
				game.rocketLeft.z = 1;
				game.frameCount = 0;
			}

			if (game.frameCount + 20 > frameCount && game.frameCount > 0) {
				game.player.fireWeaponRight();
				game.player.fireWeaponLeft();
			}

			// CONTROL PANEL
			this.player.draw();

			//DISPLAY SCORE
			fill(0, 255, 255);
			textSize(40);
			text(game.player.score, 555, 415);

			//WEAPON RELOADING
			if (
				this.weapon.isWeaponReloading === true &&
				this.weapon.weaponFrameCount + 300 > frameCount
			) {
				this.ammo.timerFixer = (frameCount - this.weapon.weaponFrameCount) / 2;
				displayReloading();
			} else {
				this.weapon.isWeaponReloading = false;
				this.weapon.weaponFrameCount = 0;
			}

			if (
				this.weapon.isWeaponReloading === false &&
				this.weapon.isLoadingComplete === true
			) {
				this.ammo.ammo = 5;
				this.weapon.isLoadingComplete = false;
			}

			// TIMER RELOADING AMMO
			if (
				this.ammo.isAmmoReloading === true &&
				this.ammo.ammoFrameCount + 150 > frameCount
			) {
				this.ammo.timerFixer = frameCount - this.ammo.ammoFrameCount;
				displayReloading();
			} else {
				this.ammo.isAmmoReloading = false;
				this.ammo.ammoFrameCount = 0;
			}

			if (
				this.ammo.isAmmoReloading === false &&
				this.weapon.isWeaponReloading === false
			) {
				this.ammo.timerFixer = 0;
			}

			strokeWeight(10);
			stroke(0, 255, 255);
			line(175, 430, 325 - this.ammo.timerFixer, 430);
			line(610 + this.ammo.timerFixer, 430, 760, 430);
			strokeWeight(1);

			// DISPLAY AMMO
			imageMode(CENTER);
			let displayAmmos = (x1, dist) => {
				for (let i = 0; i < this.ammo.ammo; i++) {
					image(this.playerImg[4].src, x1 + dist * i, 400, 17, 33);
				}
			};
			displayAmmos(750, -30);
			displayAmmos(185, 30);

			imageMode(CORNER);

			function displayReloading() {
				textSize(12);
				fill(255, 255, 255);
				text('RELOADING', 632, 372);
				text('RELOADING', 305, 372);
				textSize(40);
			}

			// MOVE THE SHIP
			//MOUSE
			// this.checkMouseRight();
			// this.checkMouseLeft();
			// this.checkMouseUp();
			// this.checkMouseDown();

			//KEYBOARD
			this.keyboardMove();
		} else {
			game.player.draw();

			button.position(-100, -100);
			button2.position(620, 455);

			//DISPLAY SCORE
			fill(0, 255, 255);
			textSize(60);
			text(game.player.score, 502, 250);
		}
	}

	checkMouseRight() {
		if (mouseX > 550 && mouseX <= 700) {
			game.player.movementX(-1);
		} else if (mouseX > 700 && mouseX <= 1000) {
			game.player.movementX(-2);
		}
	}
	checkMouseLeft() {
		if (mouseX < 450 && mouseX >= 300) {
			game.player.movementX(1);
		} else if (mouseX >= 0 && mouseX < 300) {
			game.player.movementX(2);
		}
	}
	checkMouseUp() {
		if (mouseY < 170 && game.horizont < 250) {
			game.player.movementY(1);
		}
	}

	checkMouseDown() {
		if (mouseY > 250 && game.horizont > -250) {
			game.player.movementY(-1);
		}
	}

	keyboardMove() {
		if (keyIsDown(UP_ARROW) && game.horizont < 250) {
			game.player.movementY(2);
		}
		if (keyIsDown(DOWN_ARROW) && game.horizont > -250) {
			game.player.movementY(-2);
		}
		if (keyIsDown(RIGHT_ARROW) ) {
			game.player.movementX(-2);
		}
		if (keyIsDown(LEFT_ARROW) ) {
			game.player.movementX(2);
		}
	}
}
