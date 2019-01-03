<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/gameList.css">


<?php include 'headerFiles.php'; ?>

<title>Devin Piner | Software Engineer</title>
</head>

<body>
	<div class="content">
    
    	<!--Header-->
        <?php include "header.php"; ?>
        
        <!--Body-->
        <main>
        
        	<span class="sectionHeader">HARDWARE/SOFTWARE STUDY</span><br/>
            
            <div class="imageWindow">
        		<img src="images/hardwareWindow.jpg" title="Flash Games" alt="Flash Games"/>
        	</div><br/>
            
            <p class="light intro">&nbsp;&nbsp;An exploration in developing software for hardware&nbsp;&nbsp;</p><br/>
            
            <!--AA Bomb-->
            <div class="game">
            	<div class="gameImage"><a href="hardware/dungeoncrawler" class="fillLink"></a><img src="images/1dDungeonCrawler.jpg" alt="AA Bomb" /></div>
                
                <div class="gameInfo">
                    <h3><a href="hardware/dungeoncrawler">1-Dimensional Dungeon Crawler</a></h3>
                    <p>This is a 1-dimensional dungeon crawler game that utilizes a 5 meter long LED strip, and a unique controller. The strip consists of 300 individually addressable LEDs which are used to display the game state. The player can tilt the controller to move the player object on the strip, and he can flick/shake the controller to attack.</p>
                    
                    <a href="hardware/dungeoncrawler" class="gameLink linkButtons gradient">LEARN MORE</a>
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
