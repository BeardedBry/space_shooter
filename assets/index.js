import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import Main from './scenes/Main';
import GameOver from './scenes/GameOver';


const config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    MainMenu,
    Main,
    GameOver,
  ],
  pixelArt: true,
  roundPixels: true
}


new Phaser.Game(config);
