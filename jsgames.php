<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/gameList.css">


<?php include 'headerFiles.php'; ?>

<title>Devin Piner | Web Designs</title>
</head>

<body>
	<div class="content">
    
    	<!--Header-->
        <?php include "header.php"; ?>
        
        <!--Body-->
        <main>
        
        	<span class="sectionHeader">JavaScript + HTML5 GAME STUDY</span><br/>

            <div class="imageWindow">
                <img src="images/jsGamesWindow.jpg" title="JavaScript Games" alt="JavaScript Games"/>
            </div><br/>
            
            <p class="light intro">&nbsp;&nbsp;An exploration of developing games with JavaScript and HTML5&nbsp;&nbsp;</p><br/>
            
            <!--AA Bomb-->
            <div class="game">
            	<div class="gameImage"><a href="games/block-breaker-supreme" class="fillLink"></a><img src="images/jsGames.jpg" alt="BlockBreaker Supreme" /></div>
                
                <div class="gameInfo">
                    <h3><a href="games/block-breaker-supreme">Blockbreaker Supreme!</a></h3>
                    <p>Bounce the ball off the paddle and break as many blocks as you can! But don't miss the ball or you'll lose a life! A remake of my Flash Blockbreaker game</p>
                    
                    <a href="games/block-breaker-supreme" class="gameLink linkButtons gradient">PLAY GAME</a>
                </div>
                <div class="clearFix">&nbsp;</div>
                
            </div>
                      
        </main>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com" class="backButton"><img src="/images/backArrow.svg"/>BACK TO PROJECTS</a>
            <a href="#" class="upButton"><img src="/images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <!--Footer-->
        <?php include "footer.php"; ?>
        
	</div>
</body>
</html>
