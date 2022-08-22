class Asteroid {
	constructor(x, y, number) {
		this.x = x;
		this.y = y;
		this.z = 1000;
		this.width = 10;
		this.height = 10;
		this.scale = 0;
		this.speed = 10;
		this.size = 1;
		this.turn = 45;
		this.damage = 0;
		this.randomImgNumber = number;
	}
	draw() {
		imageMode(CENTER);

		// INCREASE SIZE
		if (this.width < 1020) {
			this.width *= 1.003;
			this.height *= 1.003;
			this.z *=0.995 
			console.log(this.z); 
		}

		// Change Inicial Width and Height

		// ROTATION
		angleMode(DEGREES);
		translate(game.north + this.x, game.horizont + this.y);

		rotate(this.turn);

		image(
			game.asteroidImgs[this.randomImgNumber].src,
			0,
			0,
			this.width,
			this.height
		);

		rotate(360 - this.turn);

		this.turn += 0.2;
		imageMode(CORNER);
		translate(-game.north - this.x, -game.horizont - this.y);
	}
}
