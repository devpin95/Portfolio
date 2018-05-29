player = new Player();
myPaddle = new paddle();

var gameScene = {
	setup : function() {
		//reset all level data
		GAME_STATE.reset();
		player.reset();
		balls = [];
		blocks = [];
		walls = [];
		portals = [];
		streaks = [];
		mods = [];
		paddles = [];
		deathzones = [];
		this.stretch_mod_ptr = null;

		myPaddle.width = default_paddle_width;
		myPaddle.is_stretched = false;

		paddles.push(myPaddle);

		balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
		GAME_STATE.BALL_READY = true;

  		levels[GAME_STATE.LEVEL]();

        this.scene_ready = true;
	},

	scene_ready : false,

	draw_level : true,
	draw_level_timer : 0,
	stretch_mod_ptr : null,

	timer_interval : null,

	run : function() {
		if ( this.draw_level ) 
		{
			//document.body.style.cursor = "";
			if ( this.draw_level_timer == 200 ) {
				this.draw_level = false;
				this.timer_interval = setInterval( UI.timer.countTime, 1000 );
			}

			++this.draw_level_timer;

			var xpos = (width/2) - (100 - this.draw_level_timer);

			myGameArea.context.font = "70px Bebas Neue";
			var gradient = myGameArea.context.createLinearGradient(10, 500, 10, 50);
			gradient.addColorStop("0.5","#FDD819");//
			gradient.addColorStop("0","#E80505");
			// Fill with gradient
			myGameArea.context.fillStyle=gradient;
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText("LEVEL " + (GAME_STATE.LEVEL + 1), xpos, height - 200);

			myGameArea.context.font = "20px Bebas Neue";
			myGameArea.context.fillStyle= "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText(GAME_STATE.MESSAGE, xpos - 15, height - 160);

			GAME_STATE.MESSAGE

		}
		
		else if ( !GAME_STATE.IS_PAUSED && !GAME_STATE.WON && !GAME_STATE.LIFE_LOST ) 
		{

			if ( GAME_SETTINGS.cursor.hidden ) {
	        	document.body.style.cursor = "none";
	        }

			if ( GAME_STATE.BALL_READY ) {
				myGameArea.context.font = "20px Arial";
				myGameArea.context.fillStyle = "#000";
				myGameArea.context.textAlign = "center";
				myGameArea.context.fillText( "Click to launch ball", myPaddle.x + ( myPaddle.width / 2 ), myPaddle.y - 40 );
			}

			for ( var i = 0; i < deathzones.length; ++i ) {
				deathzones[i].update();
			}

			//delete a block that was marked for deletion on the previous frame
			if ( block_to_delete != -1 ) {

				//randomly generate a number to determine if a mod should be dropped
				var num = Math.floor( (Math.random() * 10));// + ( 50 * mods.length )) );

				if ( num >= 0 && num <= mod_list.length - 1 ) {
					mods.push( new mod_list[num] );
					mods[ mods.length - 1 ].x = blocks[block_to_delete].center.x;
					mods[ mods.length - 1 ].y = blocks[block_to_delete].center.y;
				}

				//choose a mod to drop from every block for debugging
				// mods.push( new mod_list[1] );
				// mods[ mods.length - 1 ].x = blocks[block_to_delete].center.x;
				// mods[ mods.length - 1 ].y = blocks[block_to_delete].center.y;

				player.score += default_block_score * block_score_multiplyer;
				UI.score.add( default_block_score * block_score_multiplyer );
				blocks.splice( block_to_delete, 1 );
				block_to_delete = -1;
			}

			//update the mods array
			var stretch_mod_active = myPaddle.is_stretched;
			//var stretch_mod_ptr = null;

			if ( !stretch_mod_active ) {
				this.stretch_mod_ptr = null;
			}

			for ( var i = 0; i < mods.length; ++i ) {
				mods[i].update();

				//check if the mod is passed the bottom of the canvas or is no longer active
				if ( !mods[i].is_active || mods[i].y >= height ) {
					//delete the mod
					mods.splice( i, 1 );
					continue;
				}

				//check for a collision with the paddle
				if ( myPaddle.collision( mods[i], true ) ) {
					if ( mods[i] instanceof mod_stretch ) {
						//if there is a stretch mod already active, reset the stretch timer and make mod[i] unactive so that is is deleted on the next frame
						//otherwise, set the stretch mod pointer to point the mods[i] as the new active stretch mod
						if ( this.stretch_mod_ptr === null ) { 
							this.stretch_mod_ptr = mods[i];
							mods[i].activate();
						} else {
							this.stretch_mod_ptr.reset();
							mods[i].is_active = false;
						}
					}

					//activate the mod, if the current mod is a stretch, it will be deleted on the next frame is one is already active
					mods[i].activate();
				}
			}

			//update the streak items
			for ( var i = 0; i < streaks.length; ++i ) {
				streaks[i].update();
				if ( streaks[i].is_done ) {
					streaks.splice( i, 1 );
				}
			}

			//main loops
			for ( var i = 0; i < balls.length; ++i ) 
			{
				//check for collisions with portals
				for ( var j = 0; j < portals.length; ++j ) {
					portals[j].update();	//update each portal
					portals[j].collision( balls[i] );
				}
				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------
				//  ____        _ _       __ __          __   _ _    _____      _ _ _     _                 
				// |  _ \      | | |     / / \ \        / /  | | |  / ____|    | | (_)   (_)                
				// | |_) | __ _| | |    / /   \ \  /\  / /_ _| | | | |     ___ | | |_ ___ _  ___  _ __  ___ 
				// |  _ < / _` | | |   / /     \ \/  \/ / _` | | | | |    / _ \| | | / __| |/ _ \| '_ \/ __|
				// | |_) | (_| | | |  / /       \  /\  / (_| | | | | |___| (_) | | | \__ \ | (_) | | | \__ \
				// |____/ \__,_|_|_| /_/         \/  \/ \__,_|_|_|  \_____\___/|_|_|_|___/_|\___/|_| |_|___/
				//
				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------

				//check for a collision with the game area walls
				var collided_with_wall = myGameArea.collision( balls[i] );
				var dead_ball = false; //bool when true, ball hit deathzone

				//alert(balls[i].free);

				if ( (collided_with_wall.top_bottom || collided_with_wall.left_right) && balls[i].free ) {
					// alert("DEATHZONE CHECK");

					//loop through the deathzones and check for a collision with the ball
					//if there was no collision, bounce the ball off the wall
					for ( var j = 0; j < deathzones.length; ++j ) 
					{
						// alert(JSON.stringify(collided_with_wall));
						//if the deathzone is on the top or bottom and the ball hit the top or bottom wall
						if ( collided_with_wall.top_bottom ) {
							//the ball is hitting the top and the deathzone is on the top wall
							if ( deathzones[j].edge === "top" && balls[i].y <= 50 ) 
							{
								// alert("TOP");
								if ( balls[i].x + balls[i].spdX >= deathzones[j].x && balls[i].x + balls[i].spdX <= deathzones[j].x + deathzones[j].width ) 
								{
									//the hitting the wall within the left and right bounds of the deathzone
									dead_ball = true;
									break;
								}
							}
							//the ball is hitting the bottom and the deathzone is on the bottom wall
							else if ( deathzones[j].edge === "bottom"  && balls[i].y >= height - 50 ) 
							{
								// alert("BOTTOM");
								if ( balls[i].x >= deathzones[j].x && balls[i].x <= deathzones[j].x + deathzones[j].width ) 
								{
									//the hitting the wall within the left and right bounds of the deathzone
									dead_ball = true;
									break;
								}
							}
						}
						else if ( collided_with_wall.left_right ) 
						{
							//if the deathzone is on the left or right and the ball hit the left or right wall
							if ( collided_with_wall.left_right ) 
							{
								//the ball is hitting the left and the deathzone is on the left wall
								if ( deathzones[j].edge === "left" && balls[i].x <= 50 ) 
								{
									// alert("LEFT");
									//the hitting the wall within the top and bottom bounds of the deathzone
									if ( balls[i].y + balls[i].spdY >= deathzones[j].y && balls[i].y + balls[i].spdY <= deathzones[j].y + deathzones[j].height ) 
									{
										dead_ball = true;
										break;
									}
								}
								//the ball is hitting the right and the deathzone is on the right wall
								else if ( deathzones[j].edge === "right" && balls[i].x >= width - 50 ) 
								{
									// alert("RIGHT");
									//the hitting the wall within the top and bottom bounds of the deathzone
									if ( balls[i].y + balls[i].spdY >= deathzones[j].y && balls[i].y + balls[i].spdY <= deathzones[j].y + deathzones[j].height ) 
									{
										dead_ball = true;
										break;
									}
								}
							}
						}
					}

					if ( dead_ball ) {
						//the ball hit a deathzone
						//if there are no more free balls, a life is lost
						balls.splice( i, 1 );
						if ( balls.length == 0 && !GAME_STATE.BALL_READY ) {
							GAME_STATE.LIFE_LOST = true;
							--player.lives;
						}
						continue; //skip to the next ball
					}
					else {
						// alert("DEFAULT BOUNCE");
						//the ball did not hit a deathzone, it hit the wall
						if ( collided_with_wall.top_bottom ) {
							balls[i].spdY *= -1;
						}
						else if ( collided_with_wall.left_right ) {
							balls[i].spdX *= -1;
						}
					}
				}


				//check if the ball went past the bottom of the canvas
				// if ( myGameArea.bottom_hit ) {
				// 	//if it did, remove the ball and deal with the player data
				// 	//GAME_STATE.STOP_TIME = true;
				// 	balls.splice( i, 1 );

				// 	//if there are no more free balls, a life is lost
				// 	if ( balls.length == 0 && !GAME_STATE.BALL_READY ) {
				// 		GAME_STATE.LIFE_LOST = true;
				// 		--player.lives;
				// 	}
				// 	myGameArea.bottom_hit = false;

				// 	//go to the next frame
				// 	continue;
				// }

				for ( var j = 0; j < paddles.length; ++j ) {
					paddles[j].newPos(mousePos.x, mousePos.y);
					paddles[j].update();

					//---------------------------------------------------------------------------------------------------------------------------------
					//---------------------------------------------------------------------------------------------------------------------------------
					//  ____        _ _       __  _____          _     _ _         _____      _ _ _     _                 
					// |  _ \      | | |     / / |  __ \        | |   | | |       / ____|    | | (_)   (_)                
					// | |_) | __ _| | |    / /  | |__) |_ _  __| | __| | | ___  | |     ___ | | |_ ___ _  ___  _ __  ___ 
					// |  _ < / _` | | |   / /   |  ___/ _` |/ _` |/ _` | |/ _ \ | |    / _ \| | | / __| |/ _ \| '_ \/ __|
					// | |_) | (_| | | |  / /    | |  | (_| | (_| | (_| | |  __/ | |___| (_) | | | \__ \ | (_) | | | \__ \
					// |____/ \__,_|_|_| /_/     |_|   \__,_|\__,_|\__,_|_|\___|  \_____\___/|_|_|_|___/_|\___/|_| |_|___/
					//
					//---------------------------------------------------------------------------------------------------------------------------------
					//---------------------------------------------------------------------------------------------------------------------------------
                                                                                                    
					if ( paddles[j].collision( balls[i] ) !== null ) {
						balls[i].streak = 0;
					}
				}

				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------	
				// ____        _ _       __  ____  _            _       _____      _ _ _     _                 
				// |  _ \      | | |     / / |  _ \| |          | |     / ____|    | | (_)   (_)                
				// | |_) | __ _| | |    / /  | |_) | | ___   ___| | __ | |     ___ | | |_ ___ _  ___  _ __  ___ 
				// |  _ < / _` | | |   / /   |  _ <| |/ _ \ / __| |/ / | |    / _ \| | | / __| |/ _ \| '_ \/ __|
				// | |_) | (_| | | |  / /    | |_) | | (_) | (__|   <  | |___| (_) | | | \__ \ | (_) | | | \__ \
				// |____/ \__,_|_|_| /_/     |____/|_|\___/ \___|_|\_\  \_____\___/|_|_|_|___/_|\___/|_| |_|___/
				//
				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------

				//check for collisions with the blocks
				for ( var j = 0; j < blocks.length; ++j ) {

					//check the collision between the ball and the block
					var collided_with = blocks[j].collision( balls[i] );

					//if a ball is colliding with a block, prepare that block for deletion and increment the balls streak
					//decide how the ball should bounce
					if ( collided_with !== null ) {

						//change the velocity of the ball
						if ( collided_with.left_right ) {
							balls[i].spdX *= -1;
						} else {
							balls[i].spdY *= -1;
						}

						block_to_delete = j; //prepare block to be deleted on next frame

						++balls[i].streak;
						if ( balls[i].streak >= 2 ) {
							streaks.push( new streak( blocks[ block_to_delete ].center.x, blocks[ block_to_delete ].center.y, "+" + ( streak_multiplyer * balls[i].streak * block_score_multiplyer ) ) );
							player.score += streak_multiplyer * balls[i].streak * block_score_multiplyer;
							UI.score.add( streak_multiplyer * balls[i].streak * block_score_multiplyer );
						}
					}

					//if a ball is colliding with a block, prepare that block for deletion and increment the balls streak
					// if ( blocks[j].collision( balls[i] ) ) {
					// 	block_to_delete = j; //prepare block to be deleted on next frame
					// 	++balls[i].streak;
					// 	if ( balls[i].streak >= 2 ) {
					// 		streaks.push( new streak( blocks[ block_to_delete ].center.x, blocks[ block_to_delete ].center.y, "+" + ( streak_multiplyer * balls[i].streak * block_score_multiplyer ) ) );
					// 		player.score += streak_multiplyer * balls[i].streak * block_score_multiplyer;
					// 		UI.score.add( streak_multiplyer * balls[i].streak * block_score_multiplyer );
					// 	}
					// }

					blocks[j].update();
				}

				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------
				//  ____        _ _       __ __          __   _ _            ____  _            _       _____      _ _ _     _                 
				// |  _ \      | | |     / / \ \        / /  | | |          |  _ \| |          | |     / ____|    | | (_)   (_)                
				// | |_) | __ _| | |    / /   \ \  /\  / /_ _| | |  ______  | |_) | | ___   ___| | __ | |     ___ | | |_ ___ _  ___  _ __  ___ 
				// |  _ < / _` | | |   / /     \ \/  \/ / _` | | | |______| |  _ <| |/ _ \ / __| |/ / | |    / _ \| | | / __| |/ _ \| '_ \/ __|
				// | |_) | (_| | | |  / /       \  /\  / (_| | | |          | |_) | | (_) | (__|   <  | |___| (_) | | | \__ \ | (_) | | | \__ \
				// |____/ \__,_|_|_| /_/         \/  \/ \__,_|_|_|          |____/|_|\___/ \___|_|\_\  \_____\___/|_|_|_|___/_|\___/|_| |_|___/
				//
				//---------------------------------------------------------------------------------------------------------------------------------
				//---------------------------------------------------------------------------------------------------------------------------------

				//check for collisions with walls
				for ( var k = 0; k < walls.length; ++k ) {
					var collided_with = walls[k].collision( balls[i] );

					if ( collided_with !== null ) {
						if ( collided_with.left_right ) {
							balls[i].spdX *= -1;
						} else {
							balls[i].spdY *= -1;
						}
					}

					walls[k].update();
				}

				balls[i].newPos();
				balls[i].update();
			}

			if ( blocks.length == 0 ) {
				GAME_STATE.WON = true;

				player.score += bonuses[0]( player.lives );
				player.score += bonuses[1]( UI.timer.total_time );
				if ( player.lives == 3 ) {
					player.score += bonuses[2]( );
				}
				player.score += bonuses[3]( myPaddle.numberHits );
			} 
		} 

		//handle a win
		else if ( !GAME_STATE.IS_PAUSED && GAME_STATE.WON ) 
		{
			//set the player score and level_complete
			player.levels_complete[GAME_STATE.LEVEL] = true;
			player.level_scores[GAME_STATE.LEVEL] = UI.score.total;

			//prepare the scene to be changed to the level cleared screen
			document.body.style.cursor = "";
			this.scene_ready = false;
			GAME_STATE.ACTIVE_SCENE = SCENES.LEVEL_CLEAR_SCENE;
			GAME_STATE.reset();
			clearInterval(this.timer_interval);
		} 

		//handle a life lost
		else if ( GAME_STATE.LIFE_LOST && !GAME_STATE.IS_PAUSED && !GAME_STATE.WON ) 
		{
			if ( player.lives >= 0 ) {
				if ( balls.length == 0 ) {
					//make a new ball
					balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
					GAME_STATE.BALL_READY = true;
					for ( var i = 0; i < mods.length; ++i ) {
						if ( !mods[i].is_active ) {
							mods.splice( i, 1 );
						}
						//mods = []; //clear the mods that are falling
					}
					UI.lives.down();	
				}

				GAME_STATE.LIFE_LOST = false; 
			} 

			//Lost the game
			else if ( player.lives < 0 ) {
				document.body.style.cursor = "";
				this.scene_ready = false;
				GAME_STATE.ACTIVE_SCENE = SCENES.GAME_OVER_SCENE;
				GAME_STATE.reset();
				clearInterval(this.timer_interval);
			} 
			else 
			{
				GAME_STATE.LIFE_LOST = false;
			}
		}
	},

	clicked : function( e ) {
		if ( GAME_STATE.WON ) {
    		GAME_STATE.WON = false;
    	} 

    	else if ( this.draw_level ) 
    	{
    		this.draw_level_timer = 200;
    	}

    	else if ( GAME_STATE.BALL_READY && !GAME_STATE.IS_PAUSED && !this.draw_level ) 
    	{
    		//there is a ball ready to be launched
			GAME_STATE.BALL_READY = false; 

			//go through the balls array and find the first one that is not free
			for ( var i = 0; i < balls.length; ++i ) {
				if ( !balls[i].free ) {
					balls[i].free = true;
					balls[i].spdY = -maxBallSpeed;

					if ( GAME_SETTINGS.paddle.papa_paddle ) 
					{
						var spd_x = Math.floor(Math.random()*2) == 1 ? 1 : -1;
						balls[i].spdX = spd_x * maxBallSpeed;
					} 

					else 
					{
						var spd_x = (Math.random() * maxBallSpeed) + 1;
						spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
						balls[i].spdX = spd_x;
					}

					break;
				}
			}
    	}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			document.body.style.cursor = "";
			GAME_STATE.STOP_TIME = true;
			GAME_STATE.change_scene( SCENES.PAUSED_SCENE );
		}
	},

	reset_level : function( ) {
		this.scene_ready = false;
		GAME_STATE.reset();
		UI.reset();
		clearInterval(this.timer_interval);
		this.draw_level = true;
		this.draw_level_timer = 0;
		//this.setup();
	}
}