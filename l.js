class Stabley{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        
        


    }
    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        rectMode(CENTER);
        fill("white");
        rect(this.x,this.y,this.width,this.height);
    }
}