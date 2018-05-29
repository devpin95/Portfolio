var wallPlacementScene = {
	placement_wall : null,
	wall_guides : {
		path : "assets/lc_wall_guide.png",
		tl : null,
		tr : null,
		bl : null,
		br : null,
		default_size : 20
	},
	origin : {
		x : 0,
		y : 0
	},
	clicks : 0,

	orientation : "horizontal",
	laying : false,
	editing_mode : false,

	setup : function () {
		this.placement_wall = new block( 0, 0, "rgba( 0,0,0,0 )", -100, -100, health = 1, type = "color" );
		this.wall_guides.tl = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.tr = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.bl = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.br = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
	},

	run : function() {

		if ( this.clicks == 0 ) {
			this.wall_guides.tl.x = -100;
			this.wall_guides.tl.y = -100;
			this.wall_guides.tr.x = -100;
			this.wall_guides.tr.y = -100;
			this.wall_guides.bl.x = -100;
			this.wall_guides.bl.y = -100;
			this.wall_guides.br.x = -100;
			this.wall_guides.br.y = -100;

			this.placement_wall.x = -100;
			this.placement_wall.y = -100;
			this.placement_wall.width = 0;
			this.placement_wall.height = 0;
		}

		else if ( this.clicks == 1 ) 
		{
			//----------------------------------------------------------------------------------------------------------------
			//  _   _            _                _        _    __        __    _ _ 
			// | | | | ___  _ __(_)_______  _ __ | |_ __ _| |   \ \      / /_ _| | |
			// | |_| |/ _ \| '__| |_  / _ \| '_ \| __/ _` | |    \ \ /\ / / _` | | |
			// |  _  | (_) | |  | |/ / (_) | | | | || (_| | |     \ V  V / (_| | | |
			// |_| |_|\___/|_|  |_/___\___/|_| |_|\__\__,_|_|      \_/\_/ \__,_|_|_|
			//
			//----------------------------------------------------------------------------------------------------------------
			if ( this.orientation == "horizontal" ) 
			{
				var dx;
				dx = mousePos.x - this.origin.x;

				if ( mousePos.x >= this.origin.x ) 
				{
					//make the wall horizontal to the right
					//shift is being pressed
					if ( pressed_buttons[16] ) {
						if ( dx < 75 ) {
							this.placement_wall.width = 75;
						} else {
							this.placement_wall.width = Math.floor( dx / 75 ) * 75;
						}
					}
					else {
						//move the right edge of the wall to the right of the origin
						this.placement_wall.width = dx;
						this.placement_wall.height = this.wall_guides.default_size;
					}
				} 

				else if ( mousePos.x <= this.origin.x ) 
				{
					//the mouse is left of the origin, so make the origin the mouse x and the width the distance between 
					//the new origin and the old origin (shift it back and make the right edge the x of the old origin)
					dx = Math.abs( mousePos.x - this.origin.x );
					
					if ( pressed_buttons[16] ) {
						if ( dx < 75 ) {
							this.placement_wall.width = 75;
							//this.placement_wall.x = mousePos.x;
						} else {
							this.placement_wall.width = Math.floor( dx / 75 ) * 75;
							//this.placement_wall.x = mousePos.x;
						}
					}
					else {
						this.placement_wall.width = dx;
						this.placement_wall.height = this.wall_guides.default_size;
						this.placement_wall.x = mousePos.x;
					}
				}
			}

			//----------------------------------------------------------------------------------------------------------------
			// __     __        _   _           _   __        __    _ _ 
			// \ \   / /__ _ __| |_(_) ___ __ _| |  \ \      / /_ _| | |
			//  \ \ / / _ \ '__| __| |/ __/ _` | |   \ \ /\ / / _` | | |
			//   \ V /  __/ |  | |_| | (_| (_| | |    \ V  V / (_| | | |
			//    \_/ \___|_|   \__|_|\___\__,_|_|     \_/\_/ \__,_|_|_|
			//----------------------------------------------------------------------------------------------------------------
			else if ( this.orientation == "vertical" ) 
			{
				var dy;
				dy = mousePos.y - this.origin.y;
				if ( mousePos.y >= this.origin.y ) 
				{
					if ( pressed_buttons[16] ) {
						if ( dy < 75 ) {
							this.placement_wall.height = 75;
							//this.placement_wall.x = mousePos.x;
						} else {
							this.placement_wall.height = Math.floor( dy / 75 ) * 75;
							//this.placement_wall.x = mousePos.x;
						}
					}
					else {
						//make the wall vertical
						//move the right edge of the wall to the right of the origin
						this.placement_wall.width = this.wall_guides.default_size;
						this.placement_wall.height = dy;
					}

				}
			}

			//now display the guides
			//top nodes
			this.wall_guides.tl.x = this.placement_wall.x + ( 5 / 2 );
			this.wall_guides.tl.y = this.placement_wall.y + ( 5 / 2 );
			this.wall_guides.tr.x = (this.placement_wall.x + this.placement_wall.width) + ( 5 / 2 );
			this.wall_guides.tr.y = this.origin.y + ( 5 / 2 );

			//bottom nodes
			this.wall_guides.bl.x = this.placement_wall.x + ( 5 / 2 );
			this.wall_guides.bl.y = ( this.placement_wall.y + this.placement_wall.height ) + ( 5 / 2 );
			this.wall_guides.br.x = (this.placement_wall.x + this.placement_wall.width) + ( 5 / 2 );
			this.wall_guides.br.y = ( this.placement_wall.y + this.placement_wall.height ) + ( 5 / 2 );

			//draw lines between nodes
			var ctx = myGameArea.canvas.getContext("2d");
			//top left to top right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.tl.center.x, this.wall_guides.tl.center.y );
			ctx.lineTo( this.wall_guides.tr.center.x, this.wall_guides.tr.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//top left to bottom left
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.tl.center.x, this.wall_guides.tl.center.y );
			ctx.lineTo( this.wall_guides.bl.center.x, this.wall_guides.bl.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//bottom left to bottom right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.bl.center.x, this.wall_guides.bl.center.y );
			ctx.lineTo( this.wall_guides.br.center.x, this.wall_guides.br.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//bottom right to top right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.br.center.x, this.wall_guides.br.center.y );
			ctx.lineTo( this.wall_guides.tr.center.x, this.wall_guides.tr.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			ctx.font = "bold 30px Arial";
			ctx.fillStyle = "green";
			ctx.textAlign = "center";
			ctx.fillText(this.orientation.toUpperCase(), width / 2, 35);

			ctx.font = "12px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("Press Space Bar to Change Orientation", width / 2, 50);

		} 

		//----------------------------------------------------------------------------------------------------------------
		//   ____                           _          __        __    _ _ 
		//  / ___| ___ _ __   ___ _ __ __ _| |_ ___    \ \      / /_ _| | |
		// | |  _ / _ \ '_ \ / _ \ '__/ _` | __/ _ \    \ \ /\ / / _` | | |
		// | |_| |  __/ | | |  __/ | | (_| | ||  __/     \ V  V / (_| | | |
		//  \____|\___|_| |_|\___|_|  \__,_|\__\___|      \_/\_/ \__,_|_|_|
		//----------------------------------------------------------------------------------------------------------------

		else if ( this.clicks == 2 ) 
		{
			PLACEMENT_WALL = new block( 
				this.placement_wall.width,
    			this.placement_wall.height,
    			(this.orientation == "vertical") ? "assets/wall_vertical.png" : "assets/wall_horizontal.png",
    			this.placement_wall.x,
    			this.placement_wall.y,
    			1,
    			"image"
			);
			PLACEMENT_WALL.is_wall = true;
			PLACEMENT_WALL.orientation = this.orientation;

			this.clicks = 0;
			active_block = PLACEMENT_WALL;
			ACTIVE_SCENE = SCENES.place;
			this.laying = true;
		}

		this.wall_guides.tl.update();
		this.wall_guides.tr.update();
		this.wall_guides.bl.update();
		this.wall_guides.br.update();
		this.placement_wall.update();
	},

	click_down : function() {
		//mousePos.down = true;
		++this.clicks;

		if ( this.clicks == 1 ) 
		{
			//the first clicks, set the origin of the wall
			this.origin.x = mousePos.x;
			this.origin.y = mousePos.y
			this.placement_wall.x = this.origin.x;
			this.placement_wall.y = this.origin.y;
		} 

		else if ( this.clicks > 2 ) {
			this.clicks = 0;
		}
	},

	click_up : function() {
		//mousePos.down = true;
	},

	buttonPress : function(e) {
		//27 = escape
		if ( e.keyCode == 27 ) 
		{
			this.clicks = 0;
		} 

		//49 = 1
		else if ( this.clicks == 1 && e.keyCode == 49 ) 
		{
			if ( this.orientation == "horizontal" ) {
				this.placement_wall.width = width + 2;
			} else if ( this.orientation == "vertical" ) {
				this.placement_wall.height = height + 2;
			}
			++this.clicks;
		} 
		//32 = spacebar
		else if ( this.clicks == 1 && e.keyCode == 32 ) 
		{
			if (this.orientation == "horizontal" ) this.orientation = "vertical";
			else if ( this.orientation == "vertical" ) this.orientation = "horizontal";
		}
	},

	blur : function() {
		this.clicks = 0;
	}
}