var level_info = {
	score : 0,
	starting_lives: 0,
	lives_left : 0,
	time_lowerbound : 30,
	time_upperbound : 60,
	paddle_lowerbound : 20,
	paddle_upperbound : 40,
	score_bonus : 0
};

var retry_image = "gamesAssets/BlockBreakerSupreme/retry_button.png";
var retry_image_hover = "gamesAssets/BlockBreakerSupreme/retry_button_hover.png";
var next_image = "gamesAssets/BlockBreakerSupreme/next_button.png";
var next_image_hover = "gamesAssets/BlockBreakerSupreme/next_button_hover.png";
var menu_image = "gamesAssets/BlockBreakerSupreme/menu_button.png";
var menu_image_hover = "gamesAssets/BlockBreakerSupreme/menu_button_hover.png";
var RETRY, NEXT, MENU;

var bonuses_image;
var bonuses_image_path = "gamesAssets/BlockBreakerSupreme/level_cleared.png";

var levelClearScene = {
	setup : function() {
		bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
		RETRY = new block( 60, 30, retry_image, ( myGameArea.canvas.width / 2 ) - 30, 400, 0, "image" );
		NEXT = new block( 143, 40, next_image, ( myGameArea.canvas.width / 2 ) - 71, 440, 0, "image" );
		MENU = new block( 60, 30, next_image, ( myGameArea.canvas.width / 2 ) - 71, 480, 0, "image" );

		this.scene_ready = true;
	},

	scene_ready : false,

	run : function() {

		if (mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			//hovering
			RETRY.image.src = retry_image_hover;
			RETRY.height = 40;
			RETRY.width = 80;
			RETRY.x = ( myGameArea.canvas.width / 2 ) - 40;
			RETRY.y = 345;

		}
		else
		{
			RETRY.image.src = retry_image;
			RETRY.height = 30;
			RETRY.width = 60;
			RETRY.x = ( myGameArea.canvas.width / 2 ) - 30;
			RETRY.y = 350;
		}

		if (mousePos.x < NEXT.x + NEXT.width &&
			mousePos.x > NEXT.x &&
			mousePos.y < NEXT.y + NEXT.height &&
			mousePos.y > NEXT.y ) 
		{
			//hovering
			NEXT.image.src = next_image_hover;
			NEXT.height = 50;
			NEXT.width = 179;
			NEXT.x = ( myGameArea.canvas.width / 2 ) - 90;
			NEXT.y = 385;

		}
		else
		{
			NEXT.image.src = next_image;
			NEXT.height = 40;
			NEXT.width = 143;
			NEXT.x = ( myGameArea.canvas.width / 2 ) - 71;
			NEXT.y = 390;
		}

		if (mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			//hovering
			MENU.image.src = menu_image_hover;
			MENU.height = 40;
			MENU.width = 80;
			MENU.x = ( myGameArea.canvas.width / 2 ) - 40;
			MENU.y = 435;

		}
		else
		{
			MENU.image.src = menu_image;
			MENU.height = 30;
			MENU.width = 60;
			MENU.x = ( myGameArea.canvas.width / 2 ) - 30;
			MENU.y = 440;
		}

		bonuses_image.update();

		//holds the current line of bonuses
		var next_line = 0;
		var starting_y = 200;

		if ( player.lives > 0 ) {
			//player.score += bonuses[0]( player.lives );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Lives: +" + bonuses[0](player.lives), width/2, starting_y  + (40 * next_line) );
			++next_line;
		}

		if ( UI.timer.total_time < 60 ) {
			//player.score += bonuses[1]( total_time );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Time: +" + bonuses[1](UI.timer.total_time), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		if ( player.lives == 3 ) {
			//player.score += bonuses[2]( );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Flawless: +" + bonuses[2](), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		if ( myPaddle.numberHits <= 20 ) {
			//player.score += bonuses[3]( myPaddle.numberHits );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Paddle Hits: +" + bonuses[3]( myPaddle.numberHits ), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		RETRY.update();
		NEXT.update();
		MENU.update();
	},

	clicked : function() {
		//check if the mouse position is inside the RETRY button
		if (mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			player.reset();
			UI.reset();
			SCENES.GAME_SCENE.reset_level();
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		} 

		else if (
			mousePos.x < NEXT.x + NEXT.width &&
			mousePos.x > NEXT.x &&
			mousePos.y < NEXT.y + NEXT.height &&
			mousePos.y > NEXT.y ) 
		{
			if ( GAME_STATE.LEVEL != GAME_STATE.HIGHEST_LEVEL ) {
				++GAME_STATE.LEVEL;
				player.reset();
				UI.reset();
				SCENES.GAME_SCENE.reset_level();
				GAME_STATE.change_scene( SCENES.GAME_SCENE );
			}
		} else if (
			mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			SCENES.GAME_SCENE.reset_level();
			GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
		}
	},

	button_press : function( e ) {
		
	}
};