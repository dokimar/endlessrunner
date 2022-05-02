class velbar extends Phaser.GameObjects.Sprite {
 constructor (scene,x,y,texture){
     super(scene,x,y,texture);
     scene.add.existing(this);
 }

update(){
  switch(true){
<<<<<<< HEAD
   case (this.scene.player.body.velocity.y<=8):
       console.log("verysafe" );
       break;u
   case (this.scene.player.body.velocity.y<=15):
        console.log("optimal"); 
     break;
   case (this.scene.player.body.velocity.y<=24):
     console.log("scary");
     break;
     case (this.scene.player.body.velocity.y<=25):
        console.log("death");
=======
   case (this.scene.player.body.velocity.y<=5):
       //console.log("verysafe" );
       break;u
   case (this.scene.player.body.velocity.y<=10):
        //console.log("optimal"); 
     break;
   case (this.scene.player.body.velocity.y<=15):
     //console.log("scary");
     break;
     case (this.scene.player.body.velocity.y<=20):
       // console.log("death");
>>>>>>> 66e355eb5a91384b933feed47d624a33d386c266
      break;
}
    
}

}