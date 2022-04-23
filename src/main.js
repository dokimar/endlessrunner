let config = {
    type: Phaser.CANVAS,
     width: 640,
  height: 1280,
  scene: [Menu,Play],
  physics: {
      default: 'matter',
      matter: {
          enableSleeping: true,
          
      },
      debug: {
          showBody: true,
          showStaticBody:true
      }
  }
  }
  let game = new Phaser.Game(config);
  //let keyF,keyR,keyLEFT,keyRIGHT;
  let borderUISize = game.config.height / 15;
  let borderPadding = borderUISize /3 ;
  let keyDOWN,keyUP,keyLEFT,keyRIGHT;
  let player;
  