var deathPlacementScene = {
	clicks : 0,

	x1 : 0,
	x2 : 0,
	y1 : 0,
	y2 : 0,
	edge : "bottom",

	setup : function () {

	},

	run : function() {
		var ctx = myGameArea.canvas.getContext("2d");

		if ( this.clicks == 0 ) {
			if ( this.edge === "bottom" ) {
				this.y1 = height;
				this.x1 = mousePos.x;
				this.y2 = height - 20;
				this.x2 = mousePos.x
			}
			else if ( this.edge === "left" ) {
				this.y1 = mousePos.y;
				this.x1 = 0;
				this.y2 = mousePos.y;
				this.x2 = 20;
			}
			else if ( this.edge === "top" ) {
				this.y1 = 0;
				this.x1 = mousePos.x;
				this.y2 = 20;
				this.x2 = mousePos.x;
			}
			else if ( this.edge == "right" ) {
				this.y1 = mousePos.y;
				this.x1 = width;
				this.y2 = mousePos.y;
				this.x2 = width - 20;
			}

			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.x1, this.y1 );
			ctx.lineTo( this.x2, this.y2 );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			if ( this.x2 <= 150 && this.y2 <= 45 ) {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + this.x1.toFixed(2), width - 180, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + this.y1.toFixed(2), width - 180, 35);
			} else {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + this.x1.toFixed(2), 10, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + this.y1.toFixed(2), 10, 35);
			}
		}

		else if ( this.clicks == 1 ) {
			//vars to hold the second point of the first line and second line
			var tempX1, tempY1, tempX2, tempY2;
			  //1 = first line, 2 = second line

			if ( this.edge === "bottom" ) {
				tempX1 = this.x1;
				tempY1 = this.y1 - 20;
				this.y2 = height;
				this.x2 = mousePos.x
				tempX2 = mousePos.x;
				tempY2 = this.y1 - 20;
			}
			else if ( this.edge === "left" ) {
				tempX1 = 20;
				tempY1 = this.y1;
				this.y2 = mousePos.y;
				this.x2 = 0;
				tempX2 = 20;
				tempY2 = mousePos.y;
			}
			else if ( this.edge === "top" ) {
				tempX1 = this.x1;
				tempY1 = 20;
				this.y2 = 0;
				this.x2 = mousePos.x;
				tempX2 = mousePos.x;
				tempY2 = 20;
			}
			else if ( this.edge == "right" ) {
				tempX1 = this.x1 - 20;
				tempY1 = this.y1;
				this.y2 = mousePos.y;
				this.x2 = width;
				tempX2 = width - 20;
				tempY2 = mousePos.y;
			}

			//first line placed
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.x1, this.y1 );
			ctx.lineTo( tempX1, tempY1 );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//second line placed
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.x2, this.y2 );
			ctx.lineTo( tempX2, tempY2 );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//connect the 2 lines
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( tempX1, tempY1 );
			ctx.lineTo( tempX2, tempY2 );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			if ( this.x2 <= 150 && this.y2 <= 45 ) {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + this.x2.toFixed(2), width - 180, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + this.y2.toFixed(2), width - 180, 35);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X2: " + this.x2.toFixed(2), 100, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y2: " + this.y2.toFixed(2), 100, 35);
			} else {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + this.x1.toFixed(2), 10, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + this.y1.toFixed(2), 10, 35);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X2: " + this.x2.toFixed(2), 100, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y2: " + this.y2.toFixed(2), 100, 35);
			}
		}
	},

	click_down : function() {
		this.clicks++;
		if ( this.clicks == 2 ) {
			var width, height, x, y, orientation;

			if ( this.edge === "top" || this.edge === "bottom" ) {
				width = Math.abs( this.x2 - this.x1 );
				height = 4;
				x = ( (this.x2 > this.x1) ? this.x1 : this.x2 );
				y = ( (this.y1 == 0) ? this.y1 : this.y1 - 4 );
				orientation = "horizontal";
			}
			else {
				width = 4;
				height = Math.abs( this.y2 - this.y1 );
				x = ( (this.x1 == 0) ? this.x1 : this.x1 - 4 );
				y = ( (this.y2 > this.y1) ? this.y1 : this.y2 );
				orientation = "vertical";
			}

			//width, height, x, y, edge
			level_object.death_zones.push( new death_zone_code( width, height, x, y, this.edge ) );

			//width, height, color, x, y, health = 1, type = "color"
			test_blocks.push( new block( width, height, "assets/deathzone.png", x, y, 1, "image" ) );

			test_blocks[ test_blocks.length - 1 ].is_deathzone = true;
			test_blocks[ test_blocks.length - 1 ].orientation = orientation;

			this.clicks = 0;

			alert("Width: " + width + "\nHeight: " + height + "\nX: " + x + "\nY: " + y);
		}
	},

	buttonPress : function(e) {
		//27 = escape
		if ( e.keyCode == 27 ) 
		{
			this.clicks = 0;
			return;
		} 

		if ( this.clicks == 0 ) 
		{
			if ( e.keyCode == 37 ) {
				e.preventDefault();
				this.edge = "left";
			}
			else if ( e.keyCode == 38 ) {
				e.preventDefault();
				this.edge = "top";
			}
			else if ( e.keyCode == 39 ) {
				e.preventDefault();
				this.edge = "right"
			}
			else if ( e.keyCode == 40 ) {
				e.preventDefault();
				this.edge = "bottom";
			}
			return;
		}
		else if ( this.clicks == 1 ) 
		{
			//32 = spacebar
			if ( e.keyCode == 32 ) 
			{
				if ( this.edge === "top" || this.edge === "bottom" ) {
					this.x1 = 0;
					this.x2 = width;
					this.y1 = ( (this.edge === "top") ? 0 : height );
					this.y2 = this.y1;
				}
				else {
					this.x1 = ( (this.edge === "left") ? 0 : width );
					this.x2 = this.x1;
					this.y1 = 0;
					this.y2 = height;
				}

				//force the next click function to run
				this.click_down();
			}
			//37-40 arrow keys, 37 = left, 38 = up, 39 = right, 40 = down
			else if ( e.keyCode >= 37 && e.keyCode <= 40 ) 
			{
				this.clicks = 0;
				this.buttonPress(e);
				return;
			}
		}
	},

	blur : function() {
		this.clicks = 0;
	}
}