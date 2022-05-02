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
        this.load.image('leaf', 'assets/leaf.png');
    }
    
    create(){
        //Global variables
        this.speed = 0;
        this.points = 0;
        var shapes = this.cache.json.get('shapes');
        //keyboard input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.bruh = new Predator(this,game.canvas.width/2,50,'slug')
        this.bruh.setIgnoreGravity(true);
<<<<<<< HEAD

        this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3,3.6);
=======
       // this.bruh.setScale(5,1);
        this.background = this.add.tileSprite(0, 0, 300, 256, 'bg').setOrigin(0,0).setScale(3);
>>>>>>> 66e355eb5a91384b933feed47d624a33d386c266
        
        // walls that imitate movement with player
        this.WoodL = this.add.tileSprite(0, 0, 250, 1800, 'Left_Wall').setOrigin(0,0);
        this.WoodR = this.add.tileSprite(game.canvas.width, 0, 250, 1800, 'Right_Wall').setOrigin(0,0);
        this.matter.add.gameObject(this.WoodL).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        this.matter.add.gameObject(this.WoodR).setFrictionAir(0.001).setStatic(true).setFriction(0.5);
        
        // player
        this.player = this.matter.add.sprite(game.canvas.width/2, 0, 'slug', null, 'shapes');
        this.Warner = new velbar(this,0,0,'slug').setOrigin(0,0);
        
        //platform
        this.plat = this.matter.add.image(200, 500, 'platA', null, {isStatic: true}).setScale(1,.75); 

        this.leaf = this.matter.add.image(400, 500, 'leaf', null, {isStatic: true});
        //this.plat = this.matter.add.image(400, 500, 'leaf', null, {isStatic: true});
        this.plat.setAngle(20)
<<<<<<< HEAD
        this.score = this.add.text(game.canvas.width/2, game.canvas.height/4, this.points, null);
        
        this.player.body.sleepThreshold = -1;
=======
       
>>>>>>> 66e355eb5a91384b933feed47d624a33d386c266
    }

    update(){
      
        this.bruh.update();
        this.Warner.update();
        //this.P1.update();
<<<<<<< HEAD
        //console.log(this.player.body.velocity.y);
        
        this.points += this.player.body.velocity.y/100;
        

        
        

        
        
        if(!this.matter.overlap(this.plat.body, this.player.body)||this.plat.y<this.player.y){
            if (this.plat.y < -100){
                this.destroyPlatform();
            }
            else{
                if(this.player.body.velocity.y<=25){
                    this.plat.y -= this.player.body.velocity.y;
                    this.leaf.y -= this.player.body.velocity.y*.6;
                } else { 
                    this.plat.y -= 25;
                    this.leaf.y -= 25*.6;
                }
            }
            if (this.leaf.y < -100){
                this.destroyLeaf();
            }
            
            if(this.player.body.velocity.y >= 25){
                this.player.body.velocity.y = 25;
            }
            this.background.tilePositionY += this.player.body.velocity.y/4;
            this.WoodL.tilePositionY += this.player.body.velocity.y;
            this.WoodR.tilePositionY += this.player.body.velocity.y;
=======
       console.log(this.player.body.velocity.y);
      
        //console.log(this.speed);
        if (this.plat.y < -100){
            this.plat.y = game.canvas.height + Phaser.Math.Between(0,1000);
            this.plat.setAngle(Phaser.Math.Between(-45,45));
>>>>>>> 66e355eb5a91384b933feed47d624a33d386c266
        }
        else{
            this.leaf.y += 1;
        }
        if(this.matter.overlap(this.leaf.body, this.player.body)){
            this.player.setVelocityY(-5);
            if(this.player.x < this.leaf.x)
                this.leaf.x += 80;
            else{
                this.leaf.x -= 80;
            }
        }
        
        if(keyLEFT.isDown){
            this.player.setVelocityX(-6);
        }
        else if (keyRIGHT.isDown){
            this.player.setVelocityX(6);
        }
        console.log(this.player.body.velocity.y)
        if(this.player.body.velocity.y >= 24 && this.matter.overlap(this.plat.body, this.player.body)){
            this.scene.start('menuScene');
        }
        
<<<<<<< HEAD
        // console.log(this.player.body.velocity.y)
        
        if(this.player.y >= 400){
            this.player.y = 399;
        }
        this.Warner.update();

        if(this.points>this.score.text){
            this.score.text=Math.round(this.points);
=======


       // console.log(this.player.body.velocity.y)
        this.background.tilePositionY += this.player.body.velocity.y/4;
        this.WoodL.tilePositionY += this.player.body.velocity.y;
        this.WoodR.tilePositionY += this.player.body.velocity.y;
        if (this.player.body.velocity.y<5 && this.bruh.y<360){
            this.bruh.y += 2;


        }
        if (this.player.body.velocity.y>10 && this.bruh.y>10){
            this.bruh.y -=5;
        }
        if(this.player.y >= 400){
            this.player.y = 399;
        }
        
        if(this.player.blocked){
            console.log("touching");
>>>>>>> 66e355eb5a91384b933feed47d624a33d386c266
        }
        
    }

    destroyPlatform(){
        this.plat.destroy();
        this.plat = this.matter.add.sprite(Phaser.Math.Between(150, game.canvas.width-250), game.canvas.height + Phaser.Math.Between(0,20), 'platA', null, {isStatic: true}).setScale(1,.75);
        this.plat.setAngle(Phaser.Math.Between(-15,15));
    }
    destroyLeaf(){
        this.leaf.destroy();
        this.leaf = this.matter.add.sprite(Phaser.Math.Between(150, game.canvas.width-250), game.canvas.height + Phaser.Math.Between(0,200), 'leaf', null, {isStatic: true});
        this.leaf.setAngle(Phaser.Math.Between(-45,45));
    }
}