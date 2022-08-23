class Player {
	constructor() {
		this.damage = 0
		this.score = 0
		
	}

	draw() {
		let imgPanel = game.playerImg[0];
		if (this.damage === 1 ) {
			imgPanel = game.playerImg[3]
		}
		image(imgPanel.src, -10, -10, width + 21, height + 22);
		this.radar();

	}

	radar() {
		// ROTATION

		// CHANGE DEGREE for rotation
		let imgRadar = game.playerImg[1];
		angleMode(DEGREES);
		imageMode(CENTER);
		translate(500, 442);

		rotate(-game.north / 10);

		image(imgRadar.src, 0, 0, 65, 65);

		rotate(360 + game.north / 10);

		imageMode(CORNER);
		translate(-468, -410);
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
