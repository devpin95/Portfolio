var CLASSIC_MODE_HEADER;

var classicModeLevelSelectionScene = {
	setup : function() {

		CLASSIC_MODE_HEADER = new block( 548, 100, "gamesAssets/BlockBreakerSupreme/mode_classic_header.png", ( GAMEAREA.canvas.width / 2 ) - 274, 25, 0, "image" );

		this.menu = new menu();
		var column = row = count = 0;
		var starting_x = (width/2) - (90*3);
		var starting_y = 75;
		var spacing_x = 90;
		var spacing_y = 90;

		for ( var i = 0; i < 4; ++i ) {
			for ( var j = 0; j < 5; ++j ) {

				if ( count+1 > 14 ) {
					break;
				}

				var c1 = ( ( player.levels_complete[count] ) ? "#FCCF31" : "rgba(151, 171, 255, .5)" );
				var c2 = ( ( player.levels_complete[count] ) ? "#F55555" : "rgba(18, 53, 151, .5)" );
				this.menu.add( 
					starting_x + ( spacing_x * (j+1) ), 
					starting_x + ( spacing_x * (j+1) ), 
					starting_y + ( spacing_y * (i+1) ), 
					starting_y + ( spacing_y * (i+1) ), 
					"text", "\n\n\n" + (count + 1) + "\n\n\n", 
					"50", 
					function(c){
						return function() {
							GAME_STATE.LEVEL = c;
							GAME_STATE.ACTIVE_SCENE.scene_ready = false;
							GAME_STATE.change_scene( SCENES.GAME_SCENE );
						}
					}(count), 
					"bebas neue", 
					c1, 
					c2 
				);
				++column;
				++count;
			}
			column = 0;
			++row;
		}

		this.scene_ready = true;
	},

	menu : null,
	scene_ready : false,

	run : function() {
		CLASSIC_MODE_HEADER.update();
		this.menu.hovering( mousePos.x, mousePos.y );
		this.menu.update();
	},

	clicked : function(){
		this.menu.click( mousePos.x, mousePos.y );
	},
	button_press : function(e){
		if ( e.keyCode == 27 ) {
			GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
		}
	}
}