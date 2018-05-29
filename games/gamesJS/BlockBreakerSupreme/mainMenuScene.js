var LOGO;

var mainMenuScene = {
	setup : function() {
		//bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
		LOGO = new block( 260, 40, "gamesAssets/BlockBreakerSupreme/logo.png", ( myGameArea.canvas.width / 2 ) - 130, 75, 0, "image" );

		var play_button = "gamesAssets/BlockBreakerSupreme/mode_play_button.png";
		var play_button_hover = "gamesAssets/BlockBreakerSupreme/mode_play_button_hover.png";
		var settings_button = "gamesAssets/BlockBreakerSupreme/settings_button.png";
		var settings_button_hover = "gamesAssets/BlockBreakerSupreme/settings_button_hover.png";
		var mode_classic_image = "gamesAssets/BlockBreakerSupreme/mode_classic.png";

		this.mode_classic = new block( 274, 317, mode_classic_image, 53 + 274 + 10, 125, 0, "image" );

		//create the menu
		this.menu = new menu();

		//x1, x2, y1, y2, type, image, image_hover, callback
		var classic_center_x = (this.mode_classic.x + (this.mode_classic.width / 2)) - (75/2);
		var modes_y = (this.mode_classic.y + this.mode_classic.height) - 50;
		this.menu.add( classic_center_x , classic_center_x, modes_y, modes_y, "image", play_button, play_button_hover, function() {
			this.menu_balls = [];
			GAME_STATE.change_scene( SCENES.C_MODE_LVL_SELECT );
			GAME_STATE.MESSAGE = "Classic Mode";
		} );
		this.menu.add( ( myGameArea.canvas.width / 2 ) - 45, ( myGameArea.canvas.width / 2 ) - 55, height - 55, height - 60, "image", settings_button, settings_button_hover, function() {
			GAME_STATE.change_scene( SCENES.SETTINGS_SCENE );
		} );

		//make a ball with a random x,y position and random spdx
		this.menu_balls.push( new ball( 15, 15, default_ball_image, width / 2, height / 2, "image" ) );
		var spd_x = (Math.random() * maxBallSpeed) + 1;
		spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		this.menu_balls[0].spdX = spd_x;
		this.menu_balls[0].spdY = Math.floor(Math.random()*2) == 1 ? maxBallSpeed : -maxBallSpeed;
		var pos_x = (Math.random() * ( width - 45 )) + 45;
		this.menu_balls[0].x = pos_x;
		var pos_y = (Math.random() * ( height - 45 )) + 45;
		this.menu_balls[0].y = pos_y;
		this.menu_balls[0].free = true;

		this.scene_ready = true;
	},

	menu : null,
	mode_classic : null,
	mode_double_trouble : null,
	mode_survival : null,
	scene_ready : false,

	menu_balls : [],

	run : function() {

		LOGO.update();
		this.mode_classic.update();
		this.menu.hovering( mousePos.x, mousePos.y );
		this.menu.update();

		for ( var i = 0; i < this.menu_balls.length; ++i ) {
			myGameArea.collision( this.menu_balls[i] );

			if ( myGameArea.bottom_hit ) {
				this.menu_balls[i].y = height - this.menu_balls[i].height;
				this.menu_balls[i].spdY *= -1;
				myGameArea.bottom_hit = false;
			}

			this.menu_balls[i].newPos();
			this.menu_balls[i].update();
		}
	},

	clicked : function() {

		if ( !this.menu.click( mousePos.x, mousePos.y ) )
		{
			this.menu_balls.push( new ball( 15, 15, default_ball_image, mousePos.x, mousePos.y, "image" ) );

			//https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
			var spd_x = (Math.random() * maxBallSpeed) + 1;
			spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
			this.menu_balls[this.menu_balls.length - 1].spdX = spd_x;
			this.menu_balls[this.menu_balls.length -1].spdY = Math.floor(Math.random()*2) == 1 ? maxBallSpeed : -maxBallSpeed;
			this.menu_balls[this.menu_balls.length - 1].free = true;
		}
	},

	button_press : function( e ) {
		return
	}
};