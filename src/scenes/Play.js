class Play extends Phaser.Scene {
    

    constructor () {
        super("playScene");
        
    }
 
    preload(){
        
        this.load.image('ab', 'assets/WoodSides.png');
        this.load.image('platA', 'assets/platformA.png');
        this.load.image('bg', 'assets/bg.png');
        this.load.image('slug', 'assets/Slug.png');
    }
    
    create(){
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


        this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3);
        this.WoodR = this.add.tileSprite(game.canvas.width, 0, 260, 1439, 'ab').setOrigin(0,0);
        this.WoodL = this.add.tileSprite(0, 0, 260, 1439, 'ab').setOrigin(0,0);

        this.WoodR = this.add.tileSprite(game.canvas.width, 0, 260, 1439, 'ab').setOrigin(0,0);
        
        this.matter.add.gameObject(this.WoodL).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        this.matter.add.gameObject(this.WoodR).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        
        this.speed = 0;

        this.add.text(game.canvas.width/2, game.canvas.height/3, "Play State").setOrigin(0.5,0);
        this.player = this.add.ellipse(game.canvas.width/2, game.canvas.height/2, 75, 75, 0x6666ff);
        this.matter.add.gameObject(this.player).setFrictionAir(0.001).setFriction(100);
        console.log("hello");

        this.P1 = new Platform(this,0,120, 'platA', 1);
        this.matter.add.gameObject(this.P1).setFrictionAir(0.001).setIgnoreGravity(true).setStatic(true).setFriction(100);
        this.P1.setAngle(25);
        this.P1.y = 1000;
    }

    update(){
        this.P1.update();
        if(this.player.body.velocity.y >= 20){
            this.player.body.velocity.y = 20;
        }
        if(keyLEFT.isDown){
            this.player.setVelocityX(-5,0);
        }
        else if (keyRIGHT.isDown){
            this.player.setVelocityX(5,0);
        }

        console.log(this.player.body.velocity.x)
        this.background.tilePositionY += this.player.body.velocity.y/4;
        this.WoodL.tilePositionY += this.player.body.velocity.y;
        this.WoodR.tilePositionY += this.player.body.velocity.y;
        if(this.player.y >= 400){
            this.player.y = 399;
        }
        

 }
 
}