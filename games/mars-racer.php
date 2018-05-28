<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

<link rel="stylesheet" type="text/css" href="../css/base.css">
<link rel="stylesheet" type="text/css" href="../css/games.css">

<?php include '../headerFiles.php'; ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<!--Lightbox plugin-->
<script src="../js/lightbox.js"></script>
<script src="../js/popupJS.js"></script>
<link rel="stylesheet" type="text/css" href="../css/lightboxStyle.css">

<title>Devin Piner | Web Designs</title>
</head>

<body>
    <div class="content">
        
        <!--Header-->
        <?php include "../header.php"; ?>
        
        <!--Body-->
        <main>    
                           
            <!--Game-->
            <div class="gameWrapper">
                <div class="game">
                    <object type="application/x-shockwave-flash" data="mars_racer.swf">                     
                        <param name="movie" value="mars_racer.swf"> 
                        <a href="../images/mars_racer-fallback.jpg" class="imageLink"><img src="../images/mars_racer-fallback.jpg" alt="Mars Racer" /></a>
                    </object> 
                </div>    
            </div>
            <span class="caption">Click to expand image</span>
            
            <!--Game Info-->
            <span class="sectionHeader">MARS RACER</span>	
        
            <div class="siteDescription">Mars Racer was the first game that I attempted a full game menu system, in-game and out. While the main menu contains the same information as the other menus I have developed, the in-game menu presented a way to provide extra information to the player without the need to restart the game. In this case, Mars Racers in-game menu provides the user with a means to exit the game, review the game controls, and the objective of the game. </div>           
               
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
