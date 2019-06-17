let config = {
    type: Phaser.AUTO,
    width:720,
    height:600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: { x: 0, y : 0},
        }
    },
    scene: [spaceshoot],
    pixelArt: true,
    roundPixels: true
};

let game = new Phaser.Game(config);