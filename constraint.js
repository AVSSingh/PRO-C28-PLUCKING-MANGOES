class Constraint {
    constructor(bodyA,pointB) {
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.04
        }
        this.constraint= Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    

    fly() {
        this.constraint.bodyA=null;
    }

    attach(bodyA) {
        this.constraint.bodyA=bodyA;
    }  

    display() {
        if(this.constraint.bodyA) {
            strokeWeight(1);
            line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.pointB.x,this.constraint.pointB.y);
        }
    }
}
