let stage = 0
let winner
let loser
let y = 300

let cactusFont
//let background

function preload(){
	cactusFont = loadFont('Cactus.ttf')
	//background = loadImage('backgorund.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER)
	rectMode(CENTER)
	imageMode(CENTER)
}


function draw(){
	if(keyIsPressed){
		if(keyCode === UP_ARROW){
			y--;
			//will go up if pressed 
		}else if(keyCode === DOWN_ARROW){
			y++;
			//will go down if pressed
		}
    }
	//stage 0 = start screen
	//stage 1 = game screen
	//stage 2 = win screen
	if(stage == 0){
		startScreen();
	}

	if(stage == 1){
		gameScreen()
	}

	if(stage == 2){
		winScreen()
	}	

	if(stage == 3){
		loseScreen()
	}

	if(winner == true){
		stage = 2; //run win screen
	}

	if(loser == true){
		stage = 3; //run lose screen
	}

}

function startScreen(){
	background(167, 205, 252)
	noStroke()
	//sun
        fill(245, 242, 81)
        ellipse(700,100,175,175)
    //ground
        fill(86, 153, 108)
        rect(0, 1000, 5000, 1000)

	fill(248, 250, 127)
	textSize(100)
	textFont(cactusFont)
	text("Buzzing Bee", 300, 200)
	fill(0)
	textSize(20)
	text("By: Ivory Starman", 500, 250)
	

	fill(100,150,100)
	rect(windowWidth/2, windowHeight/2+100, 200, 50, 20) //draw button


	textSize(15)
	fill(50, 100, 200)
	text("Click to Start", windowWidth/2, windowHeight/2+100)

	if(mouseIsPressed == true){
		stage = 1;
	}

}

function gameScreen(){
	background(167, 205, 252)
	noStroke()
	//sun
        fill(245, 242, 81)
        ellipse(700,100,175,175)
    //ground
        fill(86, 153, 108)
        rect(0, 1000, 5000, 1000)
    //bee
		fill(252, 234, 71)
        ellipse(500, y, 45, 25)
        fill(0)
        ellipse(485, y, 3, 20)
        ellipse(500, y, 5, 25)
        ellipse(515, y, 3, 20)
    //wings
        fill(255)
        ellipse(500, y-20, 20, 20)
}

function winScreen(){

}








