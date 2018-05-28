// JavaScript Document
function countChars(textbox, counter, max) {
	var count = max - document.getElementById(textbox).value.length;
	if (count < 0) 
		document.getElementById(counter).innerHTML = "<span style=\"color: red;\">" + count + " characters left</span>"; 
	else
		document.getElementById(counter).innerHTML = count + " characters left";
	
}