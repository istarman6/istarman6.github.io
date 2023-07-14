let canvas

let cactusFont
let nightBack
let land
let bird
let flower
let beeflower
let tree 
let hive

let beeDist

let health = 200;
let maxHealth = 100;

let timer = 0
let interval = 2000 //2 seconds

let birdxSpeed = []
let birdySpeed = []
let birdX = []
let birdY = []

let bird2xSpeed = []
let bird2ySpeed = []
let bird2X = []
let bird2Y = []

let bird3xSpeed = []
let bird3ySpeed = []
let bird3X = []
let bird3Y = []

let flowerX = []
let flowerY = []
let flowerxSpeed = [] 
let flowerySpeed = []

let flower2X = []
let flower2Y = []
let flower2xSpeed = [] 
let flower2ySpeed = []

let flower3X = []
let flower3Y = []
let flower3xSpeed = [] 
let flower3ySpeed = []

let x = []
let y = []

let beeX
let beeY

let homeScreenBool = true
let levelOneBool = false
let levelTwoBool = false 
let levelThreeBool = false 
let winScreenBool = false
let instructionsBool = false
let deathBool = false
let transition1Bool = false
let transition2Bool = false
let transition3Bool = false

let i = []


function preload(){
	cactusFont = loadFont('Cactus.ttf')
	land = loadImage('background.jpg')
	bird = loadImage('birdEnemy.png')
	bee = loadImage('bee.png')
	flower = loadImage('flower.png')
	nightBack = loadImage('nightBack.png')
	tree = loadImage('tree.png')
	hive = loadImage('beeHive.png')
}

function setup(){
	
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)
	textAlign(CENTER)
	rectMode(CENTER)
	
	for(let i =0; i < 20; i++){
		birdX.push(random(15, windowWidth-15))
		birdY.push(random(15, windowHeight-15))
		birdxSpeed.push(random(2,5))
		birdySpeed.push(random(2,5))
	}

	for(let i =0; i < 25; i++){
		bird2X.push(random(15, windowWidth-15))
		bird2Y.push(random(15, windowHeight-15))
		bird2xSpeed.push(random(3,7))
		bird2ySpeed.push(random(3,7))
	}

	for(let i =0; i < 35; i++){
		bird3X.push(random(15, windowWidth-15))
		bird3Y.push(random(15, windowHeight-15))
		bird3xSpeed.push(random(4,8))
		bird3ySpeed.push(random(4,8))
	}

	for(let i =0; i < 2; i++){
		flowerX.push(random(15, windowWidth-15))
		flowerY.push(random(15, windowHeight-15))
		flowerxSpeed.push(random(2,5))
		flowerySpeed.push(random(2,5))
	}

	for(let i =0; i < 3; i++){
		flower2X.push(random(15, windowWidth-15))
		flower2Y.push(random(15, windowHeight-15))
		flower2xSpeed.push(random(3,6))
		flower2ySpeed.push(random(3,6))
	}

	for(let i =0; i < 4; i++){
		flower3X.push(random(15, windowWidth-15))
		flower3Y.push(random(15, windowHeight-15))
		flower3xSpeed.push(random(4,7))
		flower3ySpeed.push(random(4, 7))
	}

		beeX = windowWidth/2
		beeY = windowHeight/2
}

function draw(){

	if(instructionsBool == true){
		instructions()}

	if(homeScreenBool == true){
		home()}

	if(levelOneBool == true){
		levelOne()}

	if(levelTwoBool == true){
		levelTwo()}	

	if(levelThreeBool == true){
		levelThree()}

	if(winScreenBool == true){
		winScreen()}

	if(deathBool == true){
		death()}

	if(transition1Bool == true){
		transition1()}

	if(transition2Bool == true){
		transition2()}

	if(transition3Bool == true){
		transition3()}
}
	
function keyPressed(){
	if(key === ' '){
		if(homeScreenBool == true){
			levelOneBool = true
			homeScreenBool = false
		 	return false
		}

		if(transition1Bool == true){
			transition1Bool = false
			levelTwoBool = true
			return false
		}

		if(transition2Bool == true){
			transition2Bool = false
			levelThreeBool = true 
			return false
		}

		if(winScreenBool == true){
			winScreenBool = false 
			homeScreenBool = true 
			return false
		}
	}

	if(key === 'i'){
		instructionsBool = true

		homeScreenBool = false
	}
	if(key === 'l'){
		instructionsBool = false
		
		homeScreenBool = true
	}
	if(key === 'q'){
        homeScreenBool = true

        winScreenBool = false
    }
    if(key === 'p'){
    	homeScreenBool = true

    	deathBool = false
    }
}

function instructions(){
	imageMode(CORNERS)
	background(land)
	textFont(cactusFont)
    fill(250)
    textSize(30)
    text("How To Play:", 300, 100)
    textSize(20)
    text("Use the arrow keys to keep Mr.Bee safe from the birds.", 432, 150)
    text("Survive the birds at each level to get Mr.Bee home.", 410, 200)
    text("You have a health bar, so make sure to avoid enemies or you will die.", 490, 250)
    text("If you see a flower, collect it! It will heal you a little.", 420, 300)
    text("Have fun!", 350, 350)
    textSize(15)
    text("Press L to return back to home screen", 350, 425)
}

function home(){
	health = 200
	imageMode(CORNERS)
	background(land)
	fill(248, 250, 127)
	textSize(100)
	textFont(cactusFont)
	text("Buzzing Bee", 300, 200)
	noStroke()
	fill(0)
	textSize(20)
	text("By: Ivory Starman", 500, 250)
	fill(255, 255, 255);
	strokeWeight(4);
	stroke(50);
	textSize(20);
	text("Press The Space Bar To Start", windowWidth/2, 460);
	textSize(15);
	text("Press I for instructions", windowWidth/2, 480)
}

function levelOne(){
	imageMode(CORNERS)
	background(land)
	fill(0)
    textSize(20)
    textFont(cactusFont)
    text("Last until you can escape the birds!", 200, 50)

	//timer
 	text("your time is: " + timer, windowWidth/2, 50);
    if (frameCount % 60 == 0 && timer < 15) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	timer ++;
  	}
  	if (timer == 15) {
    	transition1Bool = true 
    	levelOneBool = false 
  	}
   
    //bee
	noStroke()
		imageMode(CENTER)
	image(bee, beeX, beeY, 60, 40)

	for(let i = 0; i < birdX.length; i++){
        image(bird, birdX[i], birdY[i], 50, 50)

        birdX[i] = birdX[i] + birdxSpeed[i]
    	birdY[i] = birdY[i] + birdySpeed[i]

    //if bird hits edge of screen, reverse speed    
    if(birdX[i] >= windowWidth -15 || birdX[i] <= 15){
		birdxSpeed[i] = birdxSpeed[i] * -1
	}

	if(birdY[i] >= windowHeight -15 || birdY[i] <= 15){
		birdySpeed[i] = birdySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, birdX[i], birdY[i])

		if(beeDist < 25){
			birdX[i] = random(15, windowWidth-15)
			birdY[i] = random(15, windowHeight-15)
			health = health - 20
		}
    }
    //flower code
	for(let i = 0; i < flowerX.length; i++){
        image(flower, flowerX[i], flowerY[i], 50, 50)

        flowerX[i] = flowerX[i] + flowerxSpeed[i]
    	flowerY[i] = flowerY[i] + flowerySpeed[i]

    //if flower hits edge of screen, reverse speed    
    if(flowerX[i] >= windowWidth -15 || flowerX[i] <= 15){
		flowerxSpeed[i] = flowerxSpeed[i] * -1
	}

	if(flowerY[i] >= windowHeight -15 || flowerY[i] <= 15){
		flowerySpeed[i] = flowerySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, flowerX[i], flowerY[i])

		if(beeDist < 25){
			flowerX.splice(i, 1)
			flowerY.splice(i, 1)
			health = health + 40
		}
    }


    if(health == 0){
		levelOneBool = false;
		deathBool = true
    }
    
    stroke(0)
    strokeWeight(4)
    noFill()
    
    noStroke()
    fill(255, 0, 0)
    rect(150, 20, health, 20)

	//bee movement
    if(keyIsDown(UP_ARROW)){
			beeY -= 5;}
			//will go up if pressed 
	if(keyIsDown(DOWN_ARROW)){
			beeY += 5;}
			//will go down if pressed
	if(keyIsDown(LEFT_ARROW)){
			beeX -= 5;}
			//will do left if pressed
	if(keyIsDown(RIGHT_ARROW)){
			beeX += 5;}
			//will go right if pressed

	if(beeX < 0){
		beeX += 5}

	if(beeX >= windowWidth -30){
		beeX -= 1}

	if(beeY < 0){
		beeY += 10}

	if(beeY >= windowHeight){
		beeY -= 50}
}

function transition1(){
	timer = 0
	imageMode(CORNERS)
	background(land)
	fill(255)
	strokeWeight(4);
	stroke(50)
	textFont(cactusFont)
	text("Good Job, You Passed Level 1!", windowWidth/2, windowHeight/2)
	text("Press Space To Move Onto Level 2!!", windowWidth/2, windowHeight/2 + 50)
}

function levelTwo(){
	imageMode(CORNERS)
	background(land)
	fill(0)
    textSize(20)
    textFont(cactusFont)
    text("Get Mr.Bee home quick!", 200, 50)

	//timer
 	text("your time is: " + timer, windowWidth/2, 50);
    if (frameCount % 60 == 0 && timer < 15) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	timer ++;
  	}
  	if (timer == 15) {
    	transition2Bool = true 
    	levelTwoBool = false 
  	}
   
    //bee
	noStroke()
		imageMode(CENTER)
	image(bee, beeX, beeY, 60, 40)

	for(let i = 0; i < bird2X.length; i++){
        image(bird, bird2X[i], bird2Y[i], 50, 50)

        bird2X[i] = bird2X[i] + bird2xSpeed[i]
    	bird2Y[i] = bird2Y[i] + bird2ySpeed[i]

    //if bird hits edge of screen, reverse speed    
    if(bird2X[i] >= windowWidth -15 || bird2X[i] <= 15){
		bird2xSpeed[i] = bird2xSpeed[i] * -1
	}

	if(bird2Y[i] >= windowHeight -15 || bird2Y[i] <= 15){
		bird2ySpeed[i] = bird2ySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, bird2X[i], bird2Y[i])

		if(beeDist < 25){
			bird2X[i] = random(15, windowWidth-15)
			bird2Y[i] = random(15, windowHeight-15)
			health = health - 20
		}
    }
    //flower code
	for(let i = 0; i < flower2X.length; i++){
        image(flower, flower2X[i], flower2Y[i], 50, 50)

        flower2X[i] = flower2X[i] + flower2xSpeed[i]
    	flower2Y[i] = flower2Y[i] + flower2ySpeed[i]

    //if flower hits edge of screen, reverse speed    
    if(flower2X[i] >= windowWidth -15 || flower2X[i] <= 15){
		flower2xSpeed[i] = flower2xSpeed[i] * -1
	}

	if(flower2Y[i] >= windowHeight -15 || flower2Y[i] <= 15){
		flower2ySpeed[i] = flower2ySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, flower2X[i], flower2Y[i])

		if(beeDist < 25){
			
			flower2X.splice(i, 1)
			flower2Y.splice(i, 1)
			health = health + 40
		}
    }


    if(health == 0){
		levelTwoBool = false
		deathBool = true
    }
    
    stroke(0)
    strokeWeight(4)
    noFill()
    
    noStroke()
    fill(255, 0, 0)
    rect(150, 20, health, 20)

	//bee movement
    if(keyIsDown(UP_ARROW)){
			beeY -= 5;}
			//will go up if pressed 
	if(keyIsDown(DOWN_ARROW)){
			beeY += 5;}
			//will go down if pressed
	if(keyIsDown(LEFT_ARROW)){
			beeX -= 5;}
			//will do left if pressed
	if(keyIsDown(RIGHT_ARROW)){
			beeX += 5;}
			//will go right if pressed

	if(beeX < 0){
		beeX += 5}

	if(beeX >= windowWidth -30){
		beeX -= 1}

	if(beeY < 0){
		beeY += 10}

	if(beeY >= windowHeight){
		beeY -= 50}
}

function transition2(){
	timer = 0
	imageMode(CORNERS)
	background(land)
	fill(255)
	strokeWeight(4);
	stroke(50)
	textFont(cactusFont)
	text("Good Job, You Passed Level 2!", windowWidth/2, windowHeight/2)
	text("Press Space To Move Onto Level 3!!", windowWidth/2, windowHeight/2 + 50)
}

function levelThree(){
	imageMode(CORNERS)
	background(land)
	fill(0)
    textSize(20)
    textFont(cactusFont)
    text("You're almost to the hive!!", 200, 50)

	//timer
 	text("your time is: " + timer, windowWidth/2, 50);
    if (frameCount % 60 == 0 && timer < 15) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	timer ++;
  	}
  	if (timer == 15) {
    	winScreenBool = true  
    	levelThreeBool = false 
  	}
   
    //bee
	noStroke()
		imageMode(CENTER)
	image(bee, beeX, beeY, 60, 40)

	for(let i = 0; i < bird3X.length; i++){
        image(bird, bird3X[i], bird3Y[i], 50, 50)

        bird3X[i] = bird3X[i] + bird3xSpeed[i]
    	bird3Y[i] = bird3Y[i] + bird3ySpeed[i]

    //if bird hits edge of screen, reverse speed    
    if(bird3X[i] >= windowWidth -15 || bird3X[i] <= 15){
		bird3xSpeed[i] = bird3xSpeed[i] * -1
	}

	if(bird3Y[i] >= windowHeight -15 || bird3Y[i] <= 15){
		bird3ySpeed[i] = bird3ySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, bird3X[i], bird3Y[i])

		if(beeDist < 25){
			bird3X[i] = random(15, windowWidth-15)
			bird3Y[i] = random(15, windowHeight-15)
			health = health - 20
		}
    }
    //flower code
	for(let i = 0; i < flower3X.length; i++){
        image(flower, flower3X[i], flower3Y[i], 50, 50)

        flower3X[i] = flower3X[i] + flower3xSpeed[i]
    	flower3Y[i] = flower3Y[i] + flower3ySpeed[i]

    //if flower hits edge of screen, reverse speed    
    if(flower3X[i] >= windowWidth -15 || flower3X[i] <= 15){
		flower3xSpeed[i] = flower3xSpeed[i] * -1
	}

	if(flower3Y[i] >= windowHeight -15 || flower3Y[i] <= 15){
		flower3ySpeed[i] = flower3ySpeed[i] * -1
	}

		beeDist = dist(beeX, beeY, flower3X[i], flower3Y[i])

		if(beeDist < 25){
			flower3X.splice(i, 1)
			flower3Y.splice(i, 1)
			health = health + 40
		}
    }


    if(health == 0){
		levelThreeBool = false
		deathBool = true
    }
    
    stroke(0)
    strokeWeight(4)
    noFill()
    
    noStroke()
    fill(255, 0, 0)
    rect(150, 20, health, 20)

	//bee movement
    if(keyIsDown(UP_ARROW)){
			beeY -= 5;}
			//will go up if pressed 
	if(keyIsDown(DOWN_ARROW)){
			beeY += 5;}
			//will go down if pressed
	if(keyIsDown(LEFT_ARROW)){
			beeX -= 5;}
			//will do left if pressed
	if(keyIsDown(RIGHT_ARROW)){
			beeX += 5;}
			//will go right if pressed

	if(beeX < 0){
		beeX += 5}

	if(beeX >= windowWidth -30){
		beeX -= 1}

	if(beeY < 0){
		beeY += 10}

	if(beeY >= windowHeight){
		beeY -= 50}
}

function death(){
	timer = 0
	imageMode(CORNERS)
	background(land)
	strokeWeight(4);
	stroke(50)
	textFont(cactusFont)
	textSize(25)
	fill(255)
	text("You Died :(.... but it's ok! Try Again!", windowWidth/2, windowHeight/2)
	text("Press P to go back home", windowWidth/2, windowHeight/2 - 100)
}

function winScreen(){
	imageMode(CORNERS)
	background(land)
	fill(255)
	strokeWeight(4);
	stroke(50)
	textFont(cactusFont)
	text("You've won and safely brought Mr.Bee back home! Congrats!!", windowWidth/2, windowHeight/2)
	text("Press Space To Go Back Home", windowWidth/2, windowHeight/2 + 50)
	imageMode(CENTER)
	image(tree, 1200, 520, 400, 400)
	image(hive, 1150,550, 60, 60)
	image(bee, 1120,550, 60, 40)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}






