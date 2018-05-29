//var temp_portal = new block;

var portalPlacementScene = {

	setup : function() {
		this.temp_portal = new block( 50, 50, block_assets.portal.red, -100, -100, 1, "image" );
		this.left_node = new block( 10, 10, "#000", -100, -100, 1, "color" );
		this.top_node = new block( 10, 10, "#000", -100, -100, 1, "color" );
		this.right_node = new block( 10, 10, "#000", -100, -100, 1, "color" );
		this.bottom_node = new block( 10, 10, "#000", -100, -100, 1, "color" );
	},

	clicks : 0,
	temp_portal : null,
	left_node : null,
	top_node : null,
	right_node : null,
	bottom_node : null,
	node_position : {
		top : false,
		right : false,
		bottom : false,
		left : false,
		spdX : 0,
		spdY : 0
	},
	temp_node_position : {
		active : false,
		top : false,
		right : false,
		bottom : false,
		left : false,
		spdX : 0,
		spdY : 0
	},
	aligning_with_portal : false,
	aligning_portal : null,
	tx : null,
	ty : null,

	run : function() 
	{
		if ( this.clicks == 0 ) {
			active_block.x = mousePos.x - ( active_block.width / 2);
			active_block.y = mousePos.y - ( active_block.height / 2);
			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( test_blocks[i].is_portal ) {
					if ( mousePos.x >= test_blocks[i].teleport_point.x - (test_blocks[i].width / 2)  && 
						mousePos.x <= test_blocks[i].teleport_point.x + (test_blocks[i].width / 2) && 
						mousePos.y >= test_blocks[i].teleport_point.y - (test_blocks[i].height / 2) && 
						mousePos.y <= test_blocks[i].teleport_point.y + (test_blocks[i].height / 2) ) 
					{
						active_block.x = test_blocks[i].teleport_point.x - (active_block.width/2);
						active_block.y = test_blocks[i].teleport_point.y - (active_block.height/2);
						this.aligning_with_portal = true;
						this.aligning_portal = i;
						break;
					} else {
						this.aligning_with_portal = false;
					}
				}
			}

			if ( this.aligning_with_portal ) {
				ctx.font = "bold 30px Arial";
				ctx.fillStyle = "green";
				ctx.textAlign = "center";
				ctx.fillText("Place Portal Object and Select Exit-Node", width / 2, 35);

				ctx.font = "12px Arial";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText("Click a portal's node to select where the ball will exit the portal.", width / 2, 50);

				//Note: Select and appropriate x and y velocity for the ball.
				ctx.font = "12px Arial";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText("Note: When placing a portal on the exit point of another portal, the first placement will accept " +
					"the velocity values above and apply them to the endpoint's portal.", width / 2, 65);

				//top node
				this.top_node.x = active_block.x + (active_block.width/2) - (this.top_node.width/2);
				this.top_node.y = active_block.y;

				//right node
				this.right_node.x = active_block.x + (active_block.width) - this.right_node.width;
				this.right_node.y = active_block.y + (active_block.height/2) - (this.right_node.height/2);

				//bottom node
				this.bottom_node.x = active_block.x + (active_block.width/2) - (this.bottom_node.width/2);
				this.bottom_node.y = active_block.y + (active_block.height) - this.bottom_node.height;

				//left node
				this.left_node.x = active_block.x;
				this.left_node.y = active_block.y + (active_block.height/2) - (this.left_node.height/2);

				if ( mousePos.x < this.top_node.x + this.top_node.width && 
					mousePos.x > this.top_node.x && 
					mousePos.y < this.top_node.y + this.top_node.height && 
					mousePos.y > this.top_node.y ) 
				{		
					this.top_node.color = "#0f0";
					this.node_position.top = true;
				}
				else {
					this.top_node.color = "#000";
					this.node_position.top = false;
				}

				if ( mousePos.x < this.right_node.x + this.right_node.width && 
					mousePos.x > this.right_node.x && 
					mousePos.y < this.right_node.y + this.right_node.height && 
					mousePos.y > this.right_node.y ) 
				{		
					this.right_node.color = "#0f0";
					this.node_position.right = true;
				}
				else {
					this.right_node.color = "#000";
					this.node_position.right = false;
				}

				if ( mousePos.x < this.bottom_node.x + this.bottom_node.width && 
					mousePos.x > this.bottom_node.x && 
					mousePos.y < this.bottom_node.y + this.bottom_node.height && 
					mousePos.y > this.bottom_node.y ) 
				{		
					this.bottom_node.color = "#0f0";
					this.node_position.bottom = true;
				}
				else {
					this.bottom_node.color = "#000";
					this.node_position.bottom = false;
				}

				if ( mousePos.x < this.left_node.x + this.left_node.width && 
					mousePos.x > this.left_node.x && 
					mousePos.y < this.left_node.y + this.left_node.height && 
					mousePos.y > this.left_node.y ) 
				{		
					this.left_node.color = "#0f0";
					this.node_position.left = true;
				}
				else {
					this.left_node.color = "#000";
					this.node_position.left = false;
				}
			}
			else {
				ctx.font = "bold 30px Arial";
				ctx.fillStyle = "green";
				ctx.textAlign = "center";
				ctx.fillText("Place Portal Object", width / 2, 35);

				this.top_node.x = -100;
				this.top_node.y = -100;
				this.right_node.x = -100;
				this.right_node.y = -100;
				this.bottom_node.x = -100;
				this.bottom_node.y = -100;
				this.left_node.x = -100;
				this.left_node.y = -100;

				this.tx = mousePos.x;
				this.ty = mousePos.y;

				if ( mousePos.x <= 100 && mousePos.y <= 35 ) {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X: " + this.tx.toFixed(2), width - 70, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y: " + this.ty.toFixed(2), width - 70, 35);
				} else {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X: " + this.tx.toFixed(2), 10, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y: " + mousePos.y.toFixed(2), 10, 35);
				}
			}

			ctx.globalCompositeOperation='destination-over';
			this.left_node.update();
			this.top_node.update();
			this.right_node.update();
			this.bottom_node.update();
			active_block.update();
		}

		else if ( this.clicks == 1 ) {
			this.temp_portal.update();

			// if ( this.aligning_with_portal ) {
			// 	level_object.blocks[this.aligning_portal].teleport_point.is_endpoint = true;
			// }

			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( test_blocks[i].is_portal ) {
					if ( mousePos.x >= test_blocks[i].left_edge && 
						mousePos.x <= test_blocks[i].right_edge && 
						mousePos.y >= test_blocks[i].top_edge && 
						mousePos.y <= test_blocks[i].bottom_edge ) 
					{
						this.tx = test_blocks[i].center.x;
						this.ty = test_blocks[i].center.y;
						//test_blocks[i].teleport_point.is_a_portal = true;
						this.aligning_with_portal = true;
						this.aligning_portal = i;
						break;
					} else {
						this.aligning_with_portal = false;
					}
				}
			}

			if ( this.aligning_with_portal ) {
				ctx.font = "bold 30px Arial";
				ctx.fillStyle = "green";
				ctx.textAlign = "center";
				ctx.fillText("Place Portal Teleporting-Point and Select Exit-Node", width / 2, 35);

				ctx.font = "12px Arial";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText("Click a portal's node to select where the ball will exit the portal.", width / 2, 50);

				//Note: Select and appropriate x and y velocity for the ball.
				ctx.font = "12px Arial";
				ctx.fillStyle = "black";
				ctx.textAlign = "center";
				ctx.fillText("Note: Select and appropriate x and y velocity for the ball upon exit. If the ball enters the portal again after exiting, it may get stuck.", width / 2, 65);

				//top node
				this.top_node.x = test_blocks[ this.aligning_portal ].x + (test_blocks[ this.aligning_portal ].width/2) - (this.top_node.width/2);
				this.top_node.y = test_blocks[ this.aligning_portal ].y;

				//right node
				this.right_node.x = test_blocks[ this.aligning_portal ].x + (test_blocks[ this.aligning_portal ].width) - this.right_node.width;
				this.right_node.y = test_blocks[ this.aligning_portal ].y + (test_blocks[ this.aligning_portal ].height/2) - (this.right_node.height/2);

				//bottom node
				this.bottom_node.x = test_blocks[ this.aligning_portal ].x + (test_blocks[ this.aligning_portal ].width/2) - (this.bottom_node.width/2);
				this.bottom_node.y = test_blocks[ this.aligning_portal ].y + (test_blocks[ this.aligning_portal ].height) - this.bottom_node.height;

				//left node
				this.left_node.x = test_blocks[ this.aligning_portal ].x;
				this.left_node.y = test_blocks[ this.aligning_portal ].y + (test_blocks[ this.aligning_portal ].height/2) - (this.left_node.height/2);

				if ( mousePos.x < this.top_node.x + this.top_node.width && 
					mousePos.x > this.top_node.x && 
					mousePos.y < this.top_node.y + this.top_node.height && 
					mousePos.y > this.top_node.y ) 
				{		
					this.top_node.color = "#0f0";
					this.node_position.top = true;
				}
				else {
					this.top_node.color = "#000";
					this.node_position.top = false;
				}

				if ( mousePos.x < this.right_node.x + this.right_node.width && 
					mousePos.x > this.right_node.x && 
					mousePos.y < this.right_node.y + this.right_node.height && 
					mousePos.y > this.right_node.y ) 
				{		
					this.right_node.color = "#0f0";
					this.node_position.right = true;
				}
				else {
					this.right_node.color = "#000";
					this.node_position.right = false;
				}

				if ( mousePos.x < this.bottom_node.x + this.bottom_node.width && 
					mousePos.x > this.bottom_node.x && 
					mousePos.y < this.bottom_node.y + this.bottom_node.height && 
					mousePos.y > this.bottom_node.y ) 
				{		
					this.bottom_node.color = "#0f0";
					this.node_position.bottom = true;
				}
				else {
					this.bottom_node.color = "#000";
					this.node_position.bottom = false;
				}

				if ( mousePos.x < this.left_node.x + this.left_node.width && 
					mousePos.x > this.left_node.x && 
					mousePos.y < this.left_node.y + this.left_node.height && 
					mousePos.y > this.left_node.y ) 
				{		
					this.left_node.color = "#0f0";
					this.node_position.left = true;
				}
				else {
					this.left_node.color = "#000";
					this.node_position.left = false;
				}
			}
			else {
				ctx.font = "bold 30px Arial";
				ctx.fillStyle = "green";
				ctx.textAlign = "center";
				ctx.fillText("Place Portal Teleporting-Point", width / 2, 35);

				this.top_node.x = -100;
				this.top_node.y = -100;
				this.right_node.x = -100;
				this.right_node.y = -100;
				this.bottom_node.x = -100;
				this.bottom_node.y = -100;
				this.left_node.x = -100;
				this.left_node.y = -100;

				this.tx = mousePos.x;
				this.ty = mousePos.y;
				
				if ( mousePos.x <= 100 && mousePos.y <= 35 ) {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X: " + this.tx.toFixed(2), width - 70, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y: " + this.ty.toFixed(2), width - 70, 35);
				} else {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X: " + this.tx.toFixed(2), 10, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y: " + mousePos.y.toFixed(2), 10, 35);
				}
			}

			//draw a line from the center of the portal to the mouse
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.temp_portal.center.x, this.temp_portal.center.y );
			ctx.lineTo( this.tx, this.ty );
			ctx.strokeStyle = '#00f';
			ctx.stroke();
		}

		ctx.globalCompositeOperation='destination-over';
		this.left_node.update();
		this.top_node.update();
		this.right_node.update();
		this.bottom_node.update();
	},

	click_down : function(e) {
		++this.clicks;

		if ( this.clicks == 1 ) 
		{
			//if this is the first clicks, make a temperary block so that we can draw a line
			//between the placed portal and the point to which it will teleport the ball

			//width, height, color, x, y, health = 1, type = "color"
			this.temp_portal = new block( 
				active_block.width,
    			active_block.height,
    			active_block.image.src,
    			active_block.x,
    			active_block.y,
    			1,
    			"image"
			);

			active_block.x = -100;
			active_block.y = -100;

			this.temp_portal.is_portal = true;

			if ( this.aligning_with_portal  ) {
				this.temp_portal.teleport_point.is_a_portal = true;
				this.node_position.spdX = document.getElementById("velx").value;
				this.node_position.spdY = document.getElementById("vely").value;
				level_object.blocks[ this.aligning_portal ].teleport_point.node = JSON.parse( JSON.stringify(this.node_position) );
			}

			//reset the node
			this.node_position.top = false;
			this.node_position.right = false;
			this.node_position.bottom = false;
			this.node_position.left = false;
			this.node_position.spdX = "";
			this.node_position.spdY = "";

			this.aligning_with_portal = false;
			this.aligning_portal = -1;
		}

		else if ( this.clicks == 2 ) 
		{
			level_object.blocks.push( new placement_code(
    			this.temp_portal.width,
    			this.temp_portal.height,
    			active_block.image.src,
    			this.temp_portal.x,
    			this.temp_portal.y,
    			"portal",
    			null,
    			1,
    			this.tx, //tx
    			this.ty, //ty	
    			this.temp_portal.teleport_point.is_a_portal
			) );

    		//width, height, color, x, y, health = 1, type = "color"
    		test_blocks.push( new block( 
				this.temp_portal.width,
    			this.temp_portal.height,
    			this.temp_portal.image.src,
    			this.temp_portal.x,
    			this.temp_portal.y,
    			1,
    			"image" 
			) );

			//set the teleport points
			test_blocks[ test_blocks.length - 1 ].is_portal = true;
			test_blocks[ test_blocks.length - 1 ].teleport_point.x = this.tx;
			test_blocks[ test_blocks.length - 1 ].teleport_point.y = this.ty;

			if ( this.aligning_with_portal  ) {
				level_object.blocks[ this.aligning_portal ].teleport_point.is_endpoint = true;
				//exit values
				this.node_position.spdX = document.getElementById("velx").value;
				this.node_position.spdY = document.getElementById("vely").value;
				level_object.blocks[ level_object.blocks.length - 1 ].teleport_point.node = JSON.parse( JSON.stringify(this.node_position) );
			}

			this.clicks = 0;
			this.aligning_portal = -1;
			this.aligning_with_portal = false;
			this.top_node.x = -100;
			this.top_node.y = -100;
			this.right_node.x = -100;
			this.right_node.y = -100;
			this.bottom_node.x = -100;
			this.bottom_node.y = -100;
			this.left_node.x = -100;
			this.left_node.y = -100;
			this.node_position.top = false;
			this.node_position.right = false;
			this.node_position.bottom = false;
			this.node_position.left = false;
			this.node_position.spdX = "";
			this.node_position.spdY = "";
		}
	},

	buttonPress : function(e) {
		//27 = escape
		if ( e.keyCode == 27 ) 
		{
			if ( this.clicks == 1 && this.aligning_with_portal ) {
				alert("REVERT");
				level_object.blocks[this.aligning_portal].teleport_point.node = null;
			}
			this.clicks = 0;
		}
	},

	blur : function() {
		active_block.x = -100;
		active_block.y = -100;
	}
}	