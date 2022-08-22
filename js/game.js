class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		// CHANGE THE MAX WIDTH AND HEIGHT
		this.asteroidImgs = [];
		/* this.asteroid = new Asteroid(
			Math.floor(Math.random() * 900) + 50,
			Math.floor(Math.random() * 400) + 50
		),this.asteroidImgs[Math.random()*(this.asteroidImgs.length -1)]; */
		// this.asteroid = new Asteroid(500,200,Math.floor(Math.random() * 5))
		this.rocketLeft = new RocketLeft();
		this.rocketRight = new RocketRight()
		this.backgroundImages;
		this.playerImg;
		this.north = 0;
		this.horizont = 0;
		this.rightWeapon = [];
		this.asteroids = [new Asteroid(Math.floor(Math.random() * 900) + 50,
			Math.floor(Math.random() * 400) + 50,Math.floor(Math.random() * 5))]
		this.frameCount;
		this.rocketsImg;
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/sky.png'), x: 0, y: 0, speed: 0 },
			{ src: loadImage('assets/background/Galaxy1.png') },
			// { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			// { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			// { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		];
		this.playerImg = [
			{ src: loadImage('assets/background/panel.png') },
			{ src: loadImage('assets/background/radar.png') },
			{ src: loadImage('../assets/background/Explosion Blue.gif') },
		];
		this.asteroidImgs = [
			{
				src: loadImage('assets/background/Asteroid 1.png'),
			},
			{
				src: loadImage('assets/background/Asteroid 2.png'),
			},
			{
				src: loadImage('assets/background/Asteroid 3.png'),
			},
			{
				src: loadImage('assets/background/Asteroid 4.png'),
			},
			{
				src: loadImage('assets/background/Asteroid 5.png'),
			},
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
		if (frameCount % 3500 === 0) {
			this.asteroids.push(new Asteroid(Math.floor(Math.random() * 900) + 50,
			Math.floor(Math.random() * 400) + 50,Math.floor(Math.random() * 5)))
		}	

		for (let i = this.asteroids.length - 1; i >= 0; i--) {
			this.asteroids[i].draw();
			
		}


		// WEAPON
		if (game.frameCount + 60 > frameCount && game.frameCount > 0) {
			game.rocketLeft.rocketLaunchLeft();
			game.rocketRight.rocketLaunchRight()
		} else {
			game.rocketRight.x1 = 738;
			game.rocketRight.y1 = 270; 
			game.rocketRight.width = 139;
			game.rocketRight.height = 137;

			game.rocketLeft.x1 = 238;
			game.rocketLeft.y1 = 270;
			game.rocketLeft.width = 139;
			game.rocketLeft.height = 137;
			game.frameCount = 0;
		}

		if (game.frameCount + 20 > frameCount && game.frameCount > 0) {
			game.player.fireWeaponRight();
			game.player.fireWeaponLeft();
		}


		// CONTROL PANEL
		this.player.draw();

		// MOVE THE SHIP
		this.checkMouseRight()
		this.checkMouseLeft()
		this.checkMouseUp()
		this.checkMouseDown()
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
	/* keyPressed() { 
		
		
		if (keyCode === 32) {
			this.frameCount = frameCount
			console.log(frameCount);
			game.player.fireWeaponRight()
			console.log('h');
			
		}
	} */
}
