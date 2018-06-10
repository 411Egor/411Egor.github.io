$(document).ready(function() {

	$("body").append('<div class="top"><i class="fa fa-angle-double-up">');

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

$(".scroll").click(function() {
		$("html, body").animate({
			scrollTop : $(".services").offset().top
		}, 800);
	});

	$(".main_mnu ul a").mPageScroll2id();

	$(window).scroll(function() {
			if($(this).scrollTop() > $(this).height()) {
				$(".top").addClass("active");
			} else {
				$(".top").removeClass("active");
			}
		});
	$(".portfolio-item, a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});
});
