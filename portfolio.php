<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/portfolio.css">

<?php include 'headerFiles.php'; ?>

<title>Devin Piner | Web Designs</title>
</head>

<body>
	<div class="content">
        <!--Header-->
        <?php include "header.php"; ?>
        
        <main>
            
            <!--Title-->
            <div class="siteHeader">
                <h1>My Portfolio</h1>
            </div>
            
            <!--description-->
            <div class="siteDescription">
            	With my portfolio, my goal was (and is) to show off my skills in both web design and development. I used techniques to reflect the current standards of the web as well as to create a more pleasant time for viewers. Here is a list of some of those techniques and how I used them on my portfolio: 
            </div>
            
            <!--top 3-->
            <!--CSS3-->
            <div class="technique">
            	<span class="techniqueTitle"><img src="images/badge-css3.svg" alt="CSS3" />CSS3</span>
                <p>I used CSS3 to create hover animations for links, rounded box edges, and drop-shadows. I also took extra care to support all browser CSS3 standards using <code>-moz-</code>, <code>-webkit-</code>, <code>-ms-</code>, <code>-o-</code>, and <code>-khtml-</code> wherever needed in order to create a consistent experience across all browsers.</p>
            	<div class="clearFix"></div>
            </div>
            
            <!--HTML5-->
            <div class="technique middle">
            	<span class="techniqueTitle"><img src="images/badge-html5.svg" alt="HTML5" />HTML5</span>
                <p>I used HTML5 to build a cleaner source code than plain HTML. HTML5 was also used in conjunction with a server-side language for client-side validation on my <a href="contact">contact page</a> in order to provide real-time feedback for users filling out the form.</p>
                <div class="clearFix"></div>
            </div>
            
            <!--jQuery-->
            <div class="technique">
            	<span class="techniqueTitle"><img src="images/badge-jquery.svg" alt="jQuery" />jQuery & JavaScript Libraries</span>
                <p>Using jQuery and pre-made JavaScript libraries allowed me to add features to my portfolio faster than if I had to develop them myself. I utilize <a href="http://modernizr.com/" target="_blank">Modernizr.js</a> to activate CSS3 and HTML5 features in older browsers, <a href="https://github.com/scottjehl/Respond" target="_blank">respond.js</a> to allow for responsive CSS in older browsers, and <a href="http://leafo.net/sticky-kit/" target="_blank">Sticky-Kit</a> for a sticky header on the <a href="/about">about</a> page.</p>
                <div class="clearFix"></div>
            </div>
            
            <!--bottom 3-->
            <!--Responsive Design-->
			<div class="technique">
            	<span class="techniqueTitle"><img src="images/badge-css.svg" alt="CSS" />Responsive Design</span>
                <p>My portfolio takes advantage of media queries to serve up the appropriate CSS styles for all screen resolutions. If you are viewing this page on a desktop, go ahead and adjust the width of the browser to see how it affects this page. <a href="https://github.com/scottjehl/Respond" target="_blank">respond.js</a> is used to activate the required responsive features in older browsers.</p>
                <div class="clearFix"></div>
            </div>
            
            <!--Programming-->
            <div class="technique middle">
            	<span class="techniqueTitle"><img src="images/badge-php.svg" alt="PHP" />Server-Side Programming</span>
                <p>Using server-side programming languages allow my portfolio to create each page from a basic template containing files detailing static features, such as the header/navigation and footer.</p>
                <div class="clearFix"></div>
            </div>
            
            <!--Valid HTML & CSS-->
            <div class="technique" style="clear:right;">
            	<span class="techniqueTitle">Valid HTML and CSS</span>
                <p>Valid HTML and CSS is a priority when it comes to creating long-lasting and dependent website. Because of this, I have taken extra care to validate each page to make sure they are up to <a href="http://www.w3.org/" target="_blank">W3C</a> standards. Feel free to check the validity of each page by following the instructions <a href="http://validator.w3.org/">here</a>.</p>
                <div class="clearFix"></div>
            </div>                                  
            
            <div class="clearFix">&nbsp;</div>
            
            <div class="comparisonsWrapper">
            
                <!--Title-->
                <div class="siteHeader">
                    <h1>Portfolio Comparisons</h1>
                </div>
            
                <!--description-->
                <div class="siteDescription">
                    <p>For a <a href="http://skillsusa.org/" target="_blank">SkillsUSA</a> competition, we were given an assignment to design and create our own online portfolio and resume. Competing againsts five of my peers, my portfolio stood out to the judges and won first place. After graduating high school and deciding that I wanted to make a career of making websites, I decided to redesign my portfolio to better match who I am as a web developer. To visualize how I have grown, both as a web developer and a person, I have placed both websites side-by-side to show how they have changed. </p>
                </div>
            
                <!--Home-->
                <div class="comparison" style="margin-top:0;">
                    <div class="techniqueTitle">Home</div>
                    
                    <ul class="siteChanges">
                    	<li>Projects focused to fit field of study</li>
                        <li>jQuery Slideshow replaced with gridded projects</li>
                        <li>Personal introduction added to home page</li>
                    </ul>
                    <div class="version"><img src="images/progressionArrow.fw.png" alt="" /></div>
                    <div class="p1"><img src="images/comparison-home-p1.jpg" alt="Portfolio Version 1 Home" /></div>
                    <div class="p2"><img src="images/comparison-home-p2.jpg" alt="Portfolio Version 2 Home" /></div>
                    <div class="clearFix">&nbsp;</div>
                                        
                </div>
                
                <!--About-->
                <div class="comparison">
                    <div class="techniqueTitle">About</div>
                    
                    <ul class="siteChanges">
                    	<li>Rewritten introduction</li>
                        <li>Introduction shortened and put in third-person</li>
                        <li>Skills graph added</li>
                    </ul>
                    <div class="version"><img src="images/progressionArrow.fw.png" alt="" /></div>
                    <div class="p1"><img src="images/comparison-about-p1.jpg" alt="Portfolio Version 1 Home" /></div>
                    <div class="p2"><img src="images/comparison-about-p2.jpg" alt="Portfolio Version 2 Home" /></div>
                    <div class="clearFix">&nbsp;</div>
                                        
                </div>
                
                <!--Resume-->
                <div class="comparison">
                    <div class="techniqueTitle">Resume</div>
                    <ul class="siteChanges">
                    	<li>Some elements changed to fit field of interest</li>
                        <li>Overall design changed to improve readability</li>
                        <li>Download link added</li>
                    </ul>
                    <div class="version"><img src="images/progressionArrow.fw.png" alt="" /></div>
                    <div class="p1"><img src="images/comparison-resume-p1.jpg" alt="Portfolio Version 1 Resume" /></div>
                    <div class="p2"><img src="images/comparison-resume-p2.jpg" alt="Portfolio Version 2 Resume" /></div>
                    <div class="clearFix">&nbsp;</div>                    
                </div>
                
                <!--contact-->
                <div class="comparison">
                    <div class="techniqueTitle">Contact Page</div>
                    <ul class="siteChanges">
                    	<li>Complete redesign</li>
                        <li>Scripts written from scratch</li>
                    </ul>
                    
                    <div class="version"><img src="images/progressionArrow.fw.png" alt="" /></div>
                    <div class="p1"><img src="images/comparison-contact-p1.jpg" alt="Portfolio Version 1 Contact" /></div>
                    <div class="p2"><img src="images/comparison-contact-p2.jpg" alt="Portfolio Version 2 Contact" /></div>
                    <div class="clearFix">&nbsp;</div>
                </div>
            </div>
            
        </main>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com" class="backButton"><img src="images/backArrow.svg"/>BACK TO PROJECTS</a>
            <a href="#" class="upButton"><img src="images/upArrow.svg"/>BACK TO TOP</a>
        </div>
        
        <!--Footer-->
        <?php include "footer.php"; ?>
    </div>
</body>
</html>