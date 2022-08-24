class Background {
	draw() {
		let img = game.backgroundImages[0];
		img.x = game.north%2000/2; 
		img.y = game.horizont/2;

		image(img.src, img.x, img.y - 250, width, height * 2);
		image(img.src, img.x + 1000, img.y - 250, width, height * 2);
		image(img.src, img.x - 1000, img.y - 250, width, height * 2);

		console.log(game.north);

		if (game.north <= -3600) game.north = 0;
		if (game.north >= 3600) game.north = 0;
		// console.log('north:' + game.north+ ' - img.x:' + img.x) ;
        // Galaxy
		image(
			game.backgroundImages[1].src,
			game.north + 50,
			game.horizont + 50,
			200,
			100
		);
		image(
			game.backgroundImages[1].src,
			game.north + 50 +3600,
			game.horizont + 50,
			200,
			100
		);
		image(
			game.backgroundImages[1].src,
			game.north + 50-3600,
			game.horizont + 50,
			200,
			100
		);
		image(
			game.backgroundImages[2].src,
			game.north + 1850,
			game.horizont + 370,
			150,150
		);
		image(
			game.backgroundImages[2].src,
			game.north + 1850 +3600,
			game.horizont + 370,
			150,150
		);
		image(
			game.backgroundImages[2].src,
			game.north + 1850-3600,
			game.horizont + 370,
			150,150
		);


		
	}
}
