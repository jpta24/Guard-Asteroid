class Game {
	constructor(){
        this.background = new Background
        this.player = new Player
		this.backgroundImages
        this.playerImg 

    }

    preload() {
        this.backgroundImages = [
			{ src: loadImage('assets/background/sky.png'), x: 0, speed: 0, },
			// { src: loadImage('assets/background/panel.png'), x: 0, speed: 1 },
			// { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			// { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			// { src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		]
        this.playerImg = [
            { src: loadImage('assets/background/panel.png') }
        ]
    }
    
    
    draw() {
        
        clear()
		this.background.draw()
        this.player.draw()
    }

}