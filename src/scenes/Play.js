class Play extends Phaser.Scene {
    

    constructor () {
        super("playScene");
        
    }
 
    preload(){
        //this.matter.world.setBounds(true,true,false,false);
        this.load.image('ab', 'assets/WoodSides.png');
        this.load.image('Right_Wall', 'assets/WoodSide_L.png');
        this.load.image('Left_Wall', 'assets/WoodSide_R.png');
        this.load.image('platA', 'assets/platformA.png');
        this.load.image('bg', 'assets/bg.png');
        this.load.image('slug', 'assets/Slug.png');
        this.load.json('shapes', 'assets/bSlug.json');
    }
    
    create(){
        //Global variables
        this.speed = 0;
        var shapes = this.cache.json.get('shapes');
        //keyboard input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.bruh = new Predator(this,50,50,'slug').setOrigin(50,50);
        this.bruh.setIgnoreGravity(true);

        this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3);
        
        // walls that imitate movement with player
        this.WoodL = this.add.tileSprite(0, 0, 260, 1439, 'Left_Wall').setOrigin(0,0);
        this.WoodR = this.add.tileSprite(game.canvas.width, 0, 260, 1439, 'Right_Wall').setOrigin(0,0);
        this.matter.add.gameObject(this.WoodL).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        this.matter.add.gameObject(this.WoodR).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        
        // player
        this.player = this.matter.add.sprite(game.canvas.width/2, game.canvas.height/2, 'slug', null, 'shapes');
        this.Warner = new velbar(this,0,0,'slug').setOrigin(0,0);
        
        //platform
        this.plat = this.matter.add.image(400, 500, 'platA', null, {isStatic: true}); 
        this.plat.setAngle(20)
    }

    update(){
        //this.P1.update();
       // console.log(this.player.body.velocity);
        
        if (this.plat.y < -100){
            this.plat.y = game.canvas.height + Phaser.Math.Between(0,1000);
            this.plat.setAngle(Phaser.Math.Between(-45,45));
        }
        else{
            if(this.player.body.velocity.y<=20){
                this.plat.y -= this.player.body.velocity.y;
            } else { 
                this.plat.y -= 20;
            }
        }

        if(this.player.body.velocity.y >= 20){
            this.player.body.velocity.y = 20;
        }
        if(keyLEFT.isDown){
            this.player.setVelocityX(-2,0);
            this.player.x=this.player.x-5;
        }
        else if (keyRIGHT.isDown){
            this.player.setVelocityX(2,0);
            this.player.x=this.player.x+5;
        }
        


       // console.log(this.player.body.velocity.y)
        this.background.tilePositionY += this.player.body.velocity.y/4;
        this.WoodL.tilePositionY += this.player.body.velocity.y;
        this.WoodR.tilePositionY += this.player.body.velocity.y;
        if(this.player.y >= 400){
            this.player.y = 399;
        }
        this.Warner.update();
        if(this.player.blocked){
            console.log("touching");
        }

 }
 
}