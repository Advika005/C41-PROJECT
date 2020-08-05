const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var umbrella;
var drops = [];
var maxDrops = 10;
function preload(){
   
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,250);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(10,400),random(10,400)));
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].draw();
        drops[i].move(5);
    }
   
}   

