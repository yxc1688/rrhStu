$(function(){
	/* 控制多个块类似tab */
	$('#tabText').on('mouseover','li',function(){
		var $Index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.manyTab .tabTextContent').eq($Index).removeClass('manyTabNone').siblings('.tabTextContent').addClass('manyTabNone');
		$('.manyTab .tabImg').eq($Index).removeClass('manyTabNone').siblings('.tabImg').addClass('manyTabNone');
		$('.manyTab .aboutStudio').eq($Index).removeClass('manyTabNone').siblings('.aboutStudio').addClass('manyTabNone');
	})
	
	/* mouseover 改变图片  Service process*/
	var SrcBefore,SrcAfter,changeSrcBefore
	$('.process #flow').on('mouseover','li',function(){
		if(!$(this).hasClass('interval')){
			var $Index = $(this).index();
			var imgSrc = $(this).find('img').attr('src');
			SrcBefore = imgSrc.substring(imgSrc.lastIndexOf('.')-1,-1);
			SrcAfter = imgSrc.substring(imgSrc.lastIndexOf('.'));
			changeSrcBefore = imgSrc.substring(imgSrc.lastIndexOf('.')-1,imgSrc.lastIndexOf('.'));
//			console.log(changeSrcBefore)
			if(changeSrcBefore == 1){
				$(this).find('img').attr('src',SrcBefore + '2' + SrcAfter);
			}else if(changeSrcBefore == 2){
				$(this).find('img').attr('src',SrcBefore + '1' + SrcAfter);
			}
			$(this).addClass('hover');
		}
	}).on('mouseout','li',function(){
		var $Index = $(this).index();
		var imgSrc = $(this).find('img').attr('src');
		changeSrcBefore = imgSrc.substring(imgSrc.lastIndexOf('.')-1,imgSrc.lastIndexOf('.'));
		if(!$(this).hasClass('interval')){
			if(changeSrcBefore == 1){
				$(this).find('img').attr('src',SrcBefore + '2' + SrcAfter);
			}else if(changeSrcBefore == 2){
				$(this).find('img').attr('src',SrcBefore + '1' + SrcAfter);
			}
			$(this).removeClass('hover');
		}
	})
	
//	$('#portModal').trigger('click');
	$('#portModal').click(function(){
		$('#changeText').html('作品集课程');
	})
	
})
