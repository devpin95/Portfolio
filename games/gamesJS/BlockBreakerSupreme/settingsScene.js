var settings_header_image = "gamesAssets/BlockBreakerSupreme/settings.png"
var flight_path_activated = "gamesAssets/BlockBreakerSupreme/settings_fp_activated.png";
var flight_path_activated_hover = "gamesAssets/BlockBreakerSupreme/settings_fp_activated_hover.png";
var flight_path_deactivated = "gamesAssets/BlockBreakerSupreme/settings_fp_deactivated.png";
var flight_path_deactivated_hover = "gamesAssets/BlockBreakerSupreme/settings_fp_deactivated_hover.png";

var papa_paddle_activated = "gamesAssets/BlockBreakerSupreme/settings_papa_paddle_activated.png";
var papa_paddle_activated_hover = "gamesAssets/BlockBreakerSupreme/settings_papa_paddle_activated_hover.png";
var papa_paddle_deactivated = "gamesAssets/BlockBreakerSupreme/settings_papa_paddle_deactivated.png";
var papa_paddle_deactivated_hover = "gamesAssets/BlockBreakerSupreme/settings_papa_paddle_deactivated_hover.png";

var cursor_activated = "gamesAssets/BlockBreakerSupreme/settings_cursor_activated.png";
var cursor_activated_hover = "gamesAssets/BlockBreakerSupreme/settings_cursor_activated_hover.png";
var cursor_deactivated = "gamesAssets/BlockBreakerSupreme/settings_cursor_deactivated.png";
var cursor_deactivated_hover = "gamesAssets/BlockBreakerSupreme/settings_cursor_deactivated_hover.png";

var sounds_activated = "gamesAssets/BlockBreakerSupreme/settings_sounds_activated.png";
var sounds_activated_hover = "gamesAssets/BlockBreakerSupreme/settings_sounds_activated_hover.png";
var sounds_deactivated = "gamesAssets/BlockBreakerSupreme/settings_sounds_deactivated.png";
var sounds_deactivated_hover = "gamesAssets/BlockBreakerSupreme/settings_sounds_deactivated_hover.png";

var SETTINGS_HEADER, FLIGHT_PATH, PAPA_PADDLE, CURSOR, SOUNDS;

var settingsScene = {
	setup : function( ) {
		SETTINGS_HEADER = new block( 122, 50, settings_header_image, ( GAMEAREA.canvas.width / 2 ) - 61, 25, 0, "image" );
		FLIGHT_PATH = new block( 400, 64, flight_path_deactivated, ( GAMEAREA.canvas.width / 2 ) - 200, 75, 0, "image" );
		// PAPA_PADDLE = new block( 400, 64, papa_paddle_deactivated, ( myGameArea.canvas.width / 2 ) - 200, 125, 0, "image" );
		CURSOR = new block( 400, 64, cursor_deactivated, ( GAMEAREA.canvas.width / 2 ) - 200, 125, 0, "image" );
		SOUNDS = new block( 400, 64, sounds_deactivated, ( GAMEAREA.canvas.width / 2 ) - 200, 175, 0, "image" );

		//set the correct state of the flight path setting
		if ( GAME_SETTINGS.ball.flight_path == true ) {
			FLIGHT_PATH.image.src = flight_path_activated;
		}

		// if ( GAME_SETTINGS.paddle.papa_paddle == true ) {
		// 	PAPA_PADDLE.image.src = papa_paddle_activated;
		// }

		if ( GAME_SETTINGS.paddle.papa_paddle == true ) {
			PAPA_PADDLE.image.src = papa_paddle_activated;
		}

		if ( GAME_SETTINGS.sound.on == true ) {
			SOUNDS.image.src = sounds_activated;
		}

		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {

		if (mousePos.x < FLIGHT_PATH.x + FLIGHT_PATH.width &&
			mousePos.x > FLIGHT_PATH.x &&
			mousePos.y < FLIGHT_PATH.y + FLIGHT_PATH.height &&
			mousePos.y > FLIGHT_PATH.y ) 
		{
			//hovering
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				//hovering and active
				FLIGHT_PATH.image.src = flight_path_activated_hover;
			} else {
				//hovering and deactivated
				FLIGHT_PATH.image.src = flight_path_deactivated_hover;
			}
		} else {
			//not hovering
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				//not hovering and active
				FLIGHT_PATH.image.src = flight_path_activated;
			} else {
				//not hovering and deactivated
				FLIGHT_PATH.image.src = flight_path_deactivated;
			}
		}

		// if (mousePos.x < PAPA_PADDLE.x + PAPA_PADDLE.width &&
		// 	mousePos.x > PAPA_PADDLE.x &&
		// 	mousePos.y < PAPA_PADDLE.y + PAPA_PADDLE.height &&
		// 	mousePos.y > PAPA_PADDLE.y ) 
		// {
		// 	//hovering
		// 	if ( GAME_SETTINGS.paddle.papa_paddle == true ) {
		// 		//hovering and active
		// 		PAPA_PADDLE.image.src = papa_paddle_activated_hover;
		// 	} else {
		// 		//hovering and deactivated
		// 		PAPA_PADDLE.image.src = papa_paddle_deactivated_hover;
		// 	}
		// } else {
		// 	//not hovering
		// 	if ( GAME_SETTINGS.paddle.papa_paddle == true ) {
		// 		//not hovering and active
		// 		PAPA_PADDLE.image.src = papa_paddle_activated;
		// 	} else {
		// 		//not hovering and deactivated
		// 		PAPA_PADDLE.image.src = papa_paddle_deactivated;
		// 	}
		// }

		if (mousePos.x < CURSOR.x + CURSOR.width &&
			mousePos.x > CURSOR.x &&
			mousePos.y < CURSOR.y + CURSOR.height &&
			mousePos.y > CURSOR.y ) 
		{
			//hovering
			if ( GAME_SETTINGS.cursor.hidden == true ) {
				//hovering and active
				CURSOR.image.src = cursor_activated_hover;
			} else {
				//hovering and deactivated
				CURSOR.image.src = cursor_deactivated_hover;
			}
		} else {
			//not hovering
			if ( GAME_SETTINGS.cursor.hidden == true ) {
				//not hovering and active
				CURSOR.image.src = cursor_activated;
			} else {
				//not hovering and deactivated
				CURSOR.image.src = cursor_deactivated;
			}
		}


		if (mousePos.x < SOUNDS.x + SOUNDS.width &&
			mousePos.x > SOUNDS.x &&
			mousePos.y < SOUNDS.y + SOUNDS.height &&
			mousePos.y > SOUNDS.y ) 
		{
			//hovering
			if ( GAME_SETTINGS.sound.on == true ) {
				//hovering and active
				SOUNDS.image.src = sounds_activated_hover;
			} else {
				//hovering and deactivated
				SOUNDS.image.src = sounds_deactivated_hover;
			}
		} else {
			//not hovering
			if ( GAME_SETTINGS.sound.on == true ) {
				//not hovering and active
				SOUNDS.image.src = sounds_activated;
			} else {
				//not hovering and deactivated
				SOUNDS.image.src = sounds_deactivated;
			}
		}

		SETTINGS_HEADER.update();
		FLIGHT_PATH.update();
		// PAPA_PADDLE.update();
		CURSOR.update();
		SOUNDS.update();

		GAMEAREA.context.font = "15px Arial";
		GAMEAREA.context.fillStyle = "#000";
		GAMEAREA.context.textAlign = "center";
		GAMEAREA.context.fillText( "Press Escape to Return", width/2, height - 50 );
	},

	clicked : function() {
		if (mousePos.x < FLIGHT_PATH.x + FLIGHT_PATH.width &&
			mousePos.x > FLIGHT_PATH.x &&
			mousePos.y < FLIGHT_PATH.y + FLIGHT_PATH.height &&
			mousePos.y > FLIGHT_PATH.y ) 
		{
			//toggle the flight path setting and the activated/deactivated image
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				GAME_SETTINGS.ball.flight_path = false;
				FLIGHT_PATH.image.src = flight_path_deactivated;
			} else {
				GAME_SETTINGS.ball.flight_path = true;
				FLIGHT_PATH.image.src = flight_path_activated;
			}
		}

		// else if (mousePos.x < PAPA_PADDLE.x + PAPA_PADDLE.width &&
		// 	mousePos.x > PAPA_PADDLE.x &&
		// 	mousePos.y < PAPA_PADDLE.y + PAPA_PADDLE.height &&
		// 	mousePos.y > PAPA_PADDLE.y ) 
		// {
		// 	//toggle the flight path setting and the activated/deactivated image
		// 	if ( GAME_SETTINGS.paddle.papa_paddle == true ) {
		// 		GAME_SETTINGS.paddle.papa_paddle = false;
		// 		PAPA_PADDLE.image.src = papa_paddle_deactivated;				
		// 		default_paddle_width = 100;
		// 		big_paddle_width = 175;
		// 		myPaddle.width = default_paddle_width;
		// 	} else {
		// 		GAME_SETTINGS.paddle.papa_paddle = true;
		// 		PAPA_PADDLE.image.src = papa_paddle_activated;
		// 		default_paddle_width = 200;
		// 		big_paddle_width = 300;
		// 		myPaddle.width = default_paddle_width;
		// 	}
		// }

		else if (mousePos.x < CURSOR.x + CURSOR.width &&
			mousePos.x > CURSOR.x &&
			mousePos.y < CURSOR.y + CURSOR.height &&
			mousePos.y > CURSOR.y ) 
		{
			//toggle the flight path setting and the activated/deactivated image
			if ( GAME_SETTINGS.cursor.hidden == true ) {
				GAME_SETTINGS.cursor.hidden = false;
				CURSOR.image.src = cursor_deactivated;				
			} else {
				GAME_SETTINGS.cursor.hidden = true;
				CURSOR.image.src = cursor_activated;
			}
		}

		else if (mousePos.x < SOUNDS.x + SOUNDS.width &&
			mousePos.x > SOUNDS.x &&
			mousePos.y < SOUNDS.y + SOUNDS.height &&
			mousePos.y > SOUNDS.y ) 
		{
			//toggle the flight path setting and the activated/deactivated image
			if ( GAME_SETTINGS.sound.on == true ) {
				GAME_SETTINGS.sound.on = false;
				SOUNDS.image.src = sounds_deactivated;				
			} else {
				GAME_SETTINGS.sound.on = true;
				SOUNDS.image.src = sounds_activated;
			}
		}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.change_scene( GAME_STATE.PREVIOUS_SCENE );
		}
	}
}