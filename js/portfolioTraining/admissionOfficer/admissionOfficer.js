$(function(){
	$('.advisoryTab .advisoryTabType li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.advisoryTabType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
	
})
