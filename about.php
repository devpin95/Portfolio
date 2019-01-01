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
                <div class="aboutTitle"><img src="images/gradPic.jpg" class="pic" alt="Devin Piner" title="Devin Piner"/>About Me</div>
                <?php include "aboutMe.php"; ?>
                
                <!--Social Links-->
                <div class="aboutSocialLinks">
                    <p class="aboutSocialLinksHeader">Places You Can Find Me</p>
                    <ul>
                        <li class="linkedin"><a href="https://linkedin.com/in/dpiner" target="_blank" class="socialFillLink"></a>LinkedIn</li>
                        <li class="github"><a href="https://github.com/devpin95" target="_blank" class="socialFillLink"></a>GitHub</li>
                    </ul>
                </div>
                <div class="clearFix">&nbsp;</div>
            </div>                        
             
            <div class="data">
                <span class="sectionHeader">Activity</span>
                <div class="wakatimeData">
                    <div class="githubData">
                        <!-- Prepare a container for your calendar. -->
                        <script src="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.min.js"></script>

                        <!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
                        <link rel="stylesheet" href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css" />

                        <!-- Prepare a container for your calendar. -->
                        <div class="calendar">
                            <!-- Loading stuff -->
                            Loading data
                        </div>

                        <script> new GitHubCalendar(".calendar", "devpin95");</script>
                        <p class="calendarSource"><a href="https://github.com/IonicaBizau/github-calendar.git">GitHub Calander by Ionică Bizău</a></p>
                    </div>
                    <h2>Coding Activity in the last 30 days</h2>
                    <figure><embed src="https://wakatime.com/share/@devpin/458e0927-8933-4781-ba2a-c4903ba55771.svg"></embed></figure>

                    <p id="totalTime"></p>
                    <p class="totalTimeLabel">Spent coding in the last 30 days</p>

                    <div class="pie">
                        <h2>Languages Used in the last 30 days</h2>
                        <!-- <figure><embed src="https://wakatime.com/share/@devpin/284e8834-a05b-45c6-93f8-c64210253890.svg"></embed></figure> -->
                        <!-- <div id="languages"></div> -->
                        <canvas id="languagesChartContainer"></canvas>
                        <ul id="languagesKey">
                        </ul>
                    </div>

                    <div class="pie">
                        <h2>Editors Used in the last 30 days</h2>
                        <canvas id="editorsChartContainer"></canvas>
                        <ul id="editorsKey">
                        </ul>
                        <!--figure><embed src="https://wakatime.com/share/@devpin/fd8231fa-f677-4d23-a00b-8ec9467d61c2.svg" id="editors"></embed></figure-->
                        <!-- <div id="editors"></div> -->
                    </div>

                    <div class="clearFix">&nbsp;</div>
                </div>
            </div>
           
        </main>
        
		<?php include 'footer.php'; ?>
        
	</div>

    <script src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"></script>
    <script src="js/Chart.min.js"></script>
    <script src="js/WakaTimeDataRequest.js"></script>
</body>
</html>