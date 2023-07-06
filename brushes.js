let furby
let furbyBrushBool = false
let ellipseBrushBool = false


function preload(){
	furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	background(255)
	imageMode(CENTER)
}

function draw(){
	smooth()

	if(ellipseBrushBool == true){
		ellipseBrush()

	}
	
	if(furbyBrushBool == true){
		furbyBrush()

	}
		
}


function furbyBrush(){
if(mouseIsPressed){
		image(furby, mouseX, mouseY, 40, 40)
	}
}

function ellipseBrush(){
if(mouseIsPressed){
		ellipse(mouseX, mouseY, 40, 40)
	}
}

function keyPressed(){
	if(key == 'e'){
		ellipseBrushBool = true;
		furbyBrushBool = false;
	}

	if(key == 'f'){
		ellipseBrushBool = false;
		furbyBrushBool = true;
	}
	if(key == 'c'){
		background(255)
		ellipseBrushBool = false;
		furbyBrushBool = false
	}

	if(key == 's'){
		save('print.png')
	}

}











