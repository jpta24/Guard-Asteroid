class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		// CHANGE THE MAX WIDTH AND HEIGHT
		this.asteroid = new Asteroid(Math.floor(Math.random() * 900 )+50,Math.floor(Math.random() * 400 )+50);
		this.backgroundImages;
		this.playerImg;
		this.asteroidImgs;
		this.north = 0;
		this.horizont = 0;
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
	}

	draw() {
		clear();
		this.background.draw();
		this.asteroid.draw();
		this.player.draw();
		// this.checkMouseRight()
		// this.checkMouseLeft()
		// this.checkMouseUp()
		// this.checkMouseDown()
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
}
