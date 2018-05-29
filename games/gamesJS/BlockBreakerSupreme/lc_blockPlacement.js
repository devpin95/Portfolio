var test_blocks = [];

var blockPlacementScene = {
	run : function() {
			active_block.x = mousePos.x - ( active_block.width / 2);
			active_block.y = mousePos.y - ( active_block.height / 2);

		//---------------------------------------------------------------------------------------------------------------------------------------------------------
		//  _   _                   __ __     __           _         _     _  _                                        _        
		// | | | |  ___   _ __     / / \ \   / /___  _ __ | |_      / \   | |(_)  __ _  _ __   _ __ ___    ___  _ __  | |_  ___ 
		// | |_| | / _ \ | '__|   / /   \ \ / // _ \| '__|| __|    / _ \  | || | / _` || '_ \ | '_ ` _ \  / _ \| '_ \ | __|/ __|
		// |  _  || (_) || |     / /     \ V /|  __/| |   | |_    / ___ \ | || || (_| || | | || | | | | ||  __/| | | || |_ \__ \
		// |_| |_| \___/ |_|    /_/       \_/  \___||_|    \__|  /_/   \_\|_||_| \__, ||_| |_||_| |_| |_| \___||_| |_| \__||___/
		//                                                                       |___/   
		// 
		// Aligning the active block with the horizontal or vertical center-point axis of another block                                                               
		//---------------------------------------------------------------------------------------------------------------------------------------------------------
		for ( var i = 0; i < test_blocks.length; ++i ) {
			if ( active_block.is_wall ) break;
			if ( test_blocks[i].is_portal || test_blocks[i].is_wall || test_blocks[i].is_deathzone ) continue;

			//check if the block is centered vertically with another block
			if ( ( mousePos.x <= test_blocks[i].center.x + 5 && mousePos.x >= test_blocks[i].center.x - 5 )  && placement_guides.vertical_centering != true ) {

				//alert("CENTERING V");

				active_block.x = test_blocks[i].x;

				//force the x and y coordinated
				//if the block is currently being centered horizontally, dont change the forced_placement y
				placement_guides.forced_placement.x = test_blocks[i].x;
				( placement_guides.horizontal_centering ) ? null : placement_guides.forced_placement.y = mousePos.y - ( active_block.height / 2 );

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( test_blocks[i].center.x, 0 );
				ctx.lineTo( test_blocks[i].center.x, height );
				ctx.strokeStyle = '#00f';
				ctx.stroke();

				placement_guides.vertical_centering = true;
				break;
			} else {
				//it is not centered with it
				placement_guides.vertical_centering = false;
			}
		}

		for ( var i = 0; i < test_blocks.length; ++i ) {
			if ( active_block.is_wall ) break;
			if ( test_blocks[i].is_portal || test_blocks[i].is_wall || test_blocks[i].is_deathzone ) continue;

			//check if the block is centered horizontally with another block
			//placement_guides.horizontal_centering != true
			if ( 
				( 
					mousePos.y <= test_blocks[i].center.y + 10 && 
					mousePos.y >= test_blocks[i].center.y - 10 
				) && 
				( 
					mousePos.x >= test_blocks[i].right_edge + ( active_block.width/2 ) ||  
					mousePos.x <= test_blocks[i].left_edge - ( active_block.width/2 ) 
				) 
			   ) 
			{
				
				//alert("CENTERING H");

				active_block.y = test_blocks[i].y;

				//force the x and y coordinated
				//if the block is currently being centered vertically, dont change the forced_placement x
				( placement_guides.vertical_centering ) ? null : placement_guides.forced_placement.x = mousePos.x  - ( active_block.width / 2 );
				placement_guides.forced_placement.y = test_blocks[i].y;

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( 0, test_blocks[i].center.y );
				ctx.lineTo( width, test_blocks[i].center.y );
				ctx.strokeStyle = '#00f';
				ctx.stroke();

				placement_guides.horizontal_centering = true;
				break;
			} else {
				placement_guides.horizontal_centering = false;
			}
		}

		//---------------------------------------------------------------------------------------------------------------------------------------------------------
		//  _____                  __  ____          _    _                         _     _  _                                        _        
		// |_   _|___   _ __      / / | __ )   ___  | |_ | |_  ___   _ __ ___      / \   | |(_)  __ _  _ __   _ __ ___    ___  _ __  | |_  ___ 
		//   | | / _ \ | '_ \    / /  |  _ \  / _ \ | __|| __|/ _ \ | '_ ` _ \    / _ \  | || | / _` || '_ \ | '_ ` _ \  / _ \| '_ \ | __|/ __|
		//   | || (_) || |_) |  / /   | |_) || (_) || |_ | |_| (_) || | | | | |  / ___ \ | || || (_| || | | || | | | | ||  __/| | | || |_ \__ \
		//   |_| \___/ | .__/  /_/    |____/  \___/  \__| \__|\___/ |_| |_| |_| /_/   \_\|_||_| \__, ||_| |_||_| |_| |_| \___||_| |_| \__||___/
		//             |_|                                                                      |___/         
		// 
		// Only if no horizontal forced-alignment is being enforced
		// Aligning the active block with the top or edge edge of another block                                 
		//---------------------------------------------------------------------------------------------------------------------------------------------------------

		if ( !placement_guides.horizontal_centering ) {
			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( active_block.is_wall ) break;
				if ( test_blocks[i].is_portal || test_blocks[i].is_wall || test_blocks[i].is_deathzone ) continue;

				//check if the block is locked against the top edge of other blocks
				if ( mousePos.y + ( active_block.height / 2 ) >= test_blocks[i].top_edge - 5 && mousePos.y <= test_blocks[i].center.y && 
					( 
						mousePos.x <= test_blocks[i].right_edge + ( active_block.width/2 ) ||  
						mousePos.x >= test_blocks[i].left_edge - ( active_block.width/2 ) 
					)  
				   ) 
				{
					//alert("HERE!");
					active_block.y = test_blocks[i].y - active_block.height;

					//force the x and y coordinated
					//if the block is currently being centered vertically, dont change the forced_placement x
					// ( placement_guides.vertical_centering ) ? null : placement_guides.forced_placement.x = mousePos.x  - ( active_block.width / 2 );
					// placement_guides.forced_placement.y = test_blocks[i].y;

					placement_guides.forced_placement.y = test_blocks[i].y - active_block.height;
					( placement_guides.vertical_centering ) ? null : placement_guides.forced_placement.x = mousePos.x  - ( active_block.width / 2 );


					ctx.globalCompositeOperation='destination-over';
					ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
					ctx.beginPath();
					ctx.moveTo( 0, test_blocks[i].y );
					ctx.lineTo( width, test_blocks[i].y );
					ctx.strokeStyle = '#00f';
					ctx.stroke();

					placement_guides.hugging_tb = true;
					break;
				} 

				else if ( mousePos.y - ( active_block.height / 2 ) <= test_blocks[i].bottom_edge + 5 && mousePos.y >= test_blocks[i].center.y && !placement_guides.hugging_tb )
			 	{
			 		//check if the block is locked against the bottom edge of other blocks
					active_block.y = test_blocks[i].y + active_block.height;

					//force the x and y coordinated
					//if the block is currently being centered vertically, dont change the forced_placement x
					// ( placement_guides.vertical_centering ) ? null : placement_guides.forced_placement.x = mousePos.x  - ( active_block.width / 2 );
					// placement_guides.forced_placement.y = test_blocks[i].y;

					placement_guides.forced_placement.y = test_blocks[i].y + test_blocks[i].height;
					( placement_guides.vertical_centering ) ? mousePos.x : placement_guides.forced_placement.x = mousePos.x  - ( active_block.width / 2 );


					ctx.globalCompositeOperation='destination-over';
					ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
					ctx.beginPath();
					ctx.moveTo( 0, test_blocks[i].bottom_edge );
					ctx.lineTo( width, test_blocks[i].bottom_edge );
					ctx.strokeStyle = '#00f';
					ctx.stroke();

					placement_guides.hugging_tb = true;
				}

				else {
					placement_guides.hugging_tb = false;
				}
			}
		}

		//---------------------------------------------------------------------------------------------------------------------------------------------------------
		//  _            __  _        __  ____   _         _      _        _     _  _                                        _        
		// | |     ___  / _|| |_     / / |  _ \ (_)  __ _ | |__  | |_     / \   | |(_)  __ _  _ __   _ __ ___    ___  _ __  | |_  ___ 
		// | |    / _ \| |_ | __|   / /  | |_) || | / _` || '_ \ | __|   / _ \  | || | / _` || '_ \ | '_ ` _ \  / _ \| '_ \ | __|/ __|
		// | |___|  __/|  _|| |_   / /   |  _ < | || (_| || | | || |_   / ___ \ | || || (_| || | | || | | | | ||  __/| | | || |_ \__ \
		// |_____|\___||_|   \__| /_/    |_| \_\|_| \__, ||_| |_| \__| /_/   \_\|_||_| \__, ||_| |_||_| |_| |_| \___||_| |_| \__||___/
		//                                          |___/                              |___/      
		// 
		// Only if no vertical forced-alignment is being enforced
		// Aligning the active block with the left or right edge of another block
		//---------------------------------------------------------------------------------------------------------------------------------------------------------

		if ( !placement_guides.vertical_centering ) {
			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( active_block.is_wall ) break;
				if ( test_blocks[i].is_portal || test_blocks[i].is_wall || test_blocks[i].is_deathzone ) continue;

				if ( mousePos.x <= test_blocks[i].right_edge + ( active_block.width / 2 ) + 5 && mousePos.x >= test_blocks[i].right_edge + ( active_block.width / 2 ) - 5 ) 
				{
					//check if the block is locked against the right edge of other blocks
					active_block.x = test_blocks[i].x + active_block.width;

					placement_guides.forced_placement.x = test_blocks[i].x + test_blocks[i].width;
					//( placement_guides.hugging_tb ) ? null : placement_guides.forced_placement.y = mousePos.y;
					if ( !placement_guides.hugging_tb ) {
						placement_guides.forced_placement.y = mousePos.y - ( active_block.height / 2 );
					}


					ctx.globalCompositeOperation='destination-over';
					ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
					ctx.beginPath();
					ctx.moveTo( test_blocks[i].right_edge, 0 );
					ctx.lineTo( test_blocks[i].right_edge, height );
					ctx.strokeStyle = '#00f';
					ctx.stroke();

					placement_guides.hugging_lr = true;
				}

				else if ( mousePos.x >= test_blocks[i].left_edge - ( active_block.width / 2 ) - 5 && mousePos.x <= test_blocks[i].left_edge - ( active_block.width / 2 ) + 5 && !placement_guides.hugging_lr ) 
				{
					//check if the block is locked against the left edge of other blocks
					active_block.x = test_blocks[i].x - active_block.width;

					placement_guides.forced_placement.x = test_blocks[i].x - active_block.width;
					( placement_guides.hugging_tb ) ? null : placement_guides.forced_placement.y = mousePos.y;


					ctx.globalCompositeOperation='destination-over';
					ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
					ctx.beginPath();
					ctx.moveTo( test_blocks[i].left_edge, 0 );
					ctx.lineTo( test_blocks[i].left_edge, height );
					ctx.strokeStyle = '#00f';
					ctx.stroke();

					placement_guides.hugging_lr = true;
				}

				else 
				{
					placement_guides.hugging_lr = false;
				}
			}
		}

		//---------------------------------------------------------------------------------------------------------------------------------------------------------
		//   ____                                      _     _  _                                        _        
		//  / ___| __ _  _ __ __   __ __ _  ___       / \   | |(_)  __ _  _ __   _ __ ___    ___  _ __  | |_  ___ 
		// | |    / _` || '_ \\ \ / // _` |/ __|     / _ \  | || | / _` || '_ \ | '_ ` _ \  / _ \| '_ \ | __|/ __|
		// | |___| (_| || | | |\ V /| (_| |\__ \    / ___ \ | || || (_| || | | || | | | | ||  __/| | | || |_ \__ \
		//  \____|\__,_||_| |_| \_/  \__,_||___/   /_/   \_\|_||_| \__, ||_| |_||_| |_| |_| \___||_| |_| \__||___/
		//                                                         |___/           
		// 
		// Only if no other forced-alignments are being enforced
		// Aligning the active block with the horizontal or vertical axis of the canvas area
		//---------------------------------------------------------------------------------------------------------------------------------------------------------

		if ( !placement_guides.vertical_centering ) {
			if ( mousePos.x >= (width / 2) - 5 && mousePos.x <= (width / 2) + 5 ) {
				//check if the active block should be centered with the canvas vertically
				active_block.x = (width / 2) - (active_block.width / 2);

				placement_guides.forced_placement.x = (width / 2) - (active_block.width / 2);
				//( placement_guides.c_horizontal_centering ) ? null : placement_guides.forced_placement.y = mousePos.y - (active_block.height / 2);
				if ( !placement_guides.horizontal_centering ) {
					placement_guides.forced_placement.y = mousePos.y - (active_block.height / 2)
				}


				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( width/2, 0 );
				ctx.lineTo( width/2, height );
				ctx.strokeStyle = '#00f';
				ctx.stroke();

				placement_guides.c_vertical_centering = true;
			} else {
				placement_guides.c_vertical_centering = false;
			}
		}

		if ( !placement_guides.horizontal_centering ) {
			if ( mousePos.y >= (height / 2) - 5 && mousePos.y <= (height/2) + 5 ) {
				//check if the active block should be centered with the canvas horizontally
				active_block.y = (height / 2) - (active_block.height / 2);

				//( placement_guides.vertical_centering ) ? null : placement_guides.forced_placement.x = mousePos.x - (active_block.width / 2);
				if ( !placement_guides.c_vertical_centering && !placement_guides.vertical_centering ) {
					 placement_guides.forced_placement.x = mousePos.x - (active_block.width / 2)
				}
				placement_guides.forced_placement.y = (height / 2) - (active_block.height / 2);

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( 0, height/2 );
				ctx.lineTo( width, height/2 );
				ctx.strokeStyle = '#00f';
				ctx.stroke();

				placement_guides.c_horizontal_centering = true;
			} else {
				placement_guides.c_horizontal_centering = false;
			}
		}
	},

	click_down : function(e) {
	   	var xpos, ypos;
    	if ( placement_guides.vertical_centering || placement_guides.horizontal_centering || placement_guides.hugging_tb || placement_guides.hugging_lr || placement_guides.c_vertical_centering || placement_guides.c_horizontal_centering ) {
    		xpos = placement_guides.forced_placement.x;
    		ypos = placement_guides.forced_placement.y;
    	} else {
    		xpos = mousePos.x - ( active_block.width / 2 );
    		ypos = mousePos.y - ( active_block.height / 2 )
    	}

		if ( selection.blocks.wall ) {
			//alert("LAY A AWALL");
			//width, height, src, x, y, type, health = 1 
    		level_object.blocks.push( new placement_code(
    			PLACEMENT_WALL.width,
    			PLACEMENT_WALL.height,
    			active_block.image.src,
    			xpos, // - ( SMALL_BLOCK_DIMENSIONS.width / 2 ), //https://open.spotify.com/track/1hlSU2dSXytehUIWL16kaox
    			ypos, // - ( SMALL_BLOCK_DIMENSIONS.height / 2 ), //y
    			"wall",
    			active_block.orientation
			) );
			//level_object.blocks[ test_blocks.length - 1 ].orientation = active_block.orientation;
    		//console.log( JSON.stringify( level_object, undefined, 4 ) );

    		//width, height, color, x, y, health = 1, type = "color"
    		test_blocks.push( new block( 
				PLACEMENT_WALL.width,
    			PLACEMENT_WALL.height,
    			active_block.image.src,
    			xpos, // - ( SMALL_BLOCK_DIMENSIONS.width / 2 ), //x
    			ypos, // - ( SMALL_BLOCK_DIMENSIONS.height / 2 ), //y
    			1,
    			"image" 
			) );
			test_blocks[ test_blocks.length - 1 ].is_wall = true;
			test_blocks[ test_blocks.length - 1 ].orientation = active_block.orientation;
		}

		//do not allow blocks to be placed in invalid areas
		if ( !validPlacement( active_block ) ) {
    		return;
    	}

    	if ( selection.blocks.big ) {
    		//width, height, src, x, y, type, health = 1 
    		level_object.blocks.push( new placement_code(
    			BIG_BLOCK_DIMENSIONS.width,
    			BIG_BLOCK_DIMENSIONS.height,
    			block_assets["big"][selection.color],
    			xpos,
    			ypos,
    			"big_block"
			) );

    		test_blocks.push( new block( 
				BIG_BLOCK_DIMENSIONS.width,
    			BIG_BLOCK_DIMENSIONS.height,
    			block_assets["big"][selection.color],
    			xpos,
    			ypos, 
    			1,
    			"image" 
			) );
    	} 
    	else if ( selection.blocks.small ) {
    		//width, height, src, x, y, type, health = 1 
    		level_object.blocks.push( new placement_code(
    			SMALL_BLOCK_DIMENSIONS.width,
    			SMALL_BLOCK_DIMENSIONS.height,
    			block_assets["small"][selection.color],
    			xpos, // - ( SMALL_BLOCK_DIMENSIONS.width / 2 ), //https://open.spotify.com/track/1hlSU2dSXytehUIWL16kaox
    			ypos, // - ( SMALL_BLOCK_DIMENSIONS.height / 2 ), //y
    			"small_block"
			) );
    		//console.log( JSON.stringify( level_object, undefined, 4 ) );

    		//width, height, color, x, y, health = 1, type = "color"
    		test_blocks.push( new block( 
				SMALL_BLOCK_DIMENSIONS.width,
    			SMALL_BLOCK_DIMENSIONS.height,
    			block_assets["small"][selection.color],
    			xpos, // - ( SMALL_BLOCK_DIMENSIONS.width / 2 ), //x
    			ypos, // - ( SMALL_BLOCK_DIMENSIONS.height / 2 ), //y
    			1,
    			"image" 
			) );
		}
	},

	click_up : function(e) {

	},

	buttonPress : function(e) {
		//ctrl-z == 17 && 90
		//undo
    	if ( pressed_buttons[17] && pressed_buttons[90] )  {
    		if ( test_blocks.length >= 0 ) {
        		test_blocks.pop();
        		deleted_blocks.push( level_object.blocks[ level_object.blocks.length - 1 ] );
        		level_object.blocks.pop();
        	}
    	}     	
    	//ctrl-y == 17 && 90
    	//redo
    	else if ( pressed_buttons[17] && pressed_buttons[89] ) {
    		if ( deleted_blocks.length >= 0 ) {
        		var blk = deleted_blocks.pop();
        		level_object.blocks.push( blk );
        		//width, height, color, x, y, health = 1, type = "color"
        		test_blocks.push( new block( blk.width, blk.height, blk.src, blk.x, blk.y, blk.health, "image" ) );
        	}
    	}

    	//cancel the current wall placement
    	else if ( e.keyCode == 27 && SCENES.wall.laying ) {
    		PLACEMENT_WALL.x = -100;
    		PLACEMENT_WALL.y = -100;
 			SCENES.wall.laying = false;
    		ACTIVE_SCENE = SCENES.wall;
    	}

    	//moving the block by arrow-keys
    	else if ( e.keyCode == 40 && SCENES.wall.laying ) {
    		//move it down
    		document.body.style.cursor = "none";
    		mousePos.y += 1;
    	} else if ( e.keyCode == 39 && SCENES.wall.laying ) {
    		//move it right
    		document.body.style.cursor = "none";
    		mousePos.x += 1;
    	} else if ( e.keyCode == 38 && SCENES.wall.laying ) {
    		//move it up
    		document.body.style.cursor = "none";
    		mousePos.y -= 1;
    	} else if ( e.keyCode == 37 && SCENES.wall.laying ) {
    		//move it lefy
    		document.body.style.cursor = "none";
    		mousePos.x -= 1;
    	} else if ( e.keyCode == 13 && SCENES.wall.laying ) {
    		this.click_down();
    	}
	},

	blur : function() {
		active_block.x = -100;
		active_block.y = -100;
	}
}