$(function() {
	var imgHtml = '';
	$.ajax({
		type: "get",
		url: "../json/artAbroad.json",
		async: true,
		success: function(data) {
			$.each(data, function(i, value) {	
				var html = '<li class="clearfix">' +
								'<div class="img">' +
									'<a href="#">' +
										'<img src="' + value.src + '"  />' +
									'</a>' +
								'</div>' +
								'<div class="text">' +
									'<div class="title1">' + value.title + '</div>' +
									'<div class="title2">' + value.page +
									'</div>' +
									'<div class="title3">' + value.abordTime +
									'</div>' +
								'</div>' +
							'</li>'
				$('#majorList').append(html);
			})

		}
	});
})