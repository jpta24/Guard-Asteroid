class RocketLeft{
    constructor() {
		this.x;
		this.y;
		this.width;
		this.height;
	}

	rocketLaunchLeft() {
		imageMode(CENTER);
		image(game.rocketsImg[0].src, this.x, this.y, this.width,this.height);
        
		ellipse(game.rocketLeft.x , game.rocketLeft.y , 10, 10)

		// MOVE
        this.x *=1.009;
		this.y *=0.99;

		// DECREASE SIZE
		let decreaseLevel = 0.95;
		this.width *= decreaseLevel;
		this.height *= decreaseLevel;
        // this.z *= 1.0808;
		this.z += 11.225;

        // console.log(this.z);

		imageMode(CORNER);
	}
    _________________
   

	/* rocketLaunchLeft() {
		imageMode(CENTER);
		image(game.rocketsImg[0].src, this.x, this.y, this.width,this.height);

        // MOVE
        this.x *=1.009;
		this.y *=0.99;

        // DECREASE SIZE
        let decreaseLevel = 0.95;
		this.width *=decreaseLevel
		this.height *=decreaseLevel
        // this.z *= 1.1242
        this.z += 11.225;
        

        console.log(this.z);

        imageMode(CORNER);
	} */
}