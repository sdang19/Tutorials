var sliderInt=1; //default image
var sliderNext=2; //next image

function startSlider(){
	count = $("#slider>img").size();

	loop=setInterval(function(){

		if(sliderNext>count){
			sliderNext=1;
			sliderInt=1;
		}
		$("#slider>img").fadeOut(300);
		$("#slider>img#"+sliderNext).fadeIn(300);
		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
	},2000);
}

function next(){
	var newSlide = sliderInt+1;
	showSlide(newSlide);

}

function prev(){
	var newSlide = sliderInt-1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);	
}

function showSlide(number){
	stopLoop();
	if(number>count){
		number = 1;
	}
	else if (number<1){
		number = count;
	}
	$("#slider>img").fadeOut(300);
	$("#slider>img#"+number).fadeIn(300);
	sliderInt=number;
	sliderNext=number+1;
	startSlider();
}



$(document).ready(function(){
	$('#slider>img#1').fadeIn(300);
	startSlider();
	$('#slider>img').hover(
		function()
		{
			stopLoop();
			$('#slider').addClass('highlight');
		},
		function()
		{
			startSlider();
			$('#slider').removeClass('highlight');
		}
	);
	// $('button').on('click',function(){
	// 	alert('I\'ve been clicked');
	// 	stopLoop();
	// });
		
	
	
});