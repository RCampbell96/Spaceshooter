let config = {
    type: Phaser.AUTO,
    width:720,
    height:600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: { x: 0, y : 0},
            checkCollision: {
                up: true,
                down: true,
                left: true,
                right: true
            },
        }
    },
    scene: [spaceshoot],
    pixelArt: true,
    roundPixels: true
};
let fighter;
let laser;
let mouseX = 0 ;
let mouseY = 0;
let game = new Phaser.Game(config);
