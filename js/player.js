class Player {
	constructor() {}

	draw() {
		let imgPanel = game.playerImg[0];
		let imgRadar = game.playerImg[1];
		image(imgPanel.src, -10, -10, width + 21, height + 22);

		// BlueFire on Weapon
		// image(game.playerImg[2].src,700,225,80,80)

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
		console.log('her');

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
}
