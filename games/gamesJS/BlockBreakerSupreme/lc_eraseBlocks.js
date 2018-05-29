var eraseBlocksScene = {
	run : function() {
		if ( mousePos.down ) {
			for ( var i = test_blocks.length - 1; i >= 0; --i ) {
				if ( mousePos.x >= test_blocks[i].left_edge && mousePos.x <= test_blocks[i].right_edge && mousePos.y >= test_blocks[i].top_edge && mousePos.y <= test_blocks[i].bottom_edge ){
					test_blocks.splice( i, 1 );
					level_object.blocks.splice( i, 1 );
					mousePos.down = false;
					break;
				}
			}
		}
	},

	click_down : function() {
		mousePos.down = true;
		for ( var i = test_blocks.length - 1; i >= 0; --i ) {
			if ( mousePos.x >= test_blocks[i].left_edge && mousePos.x <= test_blocks[i].right_edge && mousePos.y >= test_blocks[i].top_edge && mousePos.y <= test_blocks[i].bottom_edge ){
				test_blocks.splice( i, 1 );
				level_object.blocks.splice( i, 1 );
				mousePos.down = false;
				break;
			}
		}
	},

	click_up : function() {
		mousePos.down = false;
	},

	buttonPress : function(e) {
		
	},

	blur : function() {

	}
}