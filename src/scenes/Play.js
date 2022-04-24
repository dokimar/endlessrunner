class Play extends Phaser.Scene {
    

    constructor () {
        super("playScene");
        
    }
 
    preload(){
        
        this.load.image('ab', 'assets/WoodSides.png');
        this.load.image('bg', 'assets/bg.png');
    }
    
    create(){

        this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3);
        this.WoodR = this.add.tileSprite(game.canvas.width, 0, 260, 1300, 'ab').setOrigin(0,0);
        this.WoodL = this.add.tileSprite(0, 0, 260, 1300, 'ab').setOrigin(0,0);
        this.matter.add.gameObject(this.WoodL).setFrictionAir(0.001);
        this.matter.add.gameObject(this.WoodR).setFrictionAir(0.001);

        this.add.text(game.canvas.width/2, game.canvas.height/3, "Play State").setOrigin(0.5,0);
        this.player = this.add.ellipse(game.canvas.width/2, game.canvas.height/2, 75, 75, 0x6666ff);
        this.matter.add.gameObject(this.player).setFrictionAir(0.001);
        this.speed = 0;
        console.log("hello");
    }

 update(){
    this.speed += 1;
    this.background.tilePositionY = this.speed;
    this.WoodL.tilePositionY = 5*this.speed;
    this.WoodR.tilePositionY = 5*this.speed;
 }
 
}