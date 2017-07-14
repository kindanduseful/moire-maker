function setup() {
  createCanvas(1000,700);
  background(230);

  //frame 0
  pie(120,200,0);
  var lines = frame(0);
  //mask and display frame
  (mask0 = pies.get()).mask(lines.get());
  image(mask0, 0, 0, width, height);

  //frame 1
  pie(240,100,1);
  var lines2 = frame(1);
  //mask and display frame
  (mask0 = pies.get()).mask(lines2.get());
  image(mask0, 0, 0, width, height);

  //frame 2
  pie(360,50,2);
  var lines3 = frame(2);
  //mask and display frame
  (mask0 = pies.get()).mask(lines3.get());
  image(mask0, 0, 0, width, height);
}

function draw() {
}


////FUNCTIONS:
function pie(degree, elrad, i){
  pies = createGraphics(width * 2, height * 2);
  pies.noStroke();

  // pies.fill(0,166,81);
  // pies.rectMode(CENTER);
  // pies.rect(width/2-200, height/2,elrad,elrad);
  // pies.fill(255,190,210);
  // pies.ellipse(width/2, height/2, 200,200)
  // pies.fill(255,0,0)
  // pies.arc(width/2, height/2, 200,200, 0,radians(degree));
  // pies.fill(0,174,239);
  // pies.ellipse(width/2+200, height/2, elrad,elrad);
  // pies.fill(247,148,29);
  // pies.ellipse(width/2+400, height/2, elrad,200);
  // pies.fill(30,0,29);
  // pies.ellipse(width/2-400,height/2-50+i*50, 200,200);
  // return pies;

  pies.fill(0,166,81);
  pies.rectMode(CENTER);
  pies.rect(width-400, height, elrad, elrad);
  pies.fill(255,190,210);
  pies.ellipse(width, height, 400,400)
  pies.fill(255,0,0)
  pies.arc(width, height, 400, 400, 0, radians(degree));
  pies.fill(0,174,239);
  pies.ellipse(width + 400, height, elrad, elrad);
  pies.fill(247,148,29);
  pies.ellipse(width + 800, height, elrad, 400);
  pies.fill(30,0,29);
  pies.ellipse(width - 800, height - 100 + i * 100, 400,400);
  return pies;
}


function frame(n) {
  var lines = createGraphics(width * 2, height * 2);
  var step = 5//4.7232;
  lines.noStroke();
  lines.fill(0);
  for (var x= n * step; x <= width * 2; x += 14) {//14.1696) {
    lines.rect(x, 0 , step , height * 2);
  }
  return lines;
}
