// JavaScript Document
$( document ).ready(function() {
	//Call function to start animations
    startAnimations();
	
	function startAnimations(){		
		
		//Elements max-width has been set to their appropriate amounts with css
		//So I don't need to worry about setting the width for each one, just to 100%
		$('.percentage').each(function(index){
			$(this).animate({width: "100%"},2000);
			$('.skillTitle').hide().fadeIn(500);
		});
	}
 

	$("#tableHeader").stick_in_parent();
	
	//Professional
	$(".professional").hover(function(){
		$("#professional").addClass("animation");	
	});
	
	$(".professional").mouseleave(function(){
		$("#professional").removeClass("animation");	
	});
	
	//Experienced
	$(".experienced").hover(function(){
		$("#experienced").addClass("animation");	
	});
	
	$(".experienced").mouseleave(function(){
		$("#experienced").removeClass("animation");	
	});
	
	//Familiar
	$(".familiar").hover(function(){
		$("#familiar").addClass("animation");	
	});
	
	$(".familiar").mouseleave(function(){
		$("#familiar").removeClass("animation");	
	});
	
	//Beginner
	$(".beginner").hover(function(){
		$("#beginner").addClass("animation");	
	});
	
	$(".beginner").mouseleave(function(){
		$("#beginner").removeClass("animation");	
	});
 
});