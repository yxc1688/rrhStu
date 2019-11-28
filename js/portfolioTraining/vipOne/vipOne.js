$(function(){
	/* 切换 right */
	$('.schemeTab #garde li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.schemeTabControl').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
	/* 切换控制按钮的文字 */
	var	USAAarry = ['VIP TOP 3','VIP TOP 5','VIP TOP 10'];
	var EnglandArray = ['VIP TOP 1+1','VIP TOP 5','VIP TOP 8'];
	$('.schemeTab #country li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active");
		if($(this).html() === "美国"){
			$(".schemeTab #typeBtn li").each(function(index,element){
				$(element).html(USAAarry[index]);
			})
		}else if($(this).html() === "英国"){
			$(".schemeTab #typeBtn li").each(function(index,element){
				$(element).html(EnglandArray[index]);
			})
		}
	})
	/* 控制最后一列 */
	$(".schemeTab #typeBtn li.normalBtn").click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active");
		if($(this).html() === "VIP TOP 3" || $(this).html() === "VIP TOP 1+1"){
			$('.schemeContentList>div div').each(function(index,element){
				$(element).removeClass('over');
			})
		}else if($(this).html() === "VIP TOP 5"){
			console.log($('.schemeTab #garde li').index('.active'))
			if($('.schemeTab #garde li').index('.active') === 1){
				$('.schemeContentList>div:eq(0) div').each(function(index,element){
					$(element).removeClass('over');
					if($(element).hasClass('top5')){
						$(element).addClass('over');
					}
				})
				
			}else{
				$('.schemeContentList>div:eq(1) div').each(function(index,element){
					$(element).removeClass('over');
					if($(element).hasClass('top52')){
						$(element).addClass('over');
					}
				})
			}
		}else if($(this).html() === "VIP TOP 10"){
			$('.schemeContentList>div:eq(0) div').each(function(index,element){
				$(element).removeClass('over');
				if(!$(element).hasClass('noneOver')){
					$(element).addClass('over');
				}
			})
		}else if($(this).html() === "VIP TOP 8"){
			$('.schemeContentList>div:eq(1) div').each(function(index,element){
				$(element).removeClass('over');
				if(!$(element).hasClass('top8')){
					$(element).addClass('over');
				}
			})
		}
	})
})
