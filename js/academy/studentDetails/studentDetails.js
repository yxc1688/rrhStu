$(function(){
	$('.typeListContent div').hide();
	$('.typeListContent div:eq(0)').show()
	$('#floatPieceTab .tabType li').mouseover(function(){
		console.log($(this).index())
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.tabType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
	$('.typeListContent div:eq(0)').show()
	$('#floatPieceTab .tabType li').mouseover(function(){
		console.log($(this).index())
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.tabType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
	
	$('#collegeTab ul li').mouseover(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.tabContentType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
})
