var txtGameOver;
var Terminado = {
    
    preload: function(){
        
    },
    
    create: function(){
  		juego.stage.backgroundColor = "990000";
        txtGameOver = juego.add.text(80,260,"GAME OVER",{font:"25px Arial",fill:"#FFF"});
  		
    }
    
   
};