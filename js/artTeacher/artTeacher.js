$(function(){
	$.ajax({
		type:"get",
		url:"../json/artTeacher.json",
		async:true,
		success : function(data){
			$.each(data,function(i,value){
				var html = '<li>' +
								'<div class="img">' +
									'<a href="#">' +
										'<img src="' + value.picSrc + '" />' +
										'<span class="border"></span>' +
									'</a>' +
								'</div>' +
								'<div class="text">' +
									'<div class="nameCall clearfix">' +
										'<div class="name">' +
											'<a href="#">' + value.teacherFirstName + '</a>' +
										'</div>' +
										'<div class="call">' +
											'立即咨询' +
										'</div>' +
									'</div>' +
									'<p class="school">' + value.schoolName + '</p>' +
									'<p class="degree">' + value.schoolType + '</p>' +
								'</div>' +
							'</li>'
				$('#teachers').append(html);
			})
		}
	});
})
