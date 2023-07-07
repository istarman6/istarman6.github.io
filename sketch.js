let BlueMoon

function preload(){
  BlueMoon = loadImage('BlueMoon.png')
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(20, 52, 105);
}

function draw() {
  if(mouseIsPressed == true){
    background(20, 52, 105);
    image(BlueMoon, 700, 100, 175, 175)
    }else{

    background(167, 205, 252)
        //sun
        fill(245, 242, 81)
        ellipse(700,100,175,175)
        //bee
        fill(252, 234, 71)
        ellipse(500, 300, 45, 25)
        fill(0)
        ellipse(485, 300, 3, 20)
        ellipse(500, 300, 5, 25)
        ellipse(515, 300, 3, 20)
        //wings
        fill(255)
        ellipse(500, 280, 20, 20)
    }

  noStroke()
  fill(86, 153, 108)
  rect(0,500,windowWidth,windowHeight/3)
  
  //stems
  rect(100,420,20,100)
  rect(400,405,20,125)
  
  //flower petals
  fill(100,120,230)
  ellipse(95,400,35,30)
  ellipse(125,403,35,30)
  ellipse(130,425,35,30)
  ellipse(110,440,35,30)
  ellipse(90,425,35,30)
  fill(245, 81, 111)
  ellipse(390,385,40,40)
  ellipse(425,385,40,40)
  ellipse(425,415,40,40)
  ellipse(393,415,40,40)
  
  //middle of flowers
  fill(200,120,230)
  ellipse(110,420,35,30)
  fill(130,120,206)
  ellipse(410,402,40,45)
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
  
  
  
  
  
  
  
  
}
