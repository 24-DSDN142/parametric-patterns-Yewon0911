//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 150;
  pWallpaper.grid_settings.row_offset  = 10;
}

function wallpaper_background() {
  background(255,255,255);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //rect(40 ,40, rect_width, rect_height);
drawCloud()
}

function drawCloud(){
  let cloudWhite = color(208, 222, 236);
  let cloud = 0

  fill(cloudWhite);
  drawRandomFace();
}

function drawRandomFace() {
  let faceIndex = Math.floor(Math.random() * 6); //you can put 1~6
  let Cscale = random(0.8,0.5)
  translate(100*(1-Cscale),75*(0.8-Cscale))
  scale(Cscale)
  
  if (faceIndex === 0) {
    drawAngry();
  } 
   if (faceIndex === 1) {
    drawAh();
  } 
   if (faceIndex === 2) {
    drawSad();
  } 
   if(faceIndex === 3){
    drawSoso();
  } 
  if(faceIndex === 4){
    drawShout();
  }
  if(faceIndex === 5){
    drawNormal();
  }
}

function drawEye(){
  fill(0);
  ellipse(80, 80, 10);
  ellipse(120, 80, 10);
}

function drawMouth1(){
  fill(0);
  rect(85, 100, 30, 3);
}

function drawMouth2(){
  fill(0);
  circle(100, 120, 20);
}

function drawMouth3(){
  stroke(0)
  strokeWeight(5)
  line(100,100,110,110)
  line(90,110,100,100)
}

function drawEyebrow1(){
  stroke(0);
  strokeWeight(5);
  line(70, 70, 90, 80);
  line(110, 80, 130, 70);
}

function drawEyebrow2(){
  stroke(0);
  strokeWeight(5);
  line(70, 80, 90, 70);
  line(110, 70, 130, 80);
}

function drawNormal(){
  let cloud = 0
  let cloudWhite = color(230, 221, 197);
  fill(cloudWhite);
  translate(100,100)
  noStroke();
  ellipse(cloud, cloud, 150);
  ellipse(cloud+50, cloud+50, 50);
  ellipse(cloud-60, cloud-30, 60);
  ellipse(cloud-60, cloud+20, 90);
  ellipse(cloud+50, cloud+20, 90);
  ellipse(cloud+60, cloud, 70);
  ellipse(cloud+50, cloud-30, 50);
}

function drawAngry(){
  let cloudRed = color(255, 100, 100);
  fill(cloudRed);
  noStroke();
  ellipse(100, 100, 150);
  ellipse(150, 150, 50);
  ellipse(40, 70, 60);
  ellipse(40, 120, 90);
  ellipse(150, 120, 90);
  ellipse(160, 100, 70);
  ellipse(150, 70, 50);
  drawEye();
  drawEyebrow1();
  drawMouth3();
}

function drawAh(){
  let cloudYellow = color(255, 255, 100);
  fill(cloudYellow);
  noStroke();
  ellipse(100, 100, 150);
  ellipse(150, 150, 50);
  ellipse(40, 70, 60);
  ellipse(40, 120, 90);
  ellipse(150, 120, 90);
  ellipse(160, 100, 70);
  ellipse(150, 70, 50);
  drawEye();
  drawEyebrow2();
  drawMouth2();
}

function drawSad(){
  let cloudBlue = color(100, 100, 255);
  fill(cloudBlue);
  noStroke();
  ellipse(100, 100, 150);
  ellipse(150, 150, 50);
  ellipse(40, 70, 60);
  ellipse(40, 120, 90);
  ellipse(150, 120, 90);
  ellipse(160, 100, 70);
  ellipse(150, 70, 50);
  drawEye();
  drawEyebrow2();
  drawMouth3();
}

function drawSoso(){
  let cloudLightblue= color(208, 222, 236);
  fill(cloudLightblue);
  noStroke();
  ellipse(100, 100, 150);
  ellipse(150, 150, 50);
  ellipse(40, 70, 60);
  ellipse(40, 120, 90);
  ellipse(150, 120, 90);
  ellipse(160, 100, 70);
  ellipse(150, 70, 50);
  drawEye();
  drawMouth1();
  
}

function drawShout(){
  let cloudGray = color(147,151,153);
  fill(cloudGray);
  noStroke();
  ellipse(100, 100, 150);
  ellipse(150, 150, 50);
  ellipse(40, 70, 60);
  ellipse(40, 120, 90);
  ellipse(150, 120, 90);
  ellipse(160, 100, 70);
  ellipse(150, 70, 50);
  drawEye();
  drawEyebrow1();
  drawMouth2();
}
