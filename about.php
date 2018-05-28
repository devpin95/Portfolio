<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />


<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/about.css">

<?php include 'headerFiles.php'; ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="js/sticky.js"></script>
<script src="js/skillsAnimation.js"></script>

<title>Devin Piner | Web Designs</title>
</head>

<body>
	<div class="content">
    
		<?php include 'header.php'; ?>
        
        <!--Body-->
        <main>     
        
        	<!--About-->
        	<div class="about">            	
                <div class="aboutTitle"><img src="images/gradPic.jpg" class="pic" alt="Devin Piner" title="Devin Piner"/>About Devin Piner</div>
                <p><?php include "aboutMe.php"; ?></p>
                
                <!--Social Links-->
                <div class="aboutSocialLinks">
                	<span class="sectionHeader" style="font-family:'open sans light'; font-size:20px;">Places You Can Find Him:</span>
                    <ul>
                        <li title="Twitter" class="twitter"><a href="https://twitter.com/Devpin1995" target="_blank" class="socialFillLink"></a><a href="https://twitter.com/Devpin1995" class="ieLinkFix">Twitter</a></li>
                        <li class="linkedin"><a href="http://www.linkedin.com/pub/devin-piner/96/547/310/" target="_blank" class="socialFillLink"></a><a href="http://www.linkedin.com/pub/devin-piner/96/547/310/" class="ieLinkFix">LinkedIn</a></li>
                        <li class="freelancer"><a href="http://www.freelancer.com/u/devpin.html" target="_blank" class="socialFillLink"></a><a href="http://www.freelancer.com/u/devpin.html" class="ieLinkFix">Freelancer.com</a></li>
                    </ul>
                </div>
            </div>  
            
            <!--Skills-->
            <span class="sectionHeader" style="margin-bottom:0">Skills</span>
            <!--Technical Skills-->            
            <div class="skills"> 
            	<!--Skills Header-->
                <table class="skillsTable" id="tableHeader">
                    <thead>
                        <tr>
                            <td class="title" id="beginner">Beginner<div class="marker"></div></td>
                            <td class="title" id="familiar">Familiar<div class="marker"></div></td>
                            <td class="title" id="experienced">Experienced<div class="marker"></div></td>
                            <td class="title" id="professional">Professional<div class="marker"></div></td>
                        </tr>
                    </thead>
                </table>
                       	                
            	<!--HTML-->
                <span class="sectionHeader">Markup & Programming Languages:</span>
                <span class="skillTitle">HTML</span>
                <div class="percentage professional gradient" id="skillHTML"></div>
                
                <!--HTML5-->
                <span class="skillTitle">HTML5</span>
                <div class="percentage beginner gradient" id="skillHTML5"></div>
                
                <!--CSS-->
                <span class="skillTitle">CSS</span>
                <div class="percentage professional gradient" id="skillCSS"></div>
                
                <!--CSS3-->                
                <div class="percentage familiar gradient" id="skillCSS3"><span class="skillTitle">CSS3</span></div> 
                
                <!--JavaScript-->
                <span class="skillTitle javascript">JavaScript</span>
                <div class="percentage beginner gradient" id="skillJavaScript"></div>
                
                <!--jQuery-->
                <span class="skillTitle">jQuery</span>
                <div class="percentage familiar gradient" id="skilljQuery"></div>
                
                <!--PHP-->
                <span class="skillTitle">PHP</span>
                <div class="percentage beginner gradient" id="skillPHP"></div>
                
                <!--Java-->
                <span class="skillTitle">Java</span>
                <div class="percentage familiar gradient" id="skillJava"></div>
                
                <br/>
                <!--Application Software-->
            	<span class="sectionHeader">Application Software:</span>
                
            	<!--Dreamweaver-->
                <span class="skillTitle">DreamWeaver</span>
                <div class="percentage experienced gradient" id="skillDreamweaver"></div>
                
                <!--Photoshop-->
                <span class="skillTitle">Photoshop</span>
                <div class="percentage familiar gradient" id="skillPhotoshop"></div>
                
                <!--Fireworks-->
                <span class="skillTitle">Fireworks</span>
                <div class="percentage experienced gradient" id="skillFireworks"></div>
                
                <!--Flash-->
                <span class="skillTitle">Flash</span>
                <div class="percentage experienced gradient" id="skillFlash"></div> 
                   
                <div class="clearFix">&nbsp;</div>             
            </div>                        
             	
            <!--About my portfolio-->
            <span class="sectionHeader" style="margin-bottom:0">Devin's Portfolio Website</span>
            <p style="margin-top:0">Devin's portfolio website is a collection of all the work that he is the most proud of. All work presented on his website represents a learning experience that improved his skills in web design. Devin's portfolio website also includes personal studies - projects which explore topics such as <a href="volcano">HTML and CSS</a>, <a href="newton">basic website design</a>, and <a href="gamesList">user interfaces in Flash games</a>. These studies expand Devin's skills and allow for exploration into the different fields of design.</p>
            
            <!--What I do-->
            <span class="sectionHeader" style="margin-bottom:0">What Devin Does</span>
            <p style="margin-top:0">Devin builds beautiful, eye-catching websites using current industry trends wherever possible to create positive user experiences. His main area of focus lies in the design and development of the front-end achitecture from start to finish.</p>                                                         
           
        </main>
        
		<?php include 'footer.php'; ?>
        
	</div>
</body>
</html>