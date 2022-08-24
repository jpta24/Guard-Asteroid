class Player {
	constructor() {
		this.damage = 0;
		this.score = 0;
	}

	draw() {
		let imgPanel = game.playerImg[0];
		if (this.damage === 1) {
			imgPanel = game.playerImg[3];
		}
		if (this.damage === 2) {
			imgPanel = game.playerImg[5];
		}
		if (game.isStarted === false) {
			imgPanel = game.playerImg[6];
		}
		image(imgPanel.src, -10, -10, width + 21, height + 22);
		if (this.damage !== 2 && game.isStarted === true) {
			this.radar();
		}
	}

	radar() {
		// ROTATION

		// CHANGE DEGREE for rotation
		let imgRadar = game.playerImg[1];
		angleMode(DEGREES);
		imageMode(CENTER);
		translate(500, 442);

		rotate((-game.north / 10 ));

		image(imgRadar.src, 0, 0, 65, 65);

		rotate((360 + game.north / 10));

		imageMode(CORNER);
		translate(-468, -410);
		for (let i = game.asteroids.length - 1; i >= 0; i--) {
			// //IMAGE IN RADAR
			let degreesForRadar = (game.asteroids[i].x - 500) /10
		
		let xInRadar = Math.sin(degreesForRadar * Math.PI / 180)*0.032*game.asteroids[i].z
		let yInRadar = Math.cos(degreesForRadar * Math.PI / 180)*0.032*game.asteroids[i].z
		fill(color(255, 0, 0))
		stroke(color(255, 145, 145))
		ellipse(468 + xInRadar, 410-yInRadar, 5, 5);
		stroke(color(0, 255, 255))
		fill(color(0, 255, 255))
		ellipse(468 , 410, 4, 4);
		}
	}

	movementX(val) {
		game.north += 2 * val;
	}

	movementY(val) {
		game.horizont += 1 * val;
	}

	fireWeaponRight() {
		image(game.playerImg[2].src, 700, 220, 80, 80);
	}

	fireWeaponLeft() {
		image(game.playerImg[2].src, 220, 220, 80, 80);
	}
}
