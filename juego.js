var fondo;
var carro;
var cursores;
var enemigos;
var timer;
var gasolinas;
var timerGasolina;
var soundCarro;
var puntos;
var txtPuntos;
var vidas;
var txtVidas;
var txtAutor;

var Juego = {
    preload: function() {
        /*Pantalla de carga*/
        juego.state.start('Inicio');
        
        juego.load.image('bg','img/bg.png');
        juego.load.image('carro','img/carro.png');
        juego.load.image('carroMalo','img/carroMalo.png');
        juego.load.image('gasolina','img/gas.png');
        juego.load.audio('soundCarro','sounds/auto.mp3');
        juego.forceSingleUpdate = true;
    },
    create: function() {

        fondo = juego.add.tileSprite(0,0,290,540,'bg');
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        carro = juego.add.sprite(juego.width/2,496,'carro');
        carro.anchor.setTo(0.5);
        juego.physics.arcade.enable(carro,true);

        enemigos = juego.add.group();
        juego.physics.arcade.enable(enemigos,true);
        enemigos.enableBody = true;
        enemigos.createMultiple(20,'carroMalo');
        enemigos.setAll('anchor.x',0.5);
        enemigos.setAll('anchor.y',0.5);
        enemigos.setAll('outOfBoundsKill',true);
        enemigos.setAll('checkWorldBounds',true);

        gasolinas = juego.add.group();
        //juego.physics.arcade.enable(gasolinas,true);
        gasolinas.setBodyType = Phaser.Physics.ARCADE;
        gasolinas.enableBody = true;
        gasolinas.createMultiple(20,'gasolina');
        gasolinas.setAll('anchor.x',0.5);
        gasolinas.setAll('anchor.y',0.5);
        gasolinas.setAll('outOfBoundsKill',true);
        gasolinas.setAll('checkWorldBounds',true);

        timer = juego.time.events.loop(1500,this.crearCarroMalo,this);
        timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);
        cursores=juego.input.keyboard.createCursorKeys();

        /*Definiendo puntaje en la pantalla*/
        puntos = 0;
        juego.add.text(45,20,"Puntos",{font:"14px Arial",fill:"#fff"});
        txtPuntos=juego.add.text(95,20,"0",{font:"14px Arial",fill:"#fff"});
        /*Definiendo vidas en la pantalla*/
        vidas = 3;
        juego.add.text(200,20,"Vidas",{font:"14px Arial",fill:"#fff"});
        txtVidas = juego.add.text(240,20,"3",{font:"14px Arial",fill:"#fff"});

        /*Nombre del Desarrollador*/
        txtAutor = juego.add.text(150,520,"Clever Salvador",{font:"14px Arial",fill:"#fff"})

    },
    update: function() {
        fondo.tilePosition.y+=3;
        /*Incorporando sonido*/
        soundCarro = juego.sound.add('soundCarro');
        soundCarro.play();

        if(cursores.right.isDown && carro.position.x<245) {
            carro.position.x+=5;
        } else if (cursores.left.isDown && carro.position.x>45) {
            carro.position.x -= 5;
        }
        //Colision con las gasolinas
        juego.physics.arcade.overlap(carro,gasolinas,this.collisionGasolina,null,this);
        //Colision con los enemigos
        juego.physics.arcade.overlap(carro,enemigos,this.collisionEnemigos,null,this);

        if(vidas == 0) {
            juego.state.start('Terminado');
        }

    },
    crearCarroMalo: function() {
        var position = Math.floor(Math.random()*3) + 1;
        var enemigo = enemigos.getFirstDead();
        enemigo.physicsBodyType = Phaser.Physics.ARCADE;
        enemigo.reset(position*73,0);
        enemigo.body.velocity.y=200;
        enemigo.anchor.setTo(0.5);
    },
    crearGasolina: function() {
        var position = Math.floor(Math.random()*3) + 1;
        var gasolina = gasolinas.getFirstDead();
        gasolina.physicsBodyType = Phaser.Physics.ARCADE;
        gasolina.reset(position*73,0);
        gasolina.body.velocity.y=200;
        gasolina.anchor.setTo(0.5);
    },
    collisionGasolina: function(b,m) {
        m.kill();
        puntos++;
        txtPuntos.text = puntos;
    },
    collisionEnemigos: function(b,m) {
        m.kill();
        vidas--;
        txtVidas.text = vidas;
    }
};