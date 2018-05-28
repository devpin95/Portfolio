<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/sites.css">

<?php include 'headerFiles.php'; ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<!--Lightbox plugin-->
<script src="js/lightbox.js"></script>
<script src="js/popupJS.js"></script>
<link rel="stylesheet" type="text/css" href="css/lightboxStyle.css">

<title>Devin Piner - Web Designs</title>
</head>
<body>
	<div class="content">
    
    	<!--Header-->
        <?php include "header.php"; ?>

		<!--Image Window-->

        
        <!--Title-->
        <div class="siteHeader">
            <h1>Volcano Website<a href="/images/volcanoPanel.jpg" target="_blank" class="siteLink imageLink"><img src="/images/arrowLink.svg" /></a></h1>

            <div class="badges">
                <?php include "siteBadges.php"; echo $Volcano; ?>
            </div>


        </div>
        
        <!--description-->
        <div class="siteDescription">
        	Volcano website was the very first website that I created. Creating the Volcano Website taught me the basics of HTML and CSS coding. I really liked creating this website because I was able to throw in extra CSS styles to give the page some flair. Making this website for my Boulder CTEC class is what initially got me interested in web design and development as a career. Right away I understood what I was doing and I was never lost in all of the syntax and vocabulary. This website also helped me see what looked good and what didn't look good when it came to design choices like color choice, font sizes, link states, and anchor links. The purpose of this website was to begin building our knowledge of HTML and CSS coding, as well as, design choices involving user centered design (UCD) and user interface.
        </div>

        <div class="clearFix">&nbsp;</div>

        <div class="siteImage">
            <img src="images/volcanoPanel.jpg" alt="Volcano Website" />
        </div>

        <div class="clearFix">&nbsp;</div>

        <div class="footerActions">
            <a href="http://www.dpiner.com" class="backButton"><img src="images/backArrow.svg"/>BACK TO PROJECTS</a>
            <a href="#" class="upButton"><img src="images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <!--Footer-->
        <?php include "footer.php"; ?>
        
	</div>
</body>
</html>
