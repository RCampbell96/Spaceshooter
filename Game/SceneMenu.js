class SceneMenu extends Phaser.Scene {
    constructor() {
        super ({key: "SceneMenu"});
    }

    create() {
        this.scene.start("SceneMenu");
    }
}