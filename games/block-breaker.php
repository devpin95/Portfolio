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
                <div class="game" style="max-width:550px;">
                    <object type="application/x-shockwave-flash" data="BlockBreaker.swf">                     	
                        <param name="movie" value="BlockBreaker.swf"> 
                        <a href="../images/block_breaker-fallback.jpg" class="imageLink"><img  src="../images/block_breaker-fallback.jpg" alt="Block Breaker" /></a>
                    </object> 
                </div>   
            </div> 
            <span class="caption">Click to expand image</span> 
            
            <!--Game Info-->
            <span class="sectionHeader">BLOCK BREAKER</span>	
        
            <div class="siteDescription">Block Breaker presents the second iteration of my skills in developing a games "splash screen," the first iteration being <a href="whack-a-capsule">Whack-a-Capsule</a>. In this iterations, I developed a splash screen completely independent of the actually game. In terms of Flash, the splash screen was designed and coded on the first frame of the timeline while the game itself was on the second frame.</div>           
               
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
