class Asteroid {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.z = 1000;
		this.width = 100;
		this.height = 100;
		this.scale = 0;
		this.speed = 10;
		this.size = 1;
		this.turn = 45;
		this.damage = 0;
	}
	draw() {
		imageMode(CENTER);
		let imgAst = game.asteroidImgs[0];
		
			// INCREASE SIZE
		// this.width *= 1.003
		// this.height *= 1.003

		// ROTATION
		angleMode(DEGREES)
		translate(game.north + this.x, game.horizont + this.y,);
		
		rotate(this.turn)
		image(
			imgAst.src, 
			0,
			0,
			this.width,
			this.height);
		
		rotate(360-this.turn)
		
		this.turn += 0.2
		imageMode(CORNER);
		translate(-game.north -this.x , -game.horizont-this.y);
	}
}
