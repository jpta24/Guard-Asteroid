class RocketRight{
   
    constructor() {
        this.x1 
        this.y1 
        this.width 
        this.height 
	}
    draw(){
        // this.rocketLaunchLeft()	
    }

	rocketLaunchRight() {
		imageMode(CENTER);
		image(game.rocketsImg[1].src, this.x1, this.y1, this.width,this.height);

        // MOVE
        this.x1 *=0.997 ;
		this.y1 *=0.99;

        // DECREASE SIZE
        let decreaseLevel = 0.95;
		this.width *=decreaseLevel
		this.height *=decreaseLevel

        imageMode(CORNER);
	}
}