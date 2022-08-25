class Background {
	draw() {
		let img = game.backgroundImages[0];
		img.x = game.north%2000/2; 
		img.y = game.horizont/2;

		image(img.src, img.x, img.y - 250, width, height * 2);
		image(img.src, img.x + 1000, img.y - 250, width, height * 2);
		image(img.src, img.x - 1000, img.y - 250, width, height * 2);


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
		//MOON
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
		//PLANET1
		image(
			game.backgroundImages[3].src,
			game.north + 900,
			game.horizont + -20,
			70,70
		);
		image(
			game.backgroundImages[3].src,
			game.north + 900 +3600,
			game.horizont + -20,
			70,70
		);
		image(
			game.backgroundImages[3].src,
			game.north + 900-3600,
			game.horizont + -20,
			70,70
		);
		//PLANET2
		image(
			game.backgroundImages[4].src,
			game.north + 2700,
			game.horizont + 100,
			50,50
		);
		image(
			game.backgroundImages[4].src,
			game.north + 2700 +3600,
			game.horizont + 100,
			50,50
		);
		image(
			game.backgroundImages[4].src,
			game.north + 2700-3600,
			game.horizont + 100,
			50,50
		);
		//PLANET3
		image(
			game.backgroundImages[5].src,
			game.north + 3100,
			game.horizont + 200,
			130,130
		);
		image(
			game.backgroundImages[5].src,
			game.north + 3100 +3600,
			game.horizont + 200,
			130,130
		);
		image(
			game.backgroundImages[5].src,
			game.north + 3100-3600,
			game.horizont + 200,
			130,130
		);
		//PLANET4
		image(
			game.backgroundImages[6].src,
			game.north + 1350,
			game.horizont + -100,
			100,100
		);
		image(
			game.backgroundImages[6].src,
			game.north + 1350 +3600,
			game.horizont + -100,
			100,100
		);
		image(
			game.backgroundImages[6].src,
			game.north + 1350-3600,
			game.horizont + -100,
			100,100
		);
		//PLANET5
		image(
			game.backgroundImages[7].src,
			game.north + 2250,
			game.horizont + -200,
			90,90
		);
		image(
			game.backgroundImages[7].src,
			game.north + 2250 +3600,
			game.horizont + -200,
			90,90
		);
		image(
			game.backgroundImages[7].src,
			game.north + 2250-3600,
			game.horizont + -200,
			90,90
		);
		//SATELLIT
		image(
			game.backgroundImages[8].src,
			game.north + 450,
			game.horizont + 250,
			100,100
		);
		image(
			game.backgroundImages[8].src,
			game.north + 450 +3600,
			game.horizont + 250,
			100,100
		);
		image(
			game.backgroundImages[8].src,
			game.north + 450-3600,
			game.horizont + 250,
			100,100
		);
		//ROCK1
		image(
			game.backgroundImages[9].src,
			game.north + 1100,
			game.horizont + 500,
			50,25
		);
		image(
			game.backgroundImages[9].src,
			game.north + 1100 +3600,
			game.horizont + 500,
			50,25
		);
		image(
			game.backgroundImages[9].src,
			game.north + 1100-3600,
			game.horizont + 500,
			50,25
		);
		//ROCK2
		image(
			game.backgroundImages[10].src,
			game.north + 2900,
			game.horizont -200,
			40,40
		);
		image(
			game.backgroundImages[10].src,
			game.north + 2900 +3600,
			game.horizont -200,
			40,40
		);
		image(
			game.backgroundImages[10].src,
			game.north + 2900-3600,
			game.horizont -200,
			40,40
		);


		
	}
}
