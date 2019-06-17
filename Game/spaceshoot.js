let sprite;

class spaceshoot extends Phaser.Scene {
    constructor(){
        super({key:"spaceshoot"});
    }
    preload() {
        this.load.image('spacebackdrop','spacebackdrop.png')
        this.load.image('player','fighter.png')
        this.load.image('singlelaser', 'singlelaser.jpeg')
    }

    create() {

        var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
        var SetToAngle = Phaser.Geom.Line.SetToAngle;
        var velocityFromRotation = this.physics.velocityFromRotation;

        this.image = this.add.image(362, 300, 'spacebackdrop')
        this.image = this.physics.add.sprite(355, 350, 'player')

        var velocity = new Phaser.Math.Vector2();
        var line = new Phaser.Geom.Line();

        // this.input.on('pointermove', function (pointer) {
        //     var angle = BetweenPoints(sprite, pointer)
        // }
         
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        
    }
    update() {
        if(this.key_A.isDown)
            this.image.x -= 6;
        if(this.key_D.isDown)
            this.image.x += 6;
        if(this.key_W.isDown)
            this.image.y -= 6;
        if(this.key_S.isDown)
            this.image.y += 6;

            sprite.rotation = game.physics.arcade.angleToPointer(sprite);
    }
}
