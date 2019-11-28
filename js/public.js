$(function(){
	/* tab */
	$('.cityType li').mouseover(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.cityType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
})
