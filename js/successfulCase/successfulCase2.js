
$(function() {
//	var educationInformation = localStorage.getItem('educationInformation'); // 获取本地存储
//	educationInformation ? testRender() : getAjax();
//	console.log(educationInformation)
//	function getAjax() {
//		$.ajax({
//			type: "get",
//			url: "json/json.json?callback=demo",
//			async: true,
//			success: function(data) {
//				localStorage.setItem('educationInformation',JSON.stringify(data)); 
//				console.log(data);
//				testRender();
//			},
//			dataType: 'jsonp',
//			jsonpCallback: 'testRender',
//          jsonp: 'callback'
//		});
//  }
		$.$thisFlag = '';
		var $currentIndex = '';
		var $nextDateType = '';
		var thisObject;
		$('#paging').on('click','a', function(){
			if($(this).index() === 0){
				$currentIndex = $('#paging a').index($('.current'));
				$nextDateType = $('#paging a').eq($currentIndex - 1).attr('data-type');
				$(this).attr('data-type',$nextDateType);
				$('#paging a').eq($currentIndex - 1).addClass('current').siblings().removeClass('current');
			}else if($(this).index() === 6){
			 	$currentIndex = $('#paging a').index($('.current'));
				$nextDateType = $('#paging a').eq($currentIndex + 1).attr('data-type');
				$(this).attr('data-type',$nextDateType);
				$('#paging a').eq($currentIndex + 1).addClass('current').siblings().removeClass('current');
			}else{
				$(this).addClass('current').siblings().removeClass('current');
		//				console.log($thisFlag);
			}
			$thisFlag = $(this).attr('data-type');
//			console.log($thisFlag);
			$('#getJson').attr('src','json/json.json?callback=demo&key=' + $thisFlag);
		})
})		
	
	

function demo(data){
	var scriptNode = document.getElementById("getJson");
	var demoAttr = scriptNode.getAttribute('src');
	var demoObject = demoAttr.slice(demoAttr.lastIndexOf('=')+1);
	console.log(demoAttr)
	if(demoObject === 'demoOne'){
		testRender(data.demoOne);
	}
	if(demoObject === 'demoTwo'){
		testRender(data.demoTwo);
	}
	if(demoObject === 'demoThree'){
		testRender(data.demoThree);
	}
	if(demoObject === 'demoFour'){
		testRender(data.demoFour);
	}
	if(demoObject === 'demoFive'){
		testRender(data.demoFive);
	}
}

function testRender(educationInformation) {
//		educationInformation = JSON.parse(localStorage.getItem('educationInformation'));
//		console.log(educationInformation.length)
	
		var html = "";
		for(var i = 0; i < educationInformation.length; i ++){
			html += '<li>'+
						'<a href="#">'+
							'<div class="img">'+
								'<img src="' + educationInformation[i].studentPic + '"  />'+
								'<div class="mask">'+
									'<div class="education">'+
										'<p>' + educationInformation[i].education1 + '</p>'+
										'<p>' + educationInformation[i].education2 + '</p>'+
									'</div>'+
									'<div class="aboutSchool">'+
										'<p class="schoolType">录取院校</p>'+
										'<p class="line"></p>'+
										'<p class="schoolName">'+
											educationInformation[i].schoolName1 +
										'</p>'+
										'<p class="link">'+
											'VIEW MORE'+
										'</p>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</a>'+
						'<div class="text">'+
							'<a href="#">'+
								'<div class="img">'+
									'<img src="' + educationInformation[i].schoolSign + '" />'+
								'</div>'+
							'</a>'+
							'<a href="#">'+
								'<div class="title">'+
									 educationInformation[i].studentType + '<span>' + educationInformation[i].exactType + '</span>'+
								'</div>'+
							'</a>'+
						'</div>'+
					'</li>'
		}
		var parentNode = document.getElementById("studentsList");
		console.log(parentNode)
		parentNode.innerHTML = html;
	}