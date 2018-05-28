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
        
        <?php include "../header.php"; ?>
        
        <!--Body-->
        <main>    
                           
            <!--Game-->
            <div class="gameWrapper">
                <div class="game">
                    <object type="application/x-shockwave-flash" data="MoonFighter.swf">                     
                        <param name="movie" value="MoonFighter.swf">  
                        <a href="../images/moon_fighter-fallback.jpg" class="imageLink"><img src="../images/moon_fighter-fallback.jpg" alt="Moon fighter" /></a>
                    </object> 
                </div>   
            </div>  
            <span class="caption">Click to expand image</span>
            
            <!--Game Info-->
            <span class="sectionHeader">MOON FIGHTER</span>	
        
            <div class="siteDescription"></div>           
               
        </main>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com/games" class="backButton"><img src="/images/backArrow.svg"/>BACK TO GAMES</a>
            <a href="#" class="upButton"><img src="/images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <?php include "../footer.php"; ?>
            
    </div>
</body>
</html>
