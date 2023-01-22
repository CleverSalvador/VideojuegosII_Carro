var Win = {
    
    preload: function(){
        juego.load.image('btn','img/restart.png');
    },
    
    create: function(){
  		juego.stage.backgroundColor = "#14ACCE";
        txtGameOver = juego.add.text(80,260,"GANASTE!!!",{font:"25px Arial",fill:"#FFF"});
        btnRestart = juego.add.button(100,300,'btn');
    },
    update: function(){
        if(juego.input.activePointer.isDown){
            juego.state.start('Juego');
        }
    }
    
   
};