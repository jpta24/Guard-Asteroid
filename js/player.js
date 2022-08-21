class Player {
	constructor() {}

	draw() {
		let imgPanel = game.playerImg[0];
		let imgRadar = game.playerImg[1];
		image(imgPanel.src, -10, -10, width + 21, height + 22);
        // this.radar()
		// imageMode(CENTER)

		// rotateZ()
		// image(imgRadar.src, 468, 410, 65, 65)
		// console.log(mouseX, mouseY);
	}

	radar() {
		translate(width / 2, height / 2);
		rotate((PI / 180) * 45);
		imageMode(CENTER);
		image(imgRadar.src, 468, 410, 65, 65);
	}

	movementX(val) {
		game.north += 2 * val;
	}

	movementY(val) {
		game.horizont += 1 * val;
	}
}
