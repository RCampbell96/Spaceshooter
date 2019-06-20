class spaceshoot extends Phaser.Scene {
    constructor(){
        super({key:"spaceshoot"});
    }
    preload() {
        this.load.image('spacebackdrop','spacebackdrop.png')
        this.load.image('player','fighter.png')
        this.load.image('bullet', 'bullet.png') // Attribute: http://bonsaiheld.org
        this.load.image('enemy1', 'enemy1.png')
    }

    create() {
        
        let BetweenPoints = Phaser.Math.Angle.BetweenPoints;
        let SetToAngle = Phaser.Geom.Line.SetToAngle;
        let velocityFromRotation = this.physics.velocityFromRotation;
        let velocity = new Phaser.Math.Vector2();
        let line = new Phaser.Geom.Line();
        

        this.image = this.add.image(362, 300, 'spacebackdrop')
        fighter = this.physics.add.sprite(355, 350, 'player')
        laser = this.physics.add.image(fighter, fighter, 'bullet');
        enemy1 = this.add.group({key: 'enemy1', frame: 0, repeat: 13, setXY: { x: 32, y: 100, stepX: 40 } });
        
        fighter.setCollideWorldBounds(true);
        
        this.input.on('pointermove', function (pointer) {
            let angle = BetweenPoints(fighter, pointer);
    
            SetToAngle(line, fighter, fighter, angle, 360);
            velocityFromRotation(angle, 1500, velocity);

            mouseX = pointer.x;
            mouseY = pointer.y;
        }, this);

        this.input.on('pointerdown', function () {
            // Enable physics body and reset (at position), activate game object, show game object
            laser.enableBody(true, fighter.x, fighter.y, true, true).setVelocity(velocity.x, velocity.y);
        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        Phaser.Actions.IncX(enemy1.getChildren(), 100);
    }

    update() {
        fighter.setRotation(Phaser.Math.Angle.Between(mouseX, mouseY,fighter.x, fighter.y) - Math.PI / 2);

        if(this.key_A.isDown)
            fighter.x -= 6;
        if(this.key_D.isDown)
            fighter.x += 6;
        if(this.key_W.isDown)
            fighter.y -= 6;
        if(this.key_S.isDown)
            fighter.y += 6;
    }
}
