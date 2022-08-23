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
			// this.z *=0.995
			this.z -= 0.648;
		}

		// Change Inicial Width and Height

		// ASTEROID ROTATION
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

	receiveDamage() {
		if (
			this.z - game.rocketRight.z < 25 &&
			this.z - game.rocketRight.z > -25 &&
			game.rocketRight.x - game.rocketRight.width / 2.5 >
				this.x - this.width / 2.5 &&
			game.rocketRight.x - game.rocketRight.width / 2 <
				this.x + this.width / 2.5 &&
			game.rocketRight.y > this.y - this.height / 2.5 &&
			game.rocketRight.y < this.y + this.height / 2.5
		) {
			this.damage++;
			
			game.rocketRightAmmo.isExplosion = true;
			game.rocketRightAmmo.explosionFrameCount = frameCount
			
			game.rocketRightAmmo.explosionX = game.north + game.rocketRight.x
			game.rocketRightAmmo.explosionY = game.horizont + game.rocketRight.y
			game.rocketRightAmmo.explosionH = this.height/2
			game.rocketRightAmmo.explosionW = this.width/2
			
			game.rocketRight.y = -2000;
		}
	}

	
}
