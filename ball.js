class ball
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.rectangle(x,y,r,options);
        World.add(world,this.body);

    }
    display(){
        var ballposition=this.body.position;
        push()
            translate(ballposition.x,ballposition.y)
            rectMode(CENTER)
            rect(this.x,this.y,this.r)
        pop()

        
    }
}