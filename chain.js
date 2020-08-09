class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
    var options={
    
    bodyA:bodyA,
    bodyB:bodyB,
    
    PointB:{x:this.offsetX,y:this.offsetY},
    }
    
    this.body=Constraint.create(options);
        World.add(world,this.body)
    
    }
    
    display(){
    
    
    var p1=this.body.bodyA.position;
    var p2=this.body.bodyB.position;
        strokeWeight(2);
    
    var Anchor1X = p1.x
   var Anchor1Y = p1.y

   
   var Anchor2X = p2.x+this.offsetX
   var Anchor2Y = p2.y+this.offsetY

   line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    
    }
    
    
    
    
    }