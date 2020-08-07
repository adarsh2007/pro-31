const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,division;
plinkos=[];
particles=[];
divisions=[];
divisionHeight=300;
function preload(){

}

function setup() {

  engine = Engine.create();
  world = engine.world;
  
  createCanvas(490,800);
  // creating all the sprites here
  

  ground = new Ground(240,790,480,15);

  divisions1= new Division(80,680,15,250);
  divisions2= new Division(160,680,15,250);
  divisions3= new Division(240,680,15,250);
  divisions4= new Division(320,680,15,250);
  divisions5= new Division(400,680,15,250);
  divisions6= new Division(480,680,15,250); 
 
  for (var j = 40; j<= width; j=j+50) {
    plinkos.push(new Plinko(j,75,10));
  }
    for (var i = 15; i<= width-10; i=i+45) {
       plinkos.push(new Plinko(i,175,10));
  }
  for (var p = 50; p<= width-10; p=p+70) {
    plinkos.push(new Plinko(p,130,10));
}
for (var o = 5; o<= width-10; o=0+80) {
  plinkos.push(new Plinko(0,235,10));
}



 Engine.run(engine);
}

function draw() {
  background(0);  
  
  if (frameCount%60===0) {
          
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  
 for(var i=0;i<plinkos.length;i=i+1){
    plinkos[i].display();
  }

  for(var j=0;j<particles.length;j=j+1){
    particles[j].display();
  }
  ground.display();
 divisions1.display();
 divisions2.display();
 divisions3.display();
 divisions4.display();
 divisions5.display();
 divisions6.display();
 drawSprites();
}