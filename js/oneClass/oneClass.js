$(function(){
	$('.tabTypeList ul li').click(function(){
		$(this)
			.addClass("active")
			.siblings().removeClass("active")
			.parents('.tabTypeList').next().children().eq($(this).index()).show()
			.siblings().hide()
	})
	var $imgSrc = [
					"../images/oneClass/curriculumNew1.jpg",
					"../images/oneClass/curriculumNew2.jpg",
					"../images/oneClass/curriculumNew3.jpg",
					"../images/oneClass/higherCourse1.jpg",
					"../images/oneClass/higherCourse2.jpg",
					"../images/oneClass/higherCourse3.jpg",
					"../images/oneClass/tabContent1.jpg",
					"../images/oneClass/tabContent2.jpg",
					"../images/oneClass/tabContent3.jpg"
				];
	var $textContent = [
		"如何做调研",
		"All about interaction design",
		"刺绣的5种基本针法",
		"轴侧图的绘图方法",
		"在美国大城市的中心学习艺术与设计 YES OR NO",
		"平面设计辅助图形怎么做",
		"扒一扒顶尖纯艺、插画师们都在看什么书",
		"Human-Computer-Interaction"
	];
	
	$('#oneClassBtn').click(function(){
		var randomNum = new Array(4);
		for(var i = 0; i < randomNum.length; i ++){
			var num = Math.floor(Math.random()*8);
			if(i == 0){
				randomNum[i] = num; 
			}else{
				for(var j = 0; j < i; j++) { //第二个与第三个数字进行判断
					if(num == randomNum[j]) { //如果重复从新开始
						i--
					} else {
						randomNum[i] = num;
					}
				}
			}
		}	
		console.log(randomNum)
		for(var i = 0; i < $('#curriculumNewList li').length; i ++){
			$('#curriculumNewList li:eq(' + i + ')>.img>img').attr('src',$imgSrc[randomNum[i]])
			$('#curriculumNewList li:eq(' + i + ') .question').text($textContent[randomNum[i]])
		}
	})
})
