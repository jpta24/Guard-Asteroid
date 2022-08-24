class Asteroid {
	constructor(x, y, number) {
		this.x = x;
		this.y = y;
		this.z = 1000;
		this.width = 5;
		this.height = 5;
		this.scale = 0;
		this.speed = 10;
		this.size = 1;
		this.turn = 45;
		this.damage = 0;
		this.randomImgNumber = number;
		this.isActive = true;
	}
	draw() {
		// INCREASE SIZE
		if (this.width < 1020) {
			this.width *= 1.003;
			this.height *= 1.003;
			// this.z *=0.995
			this.z -= 0.648;
		}

		imageMode(CENTER);

		// ASTEROID ROTATION

		// ASTEROID 1
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

		imageMode(CORNER);
		translate(-game.north - this.x, -game.horizont - this.y);
		// END ASTEROID 1

		// ASTEROID 2
		imageMode(CENTER);
		angleMode(DEGREES);
		translate(game.north + this.x + 3600, game.horizont + this.y);

		rotate(this.turn);

		image(
			game.asteroidImgs[this.randomImgNumber].src,
			0,
			0,
			this.width,
			this.height
		);

		rotate(360 - this.turn);

		imageMode(CORNER);
		translate(-game.north - this.x - 3600, -game.horizont - this.y);
		// END ASTEROID 2
		// ASTEROID 3
		imageMode(CENTER);

		angleMode(DEGREES);
		translate(game.north + this.x - 3600, game.horizont + this.y);

		rotate(this.turn);

		image(
			game.asteroidImgs[this.randomImgNumber].src,
			0,
			0,
			this.width,
			this.height
		);

		rotate(360 - this.turn);

		imageMode(CORNER);
		translate(-game.north - this.x + 3600, -game.horizont - this.y);
		// END ASTEROID 3

		this.turn += 0.2;

		this.provideDamage();

		// REFERENCE TO SEE TARGET AREA OF THE ASTEROID
		// ellipse(
		// 	game.north + this.x + 3600 - this.width / 3,
		// 	game.horizont + this.y - this.width / 3,
		// 	4,
		// 	4
		// );
		// ellipse(
		// 	game.north + this.x + 3600 + this.width / 3,
		// 	game.horizont + this.y - this.width / 3,
		// 	4,
		// 	4
		// );
		// ellipse(
		// 	game.north + this.x + 3600 - this.width / 3,
		// 	game.horizont + this.y + this.width / 3,
		// 	4,
		// 	4
		// );
		// ellipse(
		// 	game.north + this.x + 3600 + this.width / 3,
		// 	game.horizont + this.y + this.width / 3,
		// 	4,
		// 	4
		// );
		// ellipse(game.north + this.x + 3600, game.horizont + this.y, 4, 4);
	}

	receiveDamage() {
		let targetArea = this.width/3
		
		//ROCKET RIGHT
		if (
			(game.rocketRight.x > game.north + this.x - targetArea &&
				game.rocketRight.x < game.north + this.x + targetArea &&
				game.rocketRight.y > game.horizont + this.y - targetArea &&
				game.rocketRight.y < game.horizont + this.y + targetArea) ||
			(game.rocketRight.x > game.north + this.x  + 3600 - targetArea &&
				game.rocketRight.x < game.north + this.x + 3600 + targetArea  &&
				game.rocketRight.y > game.horizont + this.y - targetArea &&
				game.rocketRight.y < game.horizont + this.y + targetArea) ||
			(game.rocketRight.x > game.north + this.x  - 3600 - targetArea &&
				game.rocketRight.x < game.north + this.x - 3600 + targetArea  &&
				game.rocketRight.y > game.horizont + this.y - targetArea &&
				game.rocketRight.y < game.horizont + this.y + targetArea)
		) {
			this.damage++;

			game.rocketRightAmmo.isExplosion = true;
			game.rocketRightAmmo.explosionFrameCount = frameCount;

			game.rocketRightAmmo.explosionX = game.rocketRight.x;
			game.rocketRightAmmo.explosionY = game.rocketRight.y;
			game.rocketRightAmmo.explosionH = this.height / 2;
			game.rocketRightAmmo.explosionW = this.width / 2;

			game.rocketRight.y = -2000;
		}

		//ROCKET LEFT
		if (
			(game.rocketLeft.x > game.north + this.x - targetArea &&
				game.rocketLeft.x < game.north + this.x + targetArea &&
				game.rocketLeft.y > game.horizont + this.y - targetArea &&
				game.rocketLeft.y < game.horizont + this.y + targetArea) ||
			(game.rocketLeft.x > game.north + this.x  + 3600 - targetArea &&
				game.rocketLeft.x < game.north + this.x + 3600 + targetArea  &&
				game.rocketLeft.y > game.horizont + this.y - targetArea &&
				game.rocketLeft.y < game.horizont + this.y + targetArea) ||
			(game.rocketLeft.x > game.north + this.x  - 3600 - targetArea &&
				game.rocketLeft.x < game.north + this.x - 3600 + targetArea  &&
				game.rocketLeft.y > game.horizont + this.y - targetArea &&
				game.rocketLeft.y < game.horizont + this.y + targetArea)
		) {
			this.damage++;

			game.rocketLeftAmmo.isExplosion = true;
			game.rocketLeftAmmo.explosionFrameCount = frameCount;

			game.rocketLeftAmmo.explosionX = game.rocketLeft.x;
			game.rocketLeftAmmo.explosionY = game.rocketLeft.y;
			game.rocketLeftAmmo.explosionH = this.height / 2;
			game.rocketLeftAmmo.explosionW = this.width / 2;

			game.rocketLeft.y = -2000;
		}
		if (this.damage >= 2) {
			this.isActive = false;
			game.player.score++;
		}
	}

	provideDamage() {
		if (this.z < 10) {
			game.player.damage += 1;
			this.isActive = false;
		}
	}
}
