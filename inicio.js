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
        btnStart.onInputDown.add(goToGame, this);
    }
    
};
function goToGame() {
    juego.state.start('Juego');
}