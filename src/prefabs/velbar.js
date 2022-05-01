class velbar extends Phaser.GameObjects.Sprite {
 constructor (scene,x,y,texture){
     super(scene,x,y,texture);
     scene.add.existing(this);
 }

update(){
  switch(true){
   case (this.scene.player.body.velocity.y<=10):
       console.log("verysafe" );
       break;u
   case (this.scene.player.body.velocity.y<=15):
        console.log("optimal"); 
     break;
   case (this.scene.player.body.velocity.y<=19.5):
     console.log("scary");
     break;
     case (this.scene.player.body.velocity.y>=19.5):
        console.log("death");
      break;
}
    
}

}