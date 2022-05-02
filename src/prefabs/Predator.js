class Predator extends Phaser.Physics.Matter.Sprite {
    constructor (scene,x,y,texture){
        super(scene.matter.world,x,y,texture);
        scene.add.existing(this);
        //this.chase = this/scene.speed;
                
    }
    
    update(){
        //console.log("how");
        //console.log(this.chase);
        
        if(this.chase<10){ 
        this.y   +=  1;
        }
        if(this.chase>10){
           this.y-= 1;
        }
      
    }
}