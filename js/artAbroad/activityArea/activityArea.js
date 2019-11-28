$(function() {
	var imgHtml = '';
	$.ajax({
		type: "get",
		url: "../json/activityArea.json",
		async: true,
		success: function(data) {
			$.each(data, function(i, value) {	
				var html = '<li class="clearfix">' +
						   '<div class="img">' +
								'<img src="' + value.src + '" />' +
							'</div>' +
							'<div class="text">' +
								'<div class="bigTitle">' +
									'<a href="#">' + value.title + '</a>' +
								'</div>' +
								'<div class="iconTitle">' +
									'<div class="icon1" style="width:120px;">' +
										'<img src="../images/artAbroad/activityArea/hdzq_ico_01.png"  />' +
										'<span>' + value.line + '</span>' +
									'</div>' +
									'<div class="icon1" style="width:326px;">' +
										'<img src="../images/artAbroad/activityArea/hdzq_ico_02.png"  />' +
										'<span>' + value.way + '</span>' +
									'</div>' +
									'<div class="icon2">' +
										'<img src="../images/artAbroad/activityArea/hdzq_ico_03.png"  />' +
										'<span>' + value.time + '</span>' +
									'</div>' +
									'<div class="icon2">' +
										'<img src="../images/artAbroad/activityArea/hdzq_ico_04.png"  />' +
										'<span>' + value.place + '</span>' +
									'</div>' +
								'</div>' +
								'<div class="listBtn">' +
									'<span>活动进行中</span>' +
								'</div>' +
							'</div>' +
						'</li>'
				$('#contentList').append(html);
			})

		}
	});
})