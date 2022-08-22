class RocketLeft{
   
    constructor() {
        this.x 
        this.y 
        this.z = 1
        this.width 
        this.height
	}
    draw(){
        // this.rocketLaunchLeft()	
    }

	rocketLaunchLeft() {
		imageMode(CENTER);
		image(game.rocketsImg[0].src, this.x, this.y, this.width,this.height);

        // MOVE
        this.x *=1.009;
		this.y *=0.99;

        // DECREASE SIZE
        let decreaseLevel = 0.95;
		this.width *=decreaseLevel
		this.height *=decreaseLevel
        this.z *= 1.1242

        imageMode(CORNER);
	}
}