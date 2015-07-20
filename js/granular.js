// send a message to the console.
console.log('Is this working???');

//Click on the arrow in the header
//Scroll down to the correct section instead of the defaul jump

//1. select something
//2. perform an action
// click on anything with the class of scroll->
$('.scroll').click( function(){
	//instructions
	console.log('clicked on the header a ?');

	//scroll down the page
	//- select the whole page 'html, body'
	//-jQuery animate to move to the topof the window of the page
	//-specify a duration for the animation

	//calculate the distance to scroll to the target section
	var href = $(this).attr('href');

	// store information in variable (var)
	var distanceToScroll = $(href).offset().top;

	console.log(distanceToScroll);

	$('html, body').animate({scrollTop :distanceToScroll}, 1000);

	//stop the default action (jumping down the page)
	//everything after return is ignored - should be last line of code within the fuction
	return false;
});