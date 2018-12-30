<footer>

    <div class="logo">
        <!--Logo-->
        <!--
        <img src="/images/DP.svg" alt="DP" />

        <a href="/" class="logoLink"><span class="footer-d">D</span><span class="footer-p">P</span></a>
        -->
        <div class="footerHomeLinkWrapper"><a href="/" class="logoLink"><img src="/images/DP.svg" alt="DP" /></a></div>
        </div>
        
        <!--Site Links-->
        <div class="linksSection">
            <div class="section">
                <span class="footerTitle">Site Links</span><br/>
                <ul>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            
            <!--Social Links-->
            <div class="section">
                <span class="footerTitle">Social Links</span><br/>
                <ul>
                    <!-- <li><a href="https://twitter.com/Devpin1995" target="_blank">Twitter</a></li> -->
                    <li><a href="https://linkedin.com/in/dpiner" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/devpin95" target="_blank">GitHub</a></li>
                    <!-- <li><a href="http://www.freelancer.com/u/devpin.html" target="_blank">Freelancer</a></li> -->
                </ul>
            </div>
        </div>
           
    
    <!--Contact & About-->
    <div class="footerLinks">
    <!--Contact Information-->
        <div class="left">
       
            <span class="contactInfo">
                <span class="footerTitle">Contact Informaton</span><br/>
                <span id="footerEmailId"></span><br/>
                Area Code: 303<br/>
                Exchange: 630<br/>
                Number: 9320<br/>
                     
            </span>
        
        </div>
        
        <!--About-->
        <div class="right">
            <a href="about"><img src="/images/footerGradPic.jpg" width="104" title="Devin Piner" alt="Devin Piner" /></a>
            <a href="about" style="text-decoration:none;"><span class="footerTitle">About D.P.</span></a><br/>
            <p style="padding:0; margin:0;">Devin is a web designer and developer who loves to build eye-catching and interactive websites...&nbsp;&nbsp;&nbsp;&nbsp;<a href="about">Read More</a></p>                    
        </div>
    </div>
    
    <span class="copyright">Copyright &copy; <?php echo date("Y"); ?>&nbsp;<span class="color">Devin Piner</span> All Rights Reserved</span>

</footer> 
<script type="text/javascript">

	var name = "devin";
	var hostname = "dpiner.com";
	var email = name + "@" + hostname;
	
	document.getElementById("footerEmailId").innerHTML = "Email: " + email;
	
</script>

