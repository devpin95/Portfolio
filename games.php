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
        
        	<span class="sectionHeader">GAME STUDY</span><br/>
            
            <div class="imageWindow">
        		<img src="images/gamesWindow.jpg" title="Flash Games" alt="Flash Games"/>
        	</div><br/>
            
            <p class="light intro">&nbsp;&nbsp;An exploration of user interfaces in games&nbsp;&nbsp;</p><br/>
            
            <!--AA Bomb-->
            <div class="game">
            	<div class="gameImage"><a href="games/aabomb" class="fillLink"></a><img src="images/aabomb.jpg" alt="AA Bomb" /></div>
                
                <div class="gameInfo">
                    <h3><a href="games/aabomb">AA Bomb</a></h3>
                    <p>The city is under attack! Take control of the anti-aircraft cannons and shoot down as many 
                    enemy fighter planes as possible before they drop their bombs and destroy your cannons</p>
                    
                    <a href="games/aabomb" class="gameLink linkButtons gradient">PLAY GAME</a>
                </div>
                <div class="clearFix">&nbsp;</div>
                
            </div>
            
            <!--Mars Racer-->
            <div class="game">
            	<div class="gameImage"><a href="games/mars-racer" class="fillLink"></a><img src="images/marsracer.jpg" alt="Mars Racer" /></div>
                
                <div class="gameInfo">
                    <h3><a href="games/mars-racer">Mars Racer</a></h3>
                    <p>Earth has finally run out of natural resources, forcing mankind to look elsewhere in the 
                    solar system for a place to live. Mankinds hunt lands them on Mars. You must collect H20 
                    pockets that are scattered across the surface of Mars in order to terraform Mars into a 
                    habitabal planet capable of supporting human life.</p>
                    
                    <a href="games/mars-racer" class="gameLink linkButtons gradient" style="z-index:1000;">PLAY GAME</a>

                </div> 
                <div class="clearFix">&nbsp;</div>               
                
            </div> 
            <div class="clearFix marsRacerSpacer"></div>          
            
            <!--Block Breaker-->
            <div class="game">
            	<div class="gameImage"><a href="games/block-breaker" class="fillLink"></a><img src="images/blockbreaker.jpg" alt="Jungle Adventure" /></div>
                
                <div class="gameInfo">
                    <h3><a href="games/block-breaker">Block Breaker</a></h3>
                    <p>Bounce the ball off the paddle and break as many blocks as you can! But don't miss the ball or you'll lose a life!</p>
                    
                    <a href="games/block-breaker" class="gameLink linkButtons gradient">PLAY GAME</a>
                </div>
                <div class="clearFix">&nbsp;</div>
                
            </div>
            
            <!--Whack-a-Capsule-->
            <div class="game">
            	<div class="gameImage"><a href="games/whack-a-capsule.php" class="fillLink"></a><img src="images/whackacapsule.jpg" alt="Whack-A-Capsule" /></div>
                
                <div class="gameInfo">
                    <h3><a href="games/whack-a-capsule">Whack-A-Capsule</a></h3>
                    <p>Whack the capsules as they come up. It's as simple as that.</p>
                    
                    <a href="games/whack-a-capsule" class="gameLink linkButtons gradient">PLAY GAME</a>
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
