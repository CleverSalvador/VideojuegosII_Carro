var Win = {
    preload: function(){
    },
    
    create: function(){
  		juego.stage.backgroundColor = "#14ACCE";
        txtGameOver = juego.add.text(80,260,"¡GANASTE!",{font:"25px Arial",fill:"#FFF"});
    },
    update: function(){
        if(juego.input.activePointer.isDown){
            juego.state.start('Juego');
        }
    }
    
   
};