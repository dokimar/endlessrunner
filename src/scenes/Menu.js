class Menu extends Phaser.Scene {
   preload(){
      this.load.spritesheet( 'button', 'assets/buttons/button_sprite_sheet.png', {
         frameWidth: 193,
         frameHeight: 71
         });
      this.load.image('bg', 'assets/bg.png');
   }
   constructor() {
      super("menuScene");
   }
   
   create(){
      this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3,3.5);
      
      this.button = this.add.image(game.canvas.width/2, game.canvas.height/2, 'button', 1);
      this.button.setInteractive();
      const title = this.add.text(game.canvas.width/2, game.canvas.height/4, "Slug Fall").setOrigin(0.5,0);
      title.setFontSize(100);
      this.start = false;
      
   }
   update(){
      if(this.start == true){
         this.scene.start('playScene');
         this.start = false;
      }
      this.background.tilePositionY += .2;
      this.button.on("pointerover", () => {
         this.button = this.add.image(game.canvas.width/2, game.canvas.height/2, 'button', 2);
      });

      this.button.on("pointerout", () => {
         this.button = this.add.image(game.canvas.width/2, game.canvas.height/2, 'button', 1);
      });

      this.button.on("pointerdown", () => {
         this.button = this.add.image(game.canvas.width/2, game.canvas.height/2, 'button', 0);
         this.start = true;
      });
      
      
   }

}