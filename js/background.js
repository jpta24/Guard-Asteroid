class Background {
	draw() {
		let img = game.backgroundImages[0];
		img.x = game.north/2;
		img.y = game.horizont/2;

		image(img.src, img.x, img.y - 250, width, height * 2);
		image(img.src, img.x + 1000, img.y - 250, width, height * 2);
		image(img.src, img.x - 1000, img.y - 250, width, height * 2);

		if (game.north <= -2*width) game.north = 0;
		if (game.north >= 2000) game.north = 0;
		console.log(game.north );
        // Galaxy
		image(
			game.backgroundImages[1].src,
			game.north + 50,
			game.horizont + 50,
			200,
			100
		);

		
	}
}
