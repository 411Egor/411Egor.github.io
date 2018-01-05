$(document).ready(function() {

	$("#products_grid").mixItUp();
	
	$("#portfolio").click(function() {
	$("html, body").animate({
			scrollTop : $(".products").offset().top
		}, 1200);
	});
	$("#about").click(function() {
	$("html, body").animate({
			scrollTop : $(".services").offset().top
		}, 1200);
	});
	$("#contact").click(function() {
	$("html, body").animate({
			scrollTop : $(".contacts").offset().top
		}, 1200);
	});
})