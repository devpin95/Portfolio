var paddlePlacementScene = {
	clicks : 0,
	valid : false,

	orientation : "horizontal",

	x1 : -100,
	x2 : -100,
	y1 : -100,
	y2 : -100,

	setup : function () {

	},

	run : function() {
		var ctx = myGameArea.canvas.getContext("2d");

		var paddle_length = document.getElementById("paddle_length").value;
		var length_value = parseInt(paddle_length);
		if ( isNaN( length_value ) ) {
			//if the value is not a valid number
			ctx.font = "bold 30px Arial";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("Invalid Paddle Length", width / 2, 35);

			ctx.font = "12px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("Enter a valid number in the text box above", width / 2, 50);

			this.valid = false;
			return;

		} else if ( length_value < 10 ) {
			ctx.font = "bold 30px Arial";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("Invalid Paddle Length", width / 2, 35);

			ctx.font = "12px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("Length must be greater than 10", width / 2, 50);

			this.valid = false;
			return;

		} else if ( length_value > 300 ) {
			ctx.font = "bold 30px Arial";
			ctx.fillStyle = "red";
			ctx.textAlign = "center";
			ctx.fillText("Invalid Paddle Length", width / 2, 35);

			ctx.font = "12px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("Length must be less than 300", width / 2, 50);

			this.valid = false;
			return;

		} else {
			this.valid = true;
		}

		if ( this.clicks == 0 ) {
			if ( mousePos.x <= 100 && mousePos.y <= 35 ) {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + (mousePos.x).toFixed(2), width - 60, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + mousePos.y.toFixed(2), width - 60, 35);
			} else {
				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("X1: " + (mousePos.x).toFixed(2), 10, 20);

				ctx.font = "12px Courier New";
				ctx.fillStyle = "black";
				ctx.textAlign = "left";
				ctx.fillText("Y1: " + mousePos.y.toFixed(2), 10, 35);
			}

			this.x1 = this.x2 = mousePos.x;
			this.y1 = this.y2 = mousePos.y;
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
				this.y2 = this.y1;
				this.x2 = mousePos.x;

				if ( this.x2 <= 150 && this.y2 <= 45 ) {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X1: " + this.x1.toFixed(2), width - 180, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y1: " + this.y1.toFixed(2), width - 180, 35);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X2: " + this.x2.toFixed(2), width - 90, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y2: " + this.y2.toFixed(2), width - 90, 35);
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

			//----------------------------------------------------------------------------------------------------------------
			// __     __        _   _           _   __        __    _ _ 
			// \ \   / /__ _ __| |_(_) ___ __ _| |  \ \      / /_ _| | |
			//  \ \ / / _ \ '__| __| |/ __/ _` | |   \ \ /\ / / _` | | |
			//   \ V /  __/ |  | |_| | (_| (_| | |    \ V  V / (_| | | |
			//    \_/ \___|_|   \__|_|\___\__,_|_|     \_/\_/ \__,_|_|_|
			//----------------------------------------------------------------------------------------------------------------
			else if ( this.orientation == "vertical" ) 
			{
				this.x2 = this.x1;
				this.y2 = mousePos.y;

				if ( this.x2 <= 150 && this.y2 <= 45 ) {
					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X1: " + this.x1.toFixed(2), width - 180, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y1: " + this.y1.toFixed(2), width - 180, 35);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("X2: " + this.x2.toFixed(2), width - 90, 20);

					ctx.font = "12px Courier New";
					ctx.fillStyle = "black";
					ctx.textAlign = "left";
					ctx.fillText("Y2: " + this.y2.toFixed(2), width - 90, 35);
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

			//draw lines between nodes
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.x1, this.y1 );
			ctx.lineTo( this.x2, this.y2 );
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

		}

	},

	click_down : function() {
		if ( !this.valid ) {
			return;
		}

		++this.clicks;

		if ( this.clicks == 1 ) 
		{
			//the first clicks, set the origin of the wall
			this.x1 = mousePos.x;
			this.y1 = mousePos.y;
		} else if ( this.clicks == 2 ) {

			if ( (this.orientation === "horizontal" && this.x2 < this.x1) || (this.orientation === "vertical" && this.y2 < this.y1) ) {
				var tempy, tempx;
				tempx = this.x2;
				this.x2 = this.x1;
				this.x1 = tempx;
				tempy = this.y2;
				this.y2 = this.y1;
				this.y1 = tempy;
			}

			//alert("x1: " + this.x1 + "\ny1: " + this.y1 + "\nx2: " + this.x2 + "\ny2: " + this.y2);

			var length = parseInt( document.getElementById("paddle_length").value );
			//x1, y1, x2, y2, orientation
			level_object.paddles.push( new paddle_code( this.x1, this.y1, this.x2, this.y2, this.orientation, length ) );

			//width, height, color, x, y, health = 1, type = "color"
			test_blocks.push( new block( length, 0, "assets/paddle.png", this.x1, this.y1, 1, "paddle" ) );
			test_blocks[ test_blocks.length - 1 ].is_paddle = true;
			test_blocks[ test_blocks.length - 1 ].orientation = this.orientation;
			test_blocks[ test_blocks.length - 1 ].teleport_point.x = this.x2;
			test_blocks[ test_blocks.length - 1 ].teleport_point.y = this.y2;

			this.clicks = 0;

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