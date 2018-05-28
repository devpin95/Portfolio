<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/sites.css">

<?php include 'headerFiles.php'; ?>

<title>Devin Piner - Web Designs</title>
</head>

<body>
	<div class="content">
    
    	<!--Header-->
        <?php include "header.php"; ?>
        
        <div class="siteHeader">
            <h1>Awareness Drive<a href="http://www.awarenessdrive.org/" target="_blank" class="siteLink"><img src="/images/arrowLink.svg" /></a></h1>


            <div class="badges">
                <?php include "siteBadges.php"; echo $AwarenessDrive; ?>
            </div>

        </div>
        
        <div class="siteDescription">
        AwarenessDrive.org was the very first website that I work on for a client. It was also the first time I built a site with a team. In this case, it was a group of six (including myself) that designed and built the site. I was the project manager for the site. My job was to make sure everything got done when it needed to get done. AwarenessDrive was also the first site that I really dove into JQuery for navigation. The jQuery features included in the site were a sticky navigation bar and animated navigation effects. Being involved in this project was a major learning experience. I developed my leadership skills as well as my speech and communication skills. As project manager, I was required to communicate back and forth with the clients in order to get the needed information and design preferences.
        </div>

        <div class="siteImage">
            <p>**This site is no longer being maintained</p>
            <img src="images/awarenessdrivePanel.jpg" alt="Volcano Website" />
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
