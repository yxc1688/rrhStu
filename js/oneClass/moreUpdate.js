$(function(){
	$.ajax({
		type:"get",
		url:"../json/moreUpdate.json",
		async:true,
		success : function(data){
			$.each(data,function(i,value){
				var html = '<li>' +
								'<div class="img">' +
									'<img src="' + value.picSrc + '" /><br />' +
									'<p class="timeLong">' + value.videoTime + '</p>' +
									'<div class="mask">' +
										'<a href="../model/noVideo.html" data-toggle="modal" data-target="#myModal" id="portModal">' +
											'<img src="../images/oneClass/bfan.png" />' +
										'</a>' +
									'</div>' +
								'</div>' +
								'<div class="question">' +
									value.text +
								'</div>' +
								'<div class="text">' +
									'<span>平面设计</span>' +
									'<span>高级研修</span>' +
									'<img src="../images/oneClass/ck.png" />' +
									'<span>' + value.peopleNum + '</span>' +
								'</div>' +
							'</li>'
				$('#allListContentNew').append(html);
			})
		}
	});
})
