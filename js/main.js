const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 500)
}

function draw() {
	game.draw()
}

// function mouseMoved() {
// 	if (mouseX >550 && mouseX<=700) {
// 		game.player.moveRight(1)
// 	}
//     else if(mouseX >700 && 1000){
//         game.player.moveRight(2)
//     }
// }