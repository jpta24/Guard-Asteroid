class Background {
	draw() {
		let img = game.backgroundImages[0];
		img.x = game.north;
		img.y = game.horizont;

		image(img.src, img.x, img.y - 250, width, height * 2);
		image(img.src, img.x + 1000, img.y - 250, width, height * 2);
		image(img.src, img.x - 1000, img.y - 250, width, height * 2);

		if (game.north <= -width) game.north = 0;
		if (game.north >= 1000) game.north = 0;
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
