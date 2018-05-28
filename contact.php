<?php 

$selectOptions = array(" ", "business", "feedback", "hello", "other");	//option available in select

if($_POST)
{

	//Error messages
	$nameErr = $emailErr = $typeErr = $commentErr= "";
	
	$error = FALSE;
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$type = $_POST['type'];
	$comment = $_POST['comment'];
	$to = "devin@dpiner.com";
	$subject = "A new message from your portfolio";
	
	//Scrub the data
	function test_input($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;	
	}
	
	//Function to validate email address
	function spamcheck($field) {
	  // Sanitize e-mail address
	  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
	  // Validate e-mail address
	  if(filter_var($field, FILTER_VALIDATE_EMAIL))
		return TRUE;
	  else
		return FALSE;
	}
	
	//Send the variables to be scrubbed
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		//validate name
		if(empty($name))	//Check if there is a value in the field
		{
			$nameErr = "**Please enter your name";
			$error = TRUE;
		}								
		else	//Validate the pattern of input after it has been scrubbed
		{
			$name = test_input($_POST["name"]);
			if(!preg_match("/^[a-zA-Z ]*$/",$name))
			{
				$nameErr = "**Please enter a valid name (e.g. John, John Smith) using only letters and spaces.<br/>";
				$error = TRUE;
			}
		}				
		if(strlen($name) > 50)	//Test the length of the value entered in $name
		{
			$nameErr .= "**Please enter a name shorter than 50 characters.";
			$error = TRUE;	
		}
	
		//Validate email
		if(empty($email))	//Check if there is a value in the field
		{
			$emailErr = "**Please enter your email";
			$error = TRUE;
		}
		else	//Validate the pattern of input after it has been scrubbed
		{
			$email = test_input($_POST["email"]);
			$mailcheck = spamcheck($email);
			if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email) || $mailcheck == false)
			{
				$emailErr = "**Please enter an email address in the correct format (e.g. 123@abc.com).";
				$error = TRUE;
			}
		}
		if(strlen($email) > 100)	//Test the length of the value entered in $email	
		{
			$emailErr .= "**Please enter an email address shorter than 100 characters.";
			$error = TRUE;	
		}
		
		//Validate message type 
		if($type == " ")	//Check if there is a value in the field other than the default
		{
			$typeErr = "**Please select a message type.";
			$error = TRUE;
		}
		else
		{
			$type = test_input($_POST["type"]);
			//if(!strcmp($type,"business") || !strcmp($type,"feedback") || !strcmp($type,"hello") || !strcmp($type,"other"))

            $search = array_search($type, $selectOptions );
			if ($search == FALSE)
			{
				    $typeErr = "**That was not one of the options. Please select a message type from the list";
				    $error = TRUE;
			}
		}
	
		//Validate comment
		if(empty($comment))
		{
			$commentErr = "**Please enter your comment";
			$error = TRUE;
		}
		$comment = test_input($_POST["comment"]);
		if(strlen($comment) > 1024)	//Test the length of the value entered in $comment	
		{
			$commentErr .= "**Your comment must be shorter than 1024 characters.";
			$error = TRUE;	
		}
		
		//Send the email only if there are no errors after validation	
		if($error == FALSE)
			mail($to, $subject, "From: $name \r\nEmail: $email \r\nMessage Type: $type\r\n \r\n"  . $comment, "Email: $email", "");
		
	}
				
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />


<link rel="stylesheet" type="text/css" href="css/base.css">
<link rel="stylesheet" type="text/css" href="css/contact.css">

<?php include 'headerFiles.php'; ?>
<script type="text/javascript" src="js/contactJS.js"></script>


<title>Devin Piner - Web Designs</title>
</head>
<body>

	<div class="content">
    
    	<!--Header-->
		<?php include "header.php"?>
        
        <!--Body-->
        <main>        
                        
            <?php if($_SERVER["REQUEST_METHOD"] == "GET" || $error){ ?>
				                
                <span class="sectionHeader">CONTACT FORM <span style="color:#000; font-family:'open sans light';" title="My Email">| <span id="contactEmailId"></span></span></span><br/>
                    <!--Form-->
                    <div class="contactForm"> 
                                       
                        <form action="contact" method="post">  	    
                        
                            <!--Name-->        
                            <div class="section">
                                <label>Your Name<span>John Smith</span></label>
                                <input type="text" name="name" tabindex="1" value="<?php if(isset($_POST['name'])) echo $_POST['name']?>" autocomplete="on"   required="required" title="Firstname Lastname (Lastname optional)" /><br/><span class="error"><?php echo $nameErr; ?></span>
                            </div>
                            
                            <!--Email-->
                            <div class="section">
                                <label>Email Address<span>123@abc.com</span></label>
                                <input type="email" name="email" tabindex="2" value="<?php if(isset($_POST['email'])) echo $_POST['email']?>" autocomplete="on" maxlength="100" required title="123@abc.com"/><br/><span class="error"><?php echo $emailErr; ?></span>
                            </div>
                            
                            <!--Subject-->
                            <div class="section">
                                <label>Message Type</label>
                                <select name="type" tabindex="3">
                                    <?php
                                        for($i = 0; $i < count($selectOptions); $i++) {
                                            echo '<option value="' . $selectOptions[$i] . '">' . $selectOptions[$i] . '</option>';
                                        }
                                    ?>
                                    <!-- option value="default">Select...</option>
                                    <option value="business">Business</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="hello">Just a Hello!</option>                        
                                    <option value="other">Other</option-->
                                </select><br/>
                                <span class="error"><?php echo $typeErr; ?></span>
                            </div>
                            
                            <!--Comment-->
                            <div class="section">
                                <label>Comment<span id="char_count">1024 characters available</span></label>
                                <span class="error commentErr"><?php echo $emailErr; ?></span>
                                <textarea id="textbox" name="comment" tabindex="4" rows="5" cols="40" maxlength="1024" onFocus="countChars('textbox','char_count',1024)" onKeyDown="countChars('textbox','char_count',1024)" onKeyUp="countChars('textbox','char_count',1024)" required><?php if(isset($_POST['comment'])) echo $_POST['comment']?></textarea>                           
                            </div>                                                        
                                                        
                            <!--Submit Button-->
                            <div class="section"><input type="submit" name="submit" value="Submit" class="linkButtons" tabindex="5"/></div>
                        </form>
                    </div>
            <?php } else { ?>
            	<!--THANKS!-->
                <span class="thanks">Thank you for contacting me!</span>
                <span class="subtext">I will get back to you soon.</span>
                <a href="/" class="linkButtons gradient">Home</a>
            <?php } ?>
               
        </main>
        
        <!--Footer-->
		<?php include "footer.php"?>
        
	</div>
    
    <script type="text/javascript">

		var name = "devin";
		var hostname = "dpiner.com";
		var email = name + "@" + hostname;
		
		document.getElementById("contactEmailId").innerHTML = email;
	
	</script>

</body>
</html>
