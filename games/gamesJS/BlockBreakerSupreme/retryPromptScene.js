var prompt_header = "gamesAssets/BlockBreakerSupreme/retry_level_prompt.png";
var prompt_no = "gamesAssets/BlockBreakerSupreme/prompt_no.png";
var prompt_no_hover = "gamesAssets/BlockBreakerSupreme/prompt_no_hover.png";
var prompt_yes = "gamesAssets/BlockBreakerSupreme/prompt_yes.png";
var prompt_yes_hover = "gamesAssets/BlockBreakerSupreme/prompt_yes_hover.png";

var RETRY_PROMPT_HEADER;
var NO;
var YES;

var retryPromptScene = {
	setup : function( next_scene ) {
		RETRY_PROMPT_HEADER = new block( 428, 100, prompt_header, ( GAMEAREA.canvas.width / 2 ) - 214, 75, 0, "image" );
		NO = new block( 36, 30, prompt_no, ( GAMEAREA.canvas.width / 2 ) - 100, 75, 0, "image" );
		YES = new block( 40, 30, prompt_yes, ( GAMEAREA.canvas.width / 2 ) + 100, 75, 0, "image" );
		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {
		RETRY_PROMPT_HEADER.update();


		if (mousePos.x < NO.x + NO.width &&
			mousePos.x > NO.x &&
			mousePos.y < NO.y + NO.height &&
			mousePos.y > NO.y ) 
		{
			//hovering
			NO.image.src = prompt_no_hover;
			NO.height = 40;
			NO.width = 41;
			NO.x = ( GAMEAREA.canvas.width / 2 ) + 50;
			NO.y = 185;

		}
		else
		{
			NO.image.src = prompt_no;
			NO.height = 30;
			NO.width = 36;
			NO.x = ( GAMEAREA.canvas.width / 2 ) + 52;
			NO.y = 190;
		}
		NO.update();

		if (mousePos.x < YES.x + YES.width &&
			mousePos.x > YES.x &&
			mousePos.y < YES.y + YES.height &&
			mousePos.y > YES.y ) 
		{
			//hovering
			YES.image.src = prompt_yes_hover;
			YES.height = 40;
			YES.width = 50;
			YES.x = ( GAMEAREA.canvas.width / 2 ) - 55;
			YES.y = 185;

		}
		else
		{
			YES.image.src = prompt_yes;
			YES.height = 30;
			YES.width = 40;
			YES.x = ( GAMEAREA.canvas.width / 2 ) - 50;
			YES.y = 190;
		}
		YES.update();

		GAMEAREA.context.font = "15px Arial";
		GAMEAREA.context.fillStyle = "#000";
		GAMEAREA.context.textAlign = "center";
		GAMEAREA.context.fillText( "Press Escape to Return", width/2, height - 50 );
	},

	clicked : function() {
		if (mousePos.x < NO.x + NO.width &&
			mousePos.x > NO.x &&
			mousePos.y < NO.y + NO.height &&
			mousePos.y > NO.y ) 
		{
			GAME_STATE.change_scene( GAME_STATE.PREVIOUS_SCENE );
		} else if (
			mousePos.x < YES.x + YES.width &&
			mousePos.x > YES.x &&
			mousePos.y < YES.y + YES.height &&
			mousePos.y > YES.y ) 
		{
			SCENES.GAME_SCENE.reset_level();
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.change_scene( GAME_STATE.PREVIOUS_SCENE );
		}
	}
}