/* Start of Function */

$(document).ready(function(){

	var navstate = true;
	$('#navbar-toggle').on('click', function(){
		if(navstate){
			$('.navbar-custom').animate({
				width: '50vw',
				backgroundColor: '#2D184F'
			}, "slow");
			$('#navbar-toggle').animate({
				color: '#FFFFFF'
			}, "slow");
			$('#navbar-toggle').mouseover(function(){
				$(this).css("color", "#8681F3");
			});
			$('#navbar-toggle').mouseout(function(){
				$(this).css("color", "#FFFFFF");
			});
			$('.navbar-shade').fadeIn("slow");
			$('.navbar-menu').delay(500).fadeIn("slow");
		}
		else {
			$('.navbar-custom').delay(500).animate({
				width: '5vw',
				backgroundColor: '#FFFFFF'
			}, "slow");
			$('#navbar-toggle').delay(500).animate({
				color: '#000000'
			}, "slow");
			$('#navbar-toggle').mouseover(function(){
				$(this).css("color", "#CCCCCC");
			});
			$('#navbar-toggle').mouseout(function(){
				$(this).css("color", "#000000");
			});
			$('.navbar-shade').delay(500).fadeOut("slow");
			$('.navbar-menu').fadeOut("slow");
		};
		navstate = !navstate;
	});

	$('.navbar-shade').on('click', function(){
		$('.navbar-custom').delay(500).animate({
			width: '5vw',
			backgroundColor: '#FFFFFF'
		}, "slow");
		$('#navbar-toggle').delay(500).animate({
			color: '#000000'
		}, "slow");
		$('#navbar-toggle').mouseover(function(){
			$(this).css("color", "#CCCCCC");
		});
		$('#navbar-toggle').mouseout(function(){
			$(this).css("color", "#000000");
		});
		$('.navbar-shade').delay(500).fadeOut("slow");
		$('.navbar-menu').fadeOut("slow");
	});
});
