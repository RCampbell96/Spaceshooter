class GameOver extends Phaser.Scene {
    constructor() {
        super ({key:"GameOver"});
    }
    
    create() {
        this.scene.start("GameOver");
    }
    
}