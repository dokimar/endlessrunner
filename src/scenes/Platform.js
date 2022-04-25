class Platform extends Phaser.GameObjects.Sprite  {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
    }

    update(){
        if (this.y < 0){
            this.y = game.canvas.height + Phaser.Math.Between(0,1000);
            this.setAngle(Phaser.Math.Between(0,90));
        }
        else{
            if(this.scene.player.body.velocity.y<=20){
                this.y -= this.scene.player.body.velocity.y;
            } else { 
                this.y -= 20;
            }
        }
        this.x = 400;
    }

}