class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.x,this.y,this.radius,this.radius);
    }
    
}
