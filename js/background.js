class Background {
    draw(){
        let img = game.backgroundImages[0]
        img.x -= 1
        image(img.src, img.x, 0, width, height)
        image(img.src, img.x + width, 0, width, height)
			
			if (img.x <= - width) img.x = 0
        
        let imgPanel = game.backgroundImages[1]
        image(imgPanel.src, 0, 0, width, height)
    }
}