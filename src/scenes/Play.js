class Play extends Phaser.Scene {
    

    constructor () {
        super("playScene");
        
    }
 
    preload(){
        this.load.image('bg', 'assets/bg.png');
        this.load.image('ab', 'assets/WoodSides.png');
    }
    
    create(){

        this.background = this.add.tileSprite(0, 0, 256, 256, 'bg').setOrigin(0,0).setScale(3);
        this.WoodL = this.add.tileSprite(-160, 0, 260, 1300, 'ab').setOrigin(0,0);
        this.WoodR = this.add.tileSprite(game.canvas.width-100, 0, 260, 1300, 'ab').setOrigin(0,0);
        this.matter.add.gameObject(this.WoodL);
        this.matter.add.gameObject(this.WoodR);
        this.add.text(game.canvas.width/2, game.canvas.height/3, "Play State").setOrigin(0.5,0);
        this.player = this.add.ellipse(game.canvas.width/2, game.canvas.height/2, 75, 75, 0x6666ff);
        this.speed = 0;
        this.moveSpeed = 1;
    }

 update(){
    
    this.speed += .08;
    this.WoodL.tilePositionY += this.speed;
    this.WoodR.tilePositionY += this.speed;
    this.background.tilePositionY += 0.15*this.speed;
    
 }

}