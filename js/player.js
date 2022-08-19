class Player {
    constructor(){

    }
    
    draw(){
        let imgPanel = game.playerImg[0]
        image(imgPanel.src, 0, 0, width, height)
    }
}