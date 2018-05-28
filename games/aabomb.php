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
    
    	<?php include "../header.php"; ?>
        
        <!--Body-->
        <main>    
                           
			<!--Game-->
			<div class="gameWrapper">
            	<div class="game">
                    <object type="application/x-shockwave-flash" data="aabomb.swf">                     	
                        <param name="movie" value="aabomb.swf" >   
                        <a href="../images/aaBomb-fallback.jpg" class="imageLink"><img src="../images/aaBomb-fallback.jpg" alt="AA Bomb" style="marin-bottom:-10px;" /></a>                      
                    </object> 
                </div>                   
			</div> 
            <span class="caption">Click to expand image</span> 
            
            <!--Game Info-->
            <span class="sectionHeader">AA Bomb</span>	
        
        	<div class="siteDescription">AA Bomb marks my first venture into main menu systems in order to deliver the needed information - controls, back story - to the player. While this menu system is at it's most basic level, it's development proved to be an essential in improving my confidence in creating such systems.</div>           
               
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
