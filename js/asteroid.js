class Asteroid {
	draw() {
        imageMode(CENTER)
		let imgAst = game.asteroidImgs[0];
		image(imgAst.src,game.north + 500, game.horizont + 200, imgAst.width, imgAst.height);

        // imgAst.width *= 1.003
        // imgAst.height *= 1.003
    //     // console.log(sizeX);
    imageMode(CORNER)

        
	}
}
