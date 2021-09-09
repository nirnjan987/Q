class QueenAttack{
    constructor(x1,y1,x2,y2)
    {
        this.x1=x1
        this.x2=x2
        this.y1=y1
        this.y2=y2
        
    }
    canAttack(){
        if(this.x1==this.x2||this.y1==this.y2||(this.x1-this.x2)==(this.y1-this.y2))
        {
            console.log("Queens attack each other")
        }
        else
        {
            console.log("Queens donot attack eachother")
        }
    }
}
let attack1=new QueenAttack(0,1,2,4)
let attack2=new QueenAttack(0,1,5,1)
let attack3=new QueenAttack(0,1,1,5)
attack1.canAttack()
attack2.canAttack()
attack3.canAttack()

