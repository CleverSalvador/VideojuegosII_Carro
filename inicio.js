var txtInicio;
var fondoInicio;
var btnStart;
var Inicio = {
    
    preload: function(){
        juego.load.image('bgInicio','img/bgInicio.jpg');
        juego.load.image('btn','img/btnStart.png');
    },
    
    create: function(){
        fondoInicio = juego.add.tileSprite(0,0,290,540,'bgInicio');
        btnStart = juego.add.button(80,260,'btn');
    },
    update: function(){
        if(juego.input.activePointer.isDown){
            juego.state.start('Juego');
        }
    }
    
};
