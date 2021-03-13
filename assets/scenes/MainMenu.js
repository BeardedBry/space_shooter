class MainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "MainMenu" });
    }
  
    create() {
      this.scene.start("Main");
    }
  }