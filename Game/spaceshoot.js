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
        this.image = this.add.image(362, 300, 'spacebackdrop')
        fighter = this.physics.add.sprite(355, 350, 'player')

        fighter.setCollideWorldBounds(true);
         
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        
    }
    update() {
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
