//variables for the position and speed of the game object
let xPos
let yPos

let xSpeed = 2
let ySpeed = 2

//game object
let furby

//calculate mouse distance from game object
let mouseDist

//score variable
let score = 0

let startBool = true
let winBool = false

let rotation = 0


function preload(){
	furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	
	xPos = random(15, windowWidth -15)
	yPos = random(15, windowHeight -15)

	imageMode(CENTER)
	textAlign(CENTER)
}


function draw(){
	background(0)
		if(startBool == true){
			start()
		}
		
		if(winBool == true){
			winScreen()
		}

}

function winScreen(){
	background(random(255),random(255),random(255))
	fill(255)
	textSize(40)
	text("You won!!", windowWidth/2, 50)

	rotation++




	push()
	translate(windowWitdh/2,windowHeight/2)
	rotate(radians(rotation))
	image(furby, 0, 0)
	
	pop()

}
function start(){
	fill(255)
	textSize(40)
	text("your score is: " + score, windowWidth/2, 50)
	image(furby, xPos, yPos, 30, 30)

	//update the x and y position every frame
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	//if furby hits edge of screen, reverse speed
	if(xPos >= windowWidth -15 || xPos <= 15){
		xSpeed = xSpeed * -1
	}

	if(yPos >= windowHeight -15 || yPos <= 15){
		ySpeed = ySpeed * -1
	}

	mouseDist = dist(mouseX, mouseY, xPos, yPos)

	if(mouseDist <= 15){
		xPos = random(15, windowWidth -15)
		yPos = random(15, windowHeight -15)
		xSpeed = xSpeed * 1.2
		ySpeed = ySpeed * 1.2
		score++
	}

	if(score == 15){
		startBool = false
		winBool = true

	}
	print(mouseDist)

}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}