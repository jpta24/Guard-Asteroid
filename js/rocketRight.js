class RocketRight {
	constructor() {
		this.x;
		this.y;
		this.width;
		this.height;
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
        // this.z *= 1.0808;
		this.z += 11.225;

        // console.log(this.z);

		imageMode(CORNER);
	}
}
