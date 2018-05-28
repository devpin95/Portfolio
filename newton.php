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

<title>Devin Piner | Web Designs</title>
</head>

<body>
	<div class="content">
    
        <?php include "header.php"; ?>
        
        <!--Version 1-->
        <!--Title-->
        <div class="siteHeader">
            <h1>Newton Website Version 1</h1>

            <div class="badges">
                <?php include "siteBadges.php"; echo $Newton1; ?>
            </div>

        </div>
        
        <!--description-->
        <div class="siteDescription">
        	This website is the first version of my educational website based around Sir Isaac Newton. The purpose of this website was to create a website without following a tutorial line-by-line. This website also incuded my very first attempt at a navigation bar and header. The header was made using a table with three columns and two rows. The middle column included the website name and the page title. The column to the left and right of the center table included picture relating to Sir Isaac Newton. The bottom row of the table holds the navigation links. The navigation bar consists of links (&lt;a&gt;) that takes the user to a separate HTML document containing new information.
        </div>

        <div class="siteImage">
            <img src="images/newton_v1Panel.jpg" alt="Newton Websites Version 1" />
        </div>

        <div class="clearFix">&nbsp;</div>
        
        <!--Version 2-->
        <!--Title-->
        <div class="siteHeader">
            <h1>Newton Website Version 2</h1>

            <div class="badges">
                <?php include "siteBadges.php"; echo $Newton2; ?>
            </div>

        </div>
        
        <!--description-->
        <div class="siteDescription">
        	This is the second version of my educational website based on Sir Isaac Newton. The purpose of this website was to create a navigation bar using Adobe Fireworks. Using Fireworks to create the navigation allowed me to add a design aspect to the header. Creating the navigation bar in Fireworks taught me how to design attractive, usable navigation for the user to explore the website. 
        </div>

        <div class="siteImage">
            <img src="images/newton_v2Panel.jpg" alt="Newton Websites Version 2" />
        </div>
              
        <!--Version 2-->
        <!--Title-->
        <div class="siteHeader">
            <h1>Newton Website Version 3</h1>

            <div class="badges">
                <?php include "siteBadges.php"; echo $Newton3; ?>
            </div>

        </div>
        
        <!--description-->
        <div class="siteDescription">
        	This is the third and final version of my educational website based on Sir Isaac Newton. For this version of the website, I designed the whole layout in Adobe Fireworks. This gave me the freedom to design the entire website exactly the way I wanted to without being restricted by lack of experience with HTML or CSS. Because the entire layout was designed in Fireworks, when the file was exported to Dreamweaver, the table needed to be extended to the sides of the browser window. This was easy to do because in Fireworks we created slices, which, when exported to Dreamweaver, would turn into cells. Using a background image, I set the width if the cells on the left and right edges to 50% so that all of the content would stay in the center of the page.
        </div>

        <div class="siteImage">
            <img src="images/newton_v3Panel.jpg" alt="Newton Websites Version 3" />
        </div>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com" class="backButton"><img src="images/backArrow.svg"/>BACK TO PROJECTS</a>
            <a href="#" class="upButton"><img src="images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <?php include "footer.php"; ?>
        
	</div>
</body>
</html>
