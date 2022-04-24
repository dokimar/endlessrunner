class Play extends Phaser.Scene {
    

    constructor () {
        super("playScene");
        
    }
 
    preload(){
        
        this.load.image('ab', 'assets/WoodSides.png');
        this.load.image('bg', 'assets/bg.png');
    }
    
    create(){

        this.background = this.add.tileSprite(0, 0, 256, 256, 'bg').setOrigin(0,0).setScale(3);
        this.WoodR = this.add.tileSprite(game.canvas.width-100, 0, 260, 1300, 'ab').setOrigin(0,0);

        this.matter.add.gameObject(this.WoodR).setFrictionAir(0.001).setBounce(0.8);

        this.add.text(game.canvas.width/2, game.canvas.height/3, "Play State").setOrigin(0.5,0);
        this.player = this.add.ellipse(game.canvas.width/2, game.canvas.height/2, 75, 75, 0x6666ff);
        
        console.log("hello");
    }

 update(){
    
 }

}