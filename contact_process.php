<?php

//Error messages
$nameErr = $emailErr = $typeErr = $commentErr= "";

$error = FALSE;

$name = $_POST['name'];
$email = $_POST['email'];
$type = $_POST['type'];
$comment = $_POST['comment'];
$to = "devpindroid@gmail.com";
$subject = "A new " . $type . " message from " . $name;

//Send the variables to be scrubbed
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    //validate name
    if(empty($name))
    {
        $nameErr = "Please enter your name";
        $error = TRUE;
    }
    else
    {
        $name = test_input($_POST["name"]);
        if(!preg_match("/^[a-zA-Z ]*$/",$name))
        {
            $nameErr = "Please Enter a Valid Name (e.g. John, John Smith) using only letters and spaces.";
            $error = TRUE;
        }
    }

    //Validate email
    if(empty($email))
    {
        $nameErr = "Please enter your email";
        $error = TRUE;
    }
    else
    {
        $email = test_input($_POST["email"]);
        $mailcheck = spamcheck($email);
        if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email) || $mailcheck == false)
        {
            $nameErr = "Please Enter a Valid Email Address (e.g. 123@abc.com).";
            $error = TRUE;
        }
    }

    if($type=="default")
    {
        $typeErr = "Please select a message type.";
        $error = TRUE;
    }
    else
    {
        $type = test_input($_POST["type"]);
        if($type != ("Business" || "Feedback" || "Just a Hello!" || "Other"))
        {
            $typeErr = "That was not one of the options. Please select a message type from the list";
            $error = TRUE;
        }
    }

    //Validate comment
    if(empty($comment))
    {
        $nameErr = "Please enter your comment";
        $error = TRUE;
    }
	$comment = test_input($_POST["comment"]);

    if($error == FALSE)
    {
        mail($to, $subject, $comment, "From: $name", "Email: $email");
        include "formSent.php";
    }


}


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

?>
