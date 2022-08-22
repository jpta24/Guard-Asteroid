class RocketRight {
	constructor() {
		this.x;
		this.y;
		this.width;
		this.height;
	}
	draw() {
		// this.rocketLaunchLeft()
	}

	rocketLaunchRight() {
		imageMode(CENTER);
		image(game.rocketsImg[1].src, this.x, this.y, this.width, this.height);

		// MOVE
		this.x *= 0.997;
		this.y *= 0.99;

		// DECREASE SIZE
		let decreaseLevel = 0.95;
		this.width *= decreaseLevel;
		this.height *= decreaseLevel;
        this.z *= 1.1242;

		console.log(this.z);

		imageMode(CORNER);
	}
}
