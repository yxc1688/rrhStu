$(function(){
	$('#next').on('click',function(){
		$('html,body').animate({
			scrollTop:$($(this).parent('.video-container').next()).offset().top
		},600);
	})
})
