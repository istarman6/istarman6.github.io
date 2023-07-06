let ellipseX = 300;
let furby;

function preload(){
	furby = loadImage('furby.png')
}

function setup(){

	createCanvas(windowWidth,windowHeight)
	textAlign(CENTER, CENTER);
	background(167, 205, 252);

	for(let i = 0; i < 100; i++){
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
	}
}


function draw(){

	 //if(mouseIsPressed == true){
		//background(167, 205, 252);
		//ellipseX = 800
		//}else{

		//background(200, 180, 200)
		//ellipseX = 300
		//}

	for(let i = 0; i < windowWidth; i =i+10){
		print(i)
		line(i, 0, i, windowHeight)
	}

	for(let i = 0; i < windowWidth; i=i+10){
			line(0, windowHeight/2, windowWidth, i)
	}

	
	textSize(40)
	text('Ivory', 200, 200)

	image(furby, mouseX, mouseY, 100, 100)

	//ellipse(ellipseX, 500, 100, 100)

	print(ellipseX)

}









