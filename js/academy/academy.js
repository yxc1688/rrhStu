$(function() {
	var imgHtml = '';
	$.ajax({
		type: "get",
		url: "../json/academy.json",
		async: true,
		success: function(data) {
			for(var i = 0; i < 5; i++) {
				imgHtml += '<img src="' + data[i].starNum[i] + '" />'
			}
			$.each(data, function(i, value) {	
				var html = '<li>' +
					'<a href="' + value.src + '">' +
					'<div class="img">' +
					'<img src="' + value.imgSrc + '"  />' +
					'</div>' +
					'<b class="bold">' + value.schoolName + '</b>' +
					'<span class="difficulty">' +
					'申请难度:' + value.difficulty + imgHtml +
					'</span>' +
					'<b class="typeList">' +
					'优势专业：' + value.goodMajor +
				'</b>' +
				'<span class="language">' +
				'<img src="../images/academy/pic156.png"  />' +
				'语言：托福：' + value.TuoScore + ' | 雅思：' + value.YaScore +
					'<img src="../images/academy/pic157.png"  />' +
					value.attendSchool +
					'</span>' +
					'</a>' +
					'</li>'
				$('#choiceOptionList').append(html);
			})

		}
	});
})