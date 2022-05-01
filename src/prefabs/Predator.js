class Predator extends Phaser.Physics.Matter.Sprite {
    constructor (scene,x,y,texture){
        super(scene.matter.world,x,y,texture);
        scene.add.existing(this);
    }
    
    update(){
        console.log("hello everyone my name is markiplier");
    }
    
}