var juego = new Phaser.Game(290, 540, Phaser.CANVAS, 'bloque_juego');
juego.state.add('Inicio',Inicio);
juego.state.add('Juego',Juego);
juego.state.add('Nivel2',Nivel2);
juego.state.add('Terminado',Terminado);
juego.state.add('Win',Win);
juego.state.start('Inicio');

