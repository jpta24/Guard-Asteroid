class RocketLeft{
   
    constructor() {
        this.x1 
        this.y1 
        this.width 
        this.height
	}
    draw(){
        // this.rocketLaunchLeft()	
    }

	rocketLaunchLeft() {
		imageMode(CENTER);
		image(game.rocketsImg[0].src, this.x1, this.y1, this.width,this.height);

        // MOVE
        this.x1 *=1.009;
		this.y1 *=0.99;

        // DECREASE SIZE
        let decreaseLevel = 0.95;
		this.width *=decreaseLevel
		this.height *=decreaseLevel

        imageMode(CORNER);
	}
}