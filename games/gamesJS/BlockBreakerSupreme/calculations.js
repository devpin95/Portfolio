var debug_current_block;

function RectangleRectangleCollision( bouncingRect, centerRect ) {
	//RectangleRectangleCollision()
	//Determines if the passed object is colliding with the block and which edge it is colliding with.
	//Returns JSON with left_right and top_bottom values. If true, object is colliding with one of the edges
	//If no collision is occuring, null will be returned. 
	//The passed in object must have an x, y, width, height, x velocity, and y velocity
	//If both objects are moving, update both positions before checking for a collision
	//
	//Collision detection method: http://happycoding.io/tutorials/processing/collision-detection

	//object to hold which edges are colliding between the 2 rectangles
	var bouncing = {
		left_right : false,
		top_bottom : false,
	}

	//check if next x position will collide with the block
	if (bouncingRect.x + bouncingRect.width + bouncingRect.spdX > centerRect.x && 
      bouncingRect.x + bouncingRect.spdX < centerRect.x + centerRect.width && 
      bouncingRect.y + bouncingRect.height > centerRect.y && 
      bouncingRect.y < centerRect.y + centerRect.height) 
	{
    	bouncing.left_right = true;
  	}

  	//check if next y position will collide with the block
  	if (bouncingRect.x + bouncingRect.width > centerRect.x && 
      bouncingRect.x < centerRect.x + centerRect.width && 
      bouncingRect.y + bouncingRect.height + bouncingRect.spdY > centerRect.y && 
      bouncingRect.y + bouncingRect.spdY < centerRect.y + centerRect.height) 
  	{
    	bouncing.top_bottom = true;
  	}

  	//if bouncingRect is hitting neither top/bottom nor left/right, return null
  	if ( !bouncing.top_bottom && !bouncing.left_right ) {
		return null;
	}

	//otherwise, return the bouncing object
  	return bouncing;
}

function slopeTrace( ball, block ) {
	var new_x = Math.round( ball.center.x );
	var new_y = Math.round( ball.center.y );
	var cont = false;
	var message;

	var collided_with = {
		top_bottom : false,
		left_right : false
	}

	//debug_current_block.update();

	for ( var i = 0; i < 100; ++i ) {
		//y = mx + b
		if ( ball.spdX >= 0 ) {
			--new_x;
		} else {
			++new_x;
		}
		new_y = ( ball.equation.slope * new_x ) + ball.equation.y_intercept;

		//ball has a positive slope and is moving to the right
		if ( ball.equation.slope >= 0 && ball.spdX >= 0 ) {
			//ball can only hit top or left
			if ( new_x <= block.left_edge ) {
				//left
				//ball.spdX *= -1;
				collided_with.left_right = true;
				cont = true;
				//ball.x = block.left_edge - ball.width;
				message = "1 : left";
			} 
			else if ( new_y <= block.top_edge ) {
				//bottom
				//ball.spdY *= -1;
				collided_with.top_bottom = true;
				cont = true;
				//ball.y = block.bottom_edge;
				message = "1 : top";
			} else {
				//alert("IDK 1" + "\nSlope: " + ball.equation.slope + "\nX Speed: " + ball.spdX );
				message = "1 : IDK";
			}
		}
		//ball has a positive slope and is moving to the left
		else if ( ball.equation.slope >= 0 && ball.spdX <= 0 ) {
			//ball can only hit top or right
			if ( new_x >= block.right_edge ) {
				//right
				//ball.spdX *= -1;
				collided_with.left_right = true;
				cont = true;
				//ball.x = block.right_edge;
				message = "2 : right";
			} 
			else if ( new_y >= block.bottom_edge ) {
				//top
				//ball.spdY *= -1;
				collided_with.top_bottom = true;
				cont = true;
				//ball.y = block.top_edge - ball.height;
				message = "2 : bottom";
			} else {
				//alert("IDK 2" + "\nSlope: " + ball.equation.slope + "\nX Speed: " + ball.spdX);
				message = "2 : IDK";
			}
		}
		//ball has a negative slope and is moving to the right
		else if ( ball.equation.slope <= 0 && ball.spdX >= 0 ) {
			//ball can only hit bottom or left
			if ( new_x <= block.left_edge ) {
				//left
				//ball.spdX *= -1;
				collided_with.left_right = true;
				cont = true;
				//ball.x = block.left_edge - ball.width;
				message = "3 : left";
			} 
			else if ( new_y >= block.bottom_edge ) {
				//top
				//ball.spdY *= -1;
				collided_with.top_bottom = true;
				cont = true;
				//ball.y = block.top_edge - ball.height;
				message = "3 : Bottom";
			} else {
				//alert("IDK 3" + "\nSlope: " + ball.equation.slope + "\nX Speed: " + ball.spdX);
				message = "3 : IDK";
			}
		}//ball has a negative slope and is moving to the left
		else if ( ball.equation.slope <= 0 && ball.spdX <= 0 ) {
			//ball can only hit top or right
			if ( new_x >= block.right_edge ) {
				//right
				//ball.spdX *= -1;
				collided_with.left_right = true;
				cont = true;
				//ball.x = block.right_edge;
				message = "4 : right";
			} 
			else if ( new_y <= block.top_edge ) {
				//bottom
				//ball.spdY *= -1;
				collided_with.top_bottom = true;
				cont = true;
				//ball.y = block.bottom_edge;
				message = "4 : top";
			} else {
				//alert("IDK 4" + "\nSlope: " + ball.equation.slope + "\nX Speed: " + ball.spdX);
				message = "4 : IDK";
			}
		} else if ( ball.equation.slope == Number.POSITIVE_INFINITY ) {
			if ( ball.spdY < 0 ) {
				//ball.y = block.bottom_edge;
			} else if ( ball.spdY > 0 ) {
				//ball.y = block.top_edge - ball.height;
			}
			//ball.spdY *= -1;
			collided_with.top_bottom = true;
		 	cont = true;
		}

		if ( cont == true ) {
			//break;
			return collided_with;
		} else if ( i == 99 ) {
			//alert(message);
		}
	}

	return null;
	
}

//http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
//tracking the mouse coordinates
//------------------------------------------------------------------------------------------------------------
function getMousePos(canvas, e) {
    var rect = document.getElementById("game").getBoundingClientRect();
    return {
    	x: e.clientX - rect.left,
    	y: e.clientY - rect.top
	};
}

document.getElementById("game").addEventListener('mousemove', function(e) {
	mousePos = getMousePos(document.getElementById("game"), e);
    //myPaddle.newPos( mousePos.x, mousePos.y );
}, false);
//------------------------------------------------------------------------------------------------------------

function distanceBetweenPoints( x1, y1, x2, y2 ) {
	//  B
	//	|\
	//	| \
	//	|  \
	//	|   \
	//a |    \ c
	//	|     \
	//	|      \
	//	|_______\
	//		b    A
	//Pythagorean Theorem
	//Point A, B

	var a = Math.abs( x1 - x2 );
	var b = Math.abs( y1 - y2 );
	return Math.sqrt( (a*a) + (b*b) );
}