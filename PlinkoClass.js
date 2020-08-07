class Plinko {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:1,
          friction:0
         
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body= Bodies.circle(this.x, this.y,this.radius,options);
       World.add(world, this.body);
     
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.radius,this.radius);
      pop();
       
     
}
}
