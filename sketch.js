 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
 var engine, world;
 var score = 0;
 var bg = "images/dayImage.png";
 var backgroundImg;

 function preload(){
    getBackgroundImg(); 
 }
 
 function setup(){
     var canvas = createCanvas(1600,600);
     engine = Engine.create();
     world = engine.world;

     ground = new Ground(800,595,1600,10);
     ground1 = new Ground(500,315,250,10);
     ground2 = new Ground(1000,200,200,10)

     block1 = new Block(500,165,30,40);

     block2 = new Block(500,205,30,40);
     block15 = new Block(530,205,30,40);
     block16 = new Block(470,205,30,40);

     block3 = new Block(500,245,30,40);
     block11 = new Block(530,245,30,40);
     block12 = new Block(560,245,30,40);
     block13 = new Block(470,245,30,40);
     block14 = new Block(440,245,30,40);

     block4 = new Block(500,285,30,40);
     block5 = new Block(530,285,30,40);
     block6 = new Block(470,285,30,40);
     block7 = new Block(560,285,30,40);
     block8 = new Block(440,285,30,40);
     block9 = new Block(590,285,30,40);
     block10 = new Block(410,285,30,40);

     block20 = new Block(1000,165,30,40);
     block21 = new Block(1030,165,30,40);
     block22 = new Block(1060,165,30,40);
     block23 = new Block(970,165,30,40);
     block24 = new Block(940,165,30,40);

     block25 = new Block(1000,135,30,40);
     block26 = new Block(1030,135,30,40);
     block27 = new Block(970,135,30,40);

     block28 = new Block(1000,105,30,40);

     polygon = new Polygon(150,300,55,55);

     sling = new SlingShot(polygon.body,{x:150,y:290})
 }
 
 function draw(){

   if(background)
      background(backgroundImg);

     Engine.update(engine);

     text("SCORE : "+score,750,40);

     ground.display();
     ground1.display();
     ground2.display();

     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
    block10.display();
    block11.display(); 
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();   
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    polygon.display();

    sling.display();
 }
 


 function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   sling.fly();
}

function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:150, y:300});
       sling.attach(polygon.body);
   }
}

async function getBackgroundImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);
   
   if(hour>=0600 && hour<=1900){
       bg = "images/dayImage.png";
   }
   else{
       bg = "sprites/nightImage.png";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
}