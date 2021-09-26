class Ball{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/hexagon.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var hexgonPos=this.body.position;	
		push();
		translate(hexgonPos.x, hexgonPos.y);
		//imageMode(CENTER);
		//image(this.image, 0,0,this.r*2, this.r*2)
		pop();
 }
}