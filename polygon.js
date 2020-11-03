class Polygon {
    constructor(x,y,width,height) {

      this.body = Bodies.rectangle(x,y,width,height);
      this.image = loadImage("images/polygon.png");
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,this.width,this.height);
      pop();
    }
  };
  