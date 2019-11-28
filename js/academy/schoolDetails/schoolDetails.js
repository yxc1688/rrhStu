$(function(){
	$('.contentSchool .contentSchoolList').hide();
	$('.contentSchool .contentSchoolList:eq(0)').show();
	$('.schoolContentTab li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.schoolContentTabType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
})
