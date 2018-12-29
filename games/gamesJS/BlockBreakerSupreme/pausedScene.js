var PAUSED_HEADER;

var pausedScene = {
	setup : function( ) {

		var paused_header_image = "gamesAssets/BlockBreakerSupreme/paused.png";
		var settings_image = "gamesAssets/BlockBreakerSupreme/settings_button.png";
		var settings_image_hover = "gamesAssets/BlockBreakerSupreme/settings_button_hover.png";
		var retry_image = "gamesAssets/BlockBreakerSupreme/retry_button.png";
		var retry_image_hover = "gamesAssets/BlockBreakerSupreme/retry_button_hover.png";
		var menu_image = "gamesAssets/BlockBreakerSupreme/menu_button.png";
		var menu_image_hover = "gamesAssets/BlockBreakerSupreme/menu_button_hover.png";

		PAUSED_HEADER = new block( 122, 50, paused_header_image, ( GAMEAREA.canvas.width / 2 ) - 61, 75, 0, "image" );

		this.menu = new menu();
		//x1, x2, y1, y2, type, image, image_hover, callback
		this.menu.add( ( GAMEAREA.canvas.width / 2 ) - 30, ( GAMEAREA.canvas.width / 2 ) - 40, 150, 145, "image", retry_image, retry_image_hover, function() {
			GAME_STATE.change_scene( SCENES.RETRY_LEVEL_PROMPT );
		} );
		//               myGameArea.canvas.width / 2 ) - 30, ( myGameArea.canvas.width / 2 ) - 35, 150, 145, "image", play_button, play_button_hover, function() 
		this.menu.add( ( GAMEAREA.canvas.width / 2 ) - 45, ( GAMEAREA.canvas.width / 2 ) - 55, 190, 185, "image", settings_image, settings_image_hover, function() {
			GAME_STATE.change_scene( SCENES.SETTINGS_SCENE );
		} );
		this.menu.add( ( GAMEAREA.canvas.width / 2 ) - 30, ( GAMEAREA.canvas.width / 2 ) - 40, 230, 225, "image", menu_image, menu_image_hover, function() {
			GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
			SCENES.GAME_SCENE.reset_level();
		} );

		this.scene_ready = true;
	},

	menu : null,
	scene_ready : false,

	run : function( ) {
		PAUSED_HEADER.update();
		this.menu.hovering( mousePos.x, mousePos.y );
		this.menu.update();

		GAMEAREA.context.font = "15px Arial";
		GAMEAREA.context.fillStyle = "#000";
		GAMEAREA.context.textAlign = "center";
		GAMEAREA.context.fillText( "Press Escape to Return", width/2, height - 50 );
	},

	clicked : function() {
		this.menu.click( mousePos.x, mousePos.y );
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.STOP_TIME = false;
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		}
	}
}