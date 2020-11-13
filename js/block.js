 class Block {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.7,
          friction:1.9,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility = 225;
      this.color = color(random(0,255), random(0,255), random(0,255));
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        score = score+1;
        push();
        this.visibility = this.visibility -5;
        pop();
      }
    }
  }