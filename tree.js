class trees
{
    constructor(x,y,w,h)
    {
        this.x=x;
        this.y=y;
        this.w = width;
        this.h=height

        this.image = loadImage("sprites/image/tree.png")
        World.add(world,this.body)
    }
display(){
    imageMode(CENTER)
    image( this.image,this.body.position.x,this.body.position.y,this.w,this.h);
}
}