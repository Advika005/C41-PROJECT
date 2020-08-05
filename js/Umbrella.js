class Umbrella{
    constructor(x,y){
        var options = {
            isStatic :true
        }
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;
        this.image = loadImage("umbrella.png");
        this.boyImage = loadImage("Boy.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-50,this.radius,this.radius);
        image(this.boyImage,pos.x,pos.y+30,80,150);
        pop();
    }
}