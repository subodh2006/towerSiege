class Polygon {
    constructor(x,y,r){
    var options = {
        isStatic: false,
    restitution: 0.3,
    friction:0.2,
 density:1.2


    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("polygon.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
    
    }

    display(){
var paperpos = this.body.position;
var angle = this.body.angle;

push();
translate(paperpos.x,paperpos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(3);
fill("white");
ellipse(0,0,this.r,this.r);
imageMode(CENTER);
image(this.image, 0, 0, 60, 60);
pop();


    }

    
}
