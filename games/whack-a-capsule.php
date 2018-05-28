<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

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
                    <object type="application/x-shockwave-flash" data="Whack-a-Capsule.swf">                     	
                        <param name="movie" value="Whack-a-Capsule.swf">
                        <a href="../images/whack_a_capsule-fallback.jpg" class="imageLink"><img src="../images/whack_a_capsule-fallback.jpg" alt="Whack-a-Capsule" /></a>  
                    </object> 
                </div>   
            </div>  
            <span class="caption">Click to expand image</span>
            
            <!--Game Info-->
            <span class="sectionHeader">BLOCK BREAKER</span>	
        
            <div class="siteDescription">Block Breaker, while being my first attempt at developing a game in Flash, is also my first attempt at a "splash screen", or an introduction to the user. Creating this games splash screen did not just help improve my skills in the design, but also the code behind the user interface.</div>           
               
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
