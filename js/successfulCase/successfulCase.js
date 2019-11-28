$(function() {
	getAjax();
	var educationInformation = localStorage.getItem('educationInformation'); // 获取本地存储
	educationInformation ? testRender() : getAjax();
//	console.log(educationInformation);
	
	function getAjax() {
		$.ajax({
			type: "GET",
			url: "../json/successfulCase.json",
			async: true,
			success: function(data) {
				//			console.log(data);
				localStorage.setItem('educationInformation', JSON.stringify(data));
				//			testRender('demoOne');
				testRender("demoOne");
				$('#paging a:eq(0)').addClass('current');
			}
		});
	}

	var $currentIndex = '';
	var $nextDateType = '';
	var thisObject;
	$('#paging').on('click', '.clickEvent', function() {
		if($(this).index() === 0) {
			$currentIndex = $('#paging a').index($('.current'));
			$nextDateType = $('#paging a').eq($currentIndex - 1).attr('data-type');
			$(this).attr('data-type', $nextDateType);
			$('#paging a').eq($currentIndex - 1).addClass('current').siblings().removeClass('current');
		} else if($(this).index() === 6) {
			$currentIndex = $('#paging a').index($('.current'));
			$nextDateType = $('#paging a').eq($currentIndex + 1).attr('data-type');
			$(this).attr('data-type', $nextDateType);
			$('#paging a').eq($currentIndex + 1).addClass('current').siblings().removeClass('current');
		} else {
			$(this).addClass('current').siblings().removeClass('current');
			//				console.log($thisFlag);
		}
		$.thisFlag = $(this).attr('data-type');
		testRender($.thisFlag);
	})


	//  tab
	$('.recordStudent>ul').hide();
	$('.recordStudent>ul:eq(1)').show();
	$('.successfulCase #recordType li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('#recordType').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
})

/*
function demo(data,temp){
	console.log(data[temp])
	if(data === 'demoOne'){
		testRender(data.demoOne);
	}
	if(data === 'demoTwo'){
		testRender(data.demoTwo);
	}
	if(data === 'demoThree'){
		testRender(data.demoThree);
	}
	if(data === 'demoFour'){
		testRender(data.demoFour);
	}
	if(data === 'demoFive'){
		testRender(data.demoFive);
	}
}

*/

function testRender(data) {
	//		var $thisFlag = '';
	educationInformation = JSON.parse(localStorage.getItem('educationInformation'));
	var html = "";
	var html2 = "";
//	console.log(educationInformation[data])
	$(educationInformation[data]).each(function(index, value) {
		console.log(value)
		
			html += '<li>' +
			'<a href="../successfulCase/personalResume.html">' +
			'<div class="img">' +
			'<img src="' + value.studentPic + '"  />' +
			'<div class="mask">' +
			'<div class="education">' +
			'<p>' + value.education1 + '</p>' +
			'<p>' + value.education2 + '</p>' +
			'</div>' +
			'<div class="aboutSchool">' +
			'<p class="schoolType">录取院校</p>' +
			'<p class="line"></p>' +
			'<p class="schoolName">' +
			value.schoolName1 +
			'</p>' +
			'<p class="link">' +
			'VIEW MORE' +
			'</p>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</a>' +
			'<div class="text">' +
			'<a href="#">' +
			'<div class="img">' +
			'<img src="' + value.schoolSign + '" />' +
			'</div>' +
			'</a>' +
			'<a href="#">' +
			'<div class="title">' +
			value.studentType + '<span>' + value.exactType + '</span>' +
			'</div>' +
			'</a>' +
			'</div>' +
			'</li>';
			
			html2 += '<li>' +
			'<a href="../successfulCase/personalResume.html">' +
			'<div class="img">' +
			'<img src="' + value.studentPic2 + '"  />' +
			'<div class="mask">' +
			'<div class="education">' +
			'<p>' + value.education12 + '</p>' +
			'<p>' + value.education22 + '</p>' +
			'</div>' +
			'<div class="aboutSchool">' +
			'<p class="schoolType">录取院校</p>' +
			'<p class="line"></p>' +
			'<p class="schoolName">' +
			value.schoolName12 +
			'</p>' +
			'<p class="link">' +
			'VIEW MORE' +
			'</p>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</a>' +
			'<div class="text">' +
			'<a href="#">' +
			'<div class="img">' +
			'<img src="' + value.schoolSign2 + '" />' +
			'</div>' +
			'</a>' +
			'<a href="#">' +
			'<div class="title">' +
			value.studentType2 + '<span>' + value.exactType2 + '</span>' +
			'</div>' +
			'</a>' +
			'</div>' +
			'</li>';
//		var parentNode = document.getElementById("studentsList");
//		parentNode.innerHTML = html;

		$('#studentsList').html(html);
		$('#studentsList2').html(html2);
		
		
	});
	
}