<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

<link rel="stylesheet" type="text/css" href="../css/base.css">
<!-- <link rel="stylesheet" type="text/css" href="../css/games.css"> -->

<?php include '../headerFiles.php'; ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<!--Lightbox plugin-->
<script src="../js/lightbox.js"></script>
<script src="../js/popupJS.js"></script>
<link rel="stylesheet" type="text/css" href="../css/lightboxStyle.css">

<title>Devin Piner | Web Designs</title>
<link rel="stylesheet" href="gamesCSS/BlockBreakerSupreme/main.css">
</head>

<body onload="startGame()">
    <div class="content">
        
        <!--Header-->
        <?php include "../header.php"; ?>
        
        <!--Body-->
        <main>    
                           
            <!--Game-->
            <div class="gameWrapper">
                <div class="game" style="max-width:550px;">
                    <div id="dashboard">
                        <div id="lives_wrapper">
                            <div class="dashboard_label">LIVES</div>
                            <div id="lives">
                                <div class="" id="b1"></div>
                                <div class="" id="b2"></div>
                                <div class="" id="b3"></div>
                            </div>
                        </div>

                        <div id="timer_wrapper">
                            <div class="dashboard_label">TIME</div>
                            <div id="timer">0:00</div>
                        </div>

                        <div id="score_wrapper">
                            <div class="dashboard_label">SCORE</div>
                            <div id="score">000</div>
                        </div>
                        <div class="BBlogo"><img style="margin-top:10px;" src="gamesAssets/BlockBreakerSupreme/logo.png" /></div>
                        <div style="clear:all;">&nbsp;</div>
                    </div>

                    <!-- Game assets that must be preloaded -->
                    <img src="gamesAssets/BlockBreakerSupreme/wall_horizontal.png" id="wall_horizontal" style="display:none;" >
                    <img src="gamesAssets/BlockBreakerSupreme/wall_vertical.png" id="wall_vertical" style="display:none;" >
                    <img src="gamesAssets/BlockBreakerSupreme/deathzone.png" id="death_horizontal" style="display:none;" >
                    <img src="gamesAssets/BlockBreakerSupreme/deathzone_vertical.png" id="death_vertical" style="display:none;" >

                    <canvas id="game" width="960px" height="540px"></canvas>

                    <p id="slope"></p>
                    <p id="y"></p>
                    <p id="log"></p>

                    <script src="gamesJS/BlockBreakerSupreme/UI.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/calculations.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/gamePieces.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/mainMenuScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/classicModeLevelSelectionScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/pausedScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/settingsScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/retryPromptScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/gameScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/levelClearScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/gameOverScene.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/GLOBALS.js"></script>
                    <script src="gamesJS/BlockBreakerSupreme/levels.js"></script>
                    <script>
                        function startGame() {
                            player = new Player();
                            myPaddle = new paddle();
                            myBlock = new block( 100, 50, "", 100, 100, "image" );

                            GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
                            myGameArea.start( );
                        }

                        var myGameArea = {
                            canvas : document.getElementById("game"),

                            start : function() {
                                this.canvas.width = width;
                                this.canvas.height = height;
                                this.context = this.canvas.getContext("2d");
                                this.interval = setInterval( updateGameArea, fps );
                                this.bottom_hit = false;
                                this.sound = new sound( "gamesAssets/BlockBreakerSupreme/sound_paddle.wav" );

                                //canvas event listeners
                                window.addEventListener('keydown', function(e) {
                                    //send the keyup event to the active scene
                                    GAME_STATE.ACTIVE_SCENE.button_press( e );              
                                })

                                window.addEventListener('keyup', function( e ){
                                    //send the keyup event to the active scene
                                    //GAME_STATE.ACTIVE_SCENE.button_press( e );
                                })

                                window.addEventListener('click', function( e ) {
                                    //send the click event to the active scene
                                    GAME_STATE.ACTIVE_SCENE.clicked( e );
                                })
                            },

                            clear : function() {
                                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
                            },

                            collision : function( obj ) {   
                                var collided_with = {
                                    top_bottom : false,
                                    left_right : false
                                };

                                if ( obj.x + obj.spdX <= 0 || obj.x + obj.width + obj.spdX >= width ) {
                                    collided_with.left_right = true;
                                    this.sound.play();
                                }
                                
                                if ( obj.y + obj.spdY <= 0 || obj.y + obj.spdY >= height ) 
                                {
                                    collided_with.top_bottom = true;
                                    this.sound.play();
                                } 

                                return collided_with;
                            }
                        }


                        var block_to_delete = -1;

                        function updateGameArea() {
                            myGameArea.clear();

                            if ( !GAME_STATE.ACTIVE_SCENE.scene_ready ) {
                                GAME_STATE.ACTIVE_SCENE.setup();
                            }

                            GAME_STATE.ACTIVE_SCENE.run();
                        }

                        var dbgr = {
                            ele : document.getElementById("log"),
                            add : function(msg) {
                                this.ele.innerHTML = msg + "<br>" + this.ele.innerHTML;
                            }
                        }

                    </script>
                </div>   
            </div> 
            
            <!--Game Info-->
            <span class="sectionHeader">BLOCKBREAKER SUPREME!</span>	
        
            <div class="siteDescription">TODO: write report...</div>           
               
        </main>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com/games" class="backButton"><img src="/images/backArrow.svg"/>BACK TO GAMES</a>
            <a href="#" class="upButton"><img src="/images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <!--Footer-->
        <?php include "../footer.php"; ?>
            
    </div>
</body>
</html>
