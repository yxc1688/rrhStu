$(function(){
	 /* newOffer  */
	$('.careerTypeTab').on('mouseover','div.col-xs-2',function(){
		var $colorArray = ['rgb(238, 120, 42)','rgb(0, 109, 86)','rgb(218, 223, 0)','rgb(228, 1, 111)','rgb(181, 1, 5)','rgb(200, 187, 155)'];
		var $Index = $(this).index();
		var $thisColor = $colorArray[$Index];
		$(this).css({
			background : $thisColor,
			color : '#fff'
		}).siblings().css({
			background : 'rgb(242, 242, 242)',
			color : 'rgb(153, 153, 153)'
		});
		$('.careerTypeTab').css('border-bottom','1px solid ' + $thisColor);
		$('.typeContent .intro').css('color',$thisColor);
	})
	
	/* 左右滑动控制按钮 */
	$('.module_left_right span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	/* 模态框 ??? */
	$('.success .pause').click(function(){
		var $videoHttp = ['http://spdb.psoneart.com/8d9cda944d9641ef951010e5d5867d81/442a467a1f6d48f1ac8df1e5469a0288-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987194-631319065-0-dcc210cf18ed558e258b6453df014dd8',
			'http://spdb.psoneart.com/e0f24813985945879d2854e4766b1360/5124d96b09ff423c9c4c29fce8ca493d-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987285-500326601-0-9014f90dfd0c7c81fff5bba7c1d02375',
			'http://spdb.psoneart.com/96a2aa22834241a2859641941b68d652/d3c60032c5894571be82e07962bf5fec-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987371-389115398-0-65505b965b1d84239c8f1c8d6a2b6d3f',
			'http://spdb.psoneart.com/92ad7c8a17b4405ba01e1a135fdfff12/b426ce2dd06547658648b96c550025ee-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987397-873892602-0-20a9463ab89d0d79afff2425b22a5299',
			'http://spdb.psoneart.com/7ad6ccb84c304bd0a2a86c5404783e80/d83d3b79e93f4401a8950cb9744a60b0-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987482-1610587411-0-f11b73c0ed082efb7eb96ba4008781c4',
			'http://spdb.psoneart.com/9ad70ecfbe05495584c9ed90d3a60230/9b71f11307af4d6f86298dd6cde60330-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987504-1147524074-0-6fe0a216ab78c2f6fdde2c54725cc8ba',
			'http://spdb.psoneart.com/e3c01d9c9a6e4068aabbba9166b3599d/da5964a7bf3746318424ef9cfd76e878-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987524-1248991786-0-3252630a76d1ed1023610639fd6201aa',
			'http://spdb.psoneart.com/3c03a26966cb469f88ab8a193cb8ca98/68a39ae35106410492037e7b28bc7a3b-f1f7c0dc98d63fd3e40b260335ad4e82.mp4?auth_key=1566987548-3135710-0-155c447af9b5c4458fcc65f95b29253d'];
		var $Index = $(this).index();
//		var $videoElement = '<video preload="preload" autoplay="autoplay" style="width: 100%; height: 100%;"'+
//							'src="' + $videoHttp[$Index] + '"></video>';
		var $videoElement = '<embed src="' + $videoHttp[$Index] + ' width="500" height="300" align="middle" allowScriptAccess="always" flashvars ="isAutoPlay=true" type="video/mp4"></embed>'
		$('#videoBox').html($videoElement);
	})
	/* tab */
	$('.artNew .aboutType li').mouseover(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.aboutType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
})
