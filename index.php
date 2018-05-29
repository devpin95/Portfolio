<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/home.css">

<meta name="description" content="View some of Devin's past works on the Web!">

<?php include 'headerFiles.php'; ?>

<title>Devin Piner - Web Designs</title>
</head>

<body>
	<div class="content">
    
    	<!--Header-->
		<?php include 'header.php'; ?>
        
        <!--Body-->
        <main>             
        	<!--About-->
        	<div class="about">
            	<div class="aboutTitle"><img src="images/gradPic.jpg" class="pic" alt="Devin Piner" title="Devin Piner"/>About Devin Piner</div>            	                
                <p><?php include "aboutMe.php"; ?>&nbsp;&nbsp;<a href="about">Learn More</a></p>
                
                <!--Social Links-->
                <div class="aboutSocialLinks">
                	<span class="sectionHeader" style="font-family:'open sans light'; font-size:20px;">Places You Can Find Him:</span>
                    <ul>
                        <li title="Twitter" class="twitter"><a href="https://twitter.com/Devpin1995" target="_blank" class="socialFillLink"></a>Twitter</li>
                        <li class="linkedin"><a href="http://www.linkedin.com/pub/devin-piner/96/547/310/" target="_blank" class="socialFillLink"></a>LinkedIn</li>
                        <li class="freelancer"><a href="http://www.freelancer.com/u/devpin.html" target="_blank" class="socialFillLink"></a>Freelancer.com</li>
                    </ul>
                </div>
                <div class="clearFix">&nbsp;</div>
            </div>   	
                    
            <!--use clearFix after every pair to make sure their float won't affect (effect?) the next pair-->    
            <!--Websites-->                    	            
        	<div class="grid websitesGrid">		
            <span class="sectionHeader">WEBSITES</span>
                           
                <!--Awareness Drive-->            
                <div class="work first-in-pair">  
                   <a href="awareness-drive" class="workLink"><img src="images/awarenessdrive.jpg" class="image" alt="AwarenessDrive.org" /></a>
                    <div class="title"><a href="awareness-drive">Awareness Drive</a></div>
                    My first client website.
                </div>
                
                <!--Portfolio-->                
                <div class="work second-in-pair">  
                    <a href="portfolio" class="workLink"><img src="images/portfolio.jpg" class="image" alt="My Porfolio" /></a> 
                    <div class="title"><a href="portfolio">My Portfolio</a></div>
                    Learn more about my portfolio!
                </div>   
                <div class="clearFix">&nbsp;</div>
                                                                                           
            </div>

            <div class="clearFix">&nbsp;</div>

            <!--Studies-->            
        	<div class="grid studiesGrid">
                 <span class="sectionHeader">STUDIES</span>
                 <!--First pair-->
                <!--Volcano website-->
                <div class="work first-in-pair">  
                    <a href="volcano" class="workLink"><img src="images/volcano.jpg" class="image volcano" alt="HTML and CSS Study" /></a>
                    <div class="title"><a href="volcano">Volcano Website</a></div>
                    Basic HTML and CSS study.
                </div>
                 
                <!--Isaac Websites-->                
                <div class="work second-in-pair">  
                    <a href="newton" class="workLink"><img src="images/isaac.jpg" class="image isaac" alt="Design Study" /></a> 
                    <div class="title"><a href="newton">Sir Isaac Newton Website</a></div>
                    Site design study (3 iterations).
                </div>         
                <div class="clearFix"></div>       
                 
                
                <!--Flash Games-->                
                <div class="work first-in-pair">  
                    <a href="games.php" class="workLink"><img src="images/flashGames.jpg" class="image games" alt="User Interface Study" /></a>
                    <div class="title"><a href="games.php">Flash Games</a></div>
                    Game UI study
                </div>

                <!--JavaScript Games-->                
                <div class="work second-in-pair">  
                    <a href="jsgames.php" class="workLink"><img src="images/jsGames.jpg" class="image isaac" alt="Design Study" /></a> 
                    <div class="title"><a href="jsgames.php">JavaScript + HTML5 Games</a></div>
                    Web-based game study.
                </div>         
                <div class="clearFix"></div>   
                                                               
            </div>

            <div class="footerActions">
                <a href="#" class="upButton"><img src="images/upArrow.svg" />BACK TO TOP</a>
            </div>

        </main>
        
        <!--footer-->
		<?php include 'footer.php'; ?>  

	</div>
                
        
</body>
</html>
