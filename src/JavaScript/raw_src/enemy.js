class Enemy extends Movable{
    constructor(startX, startY, range, angle) {
        super(startX,startY);
        this.direction = 0; // N/E/S/W = 0/1/2/3
    }
    getDist(x1, y1, x2, y2)
    {
        return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
    }
    calculateDamage(xIn, yIn){
        var damage = 100; //default damage
        //Calculate Distance multiplier
        /*
        Distance 1 = 20% damage
        Distance 2 = 50% damage
        Distance 3 = 100% damage
         */
        var distance = this.getDist(xIn, yIn, this.x, this.y);
        var distMult = 0;
        if(distance<=1)
        {
            distMult = 1;
        }
        else if(distance<=2)
        {
            distMult = 0.5;
        }
        else if(distance<=3)
        {
            distMult = 0.2;
        }
        
        //Calculate Angle Relative to ENEMY
        /*
        Angle 0 = 150% damage
        Angle 0<x<=30 = 100% damage
        Angle 30<x<=60 = 60% damage
        Angle 60<x<90 = 20% damage 
         */
        //If enemy is facing North or South
        var angle = 0;
        var angleMult = 0;
        var dist2;
        if(this.direction==0||this.direction==2)
        {
            dist2 = this.getDist(this.x, this.y, xIn, this.y);
        }
        else
        {
            dist2 = this.getDist(this.x, this.y, this.x, yIn);
        }
        angle = Math.abs(90-Math.asin(dist2/distance));
        if(angle==0)
        {
            angleMult = 1.5;
        }
        else if(angle>0&&angle<=30)
        {
            angleMult = 1;
        }
        else if(angle>30&&angle<=60)
        {
            angleMult = 0.6;
        }
        else if(angle>60&&angle<90)
        {
            angleMult = 0.2;
        }
        
        //Final Multiplier
        damage *= angleMult*disMult;
        return damage;
    }
    
    tick(grid)
    {
        
    }
}