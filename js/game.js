class Game {
	constructor() {
		this.background = new Background();
		this.player = new Player();
		this.asteroid = new Asteroid();
		this.backgroundImages;
		this.playerImg;
		this.asteroidImgs;
		this.north = 0;
		this.horizont = 0;
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/sky.png'), x: 0, y: 0, speed: 0 },
			// { src: loadImage('assets/background/panel.png'), x: 0, speed: 1 },
			// { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			// { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			// { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		];
		this.playerImg = [
			{ src: loadImage('assets/background/panel.png') },
			{ src: loadImage('assets/background/radar.png') },
		];
		this.asteroidImgs = [
			{
				src: loadImage('assets/background/Asteroid 1.png'),
				x: 500,
				y: 200,
				z: 1000,
                width: 50,
                height: 50,
                scale: 0,
				speed: 10,
				size: 1,
				turn: 1,
                damage:0
			},
			{
				src: loadImage('assets/background/Asteroid 2.png'),
				x: 500,
				y: 200,
				z: 1000,
				speed: 10,
				size: 1,
				turn: 1,
                damage:0
			},
			{
				src: loadImage('assets/background/Asteroid 3.png'),
				x: 500,
				y: 200,
				z: 1000,
				speed: 10,
				size: 1,
				turn: 1,
                damage:0
			},
			{
				src: loadImage('assets/background/Asteroid 4.png'),
				x: 500,
				y: 200,
				z: 1000,
				speed: 10,
				size: 1,
				turn: 1,
                damage:0
			},
			{
				src: loadImage('assets/background/Asteroid 5.png'),
				x: 500,
				y: 200,
				z: 1000,
				speed: 10,
				size: 1,
				turn: 1,
                damage:0
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
	// checkMouseRight() {
	// 	if (mouseX > 550 && mouseX <= 700) {
	// 		game.player.moveRight(1);
	// 	} else if (mouseX > 700 && 1000) {
	// 		game.player.moveRight(2);
	// 	}
	// }
}
