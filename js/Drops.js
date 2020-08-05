class Drops{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5);
        this.radius = 5;
        World.add(world,this.body);
    }
    draw(){
        var pos = this.body.position;
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0});
        }
        pop();
    }
    move(speed){
        this.y+= speed;
        
    }

}