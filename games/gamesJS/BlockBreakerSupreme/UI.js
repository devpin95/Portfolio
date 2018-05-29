var UI = {
	elements : {
		timer_element : document.getElementById("timer"),
		score_element : document.getElementById("score")
	},

	lives : {
		up : function() {
			document.getElementById( "b" + player.lives ).className = "";
		},

		down : function() {
			document.getElementById( "b" + (player.lives + 1) ).className = "ball_deactivated";
		}
	},

	timer : {
		seconds : 0,
		minutes : 0,
		total_time : 0,
		time_spacer: "",
		countTime : function() {
			if ( !GAME_STATE.IS_PAUSED && !GAME_STATE.WON && !GAME_STATE.STOP_TIME ) {
				++UI.timer.seconds;
				++UI.timer.total_time;

				if ( UI.timer.seconds < 10 ) {
					UI.timer.time_spacer = "0";
				} else {
					UI.timer.time_spacer = "";
				}

				if ( UI.timer.seconds == 60 ) {
					++UI.timer.minutes;
					UI.timer.seconds = 0;
					UI.timer.time_spacer = "0"; 
				}

				UI.elements.timer_element.innerHTML = UI.timer.minutes + ":" + UI.timer.time_spacer + UI.timer.seconds;
			}
		}
	},
	score : {
		total : 0,
		add : function( amnt ) {
			this.total += amnt;
			UI.elements.score_element.innerHTML = this.total;
		}
	},

	reset : function( num_lives ) {
		UI.timer.seconds = 0;
		UI.timer.minutes = 0;
		//UI.timer.total_time = 0;
		UI.timer.time_spacer = "";
		UI.elements.timer_element.innerHTML = "0:00";

		UI.score.total = 0;
		UI.elements.score_element.innerHTML = "0";

		document.getElementById("b1").className = "";
		document.getElementById("b2").className = "";
		document.getElementById("b3").className = "";
	}
}