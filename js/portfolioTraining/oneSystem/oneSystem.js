$(function() {
	var $Index = ''; // 经过的li的索引
	var $oldSrc = '';
	var $currentIndex = ''; // 当前的有active的路径  active是空类
	var $oldSrcArray = [];
	var $swiperControlBigPic = '';
	var $typeBgcolor = ["238,120,42", "0,109,86", "218,223,0", "228,1,111", "181,1,5", "200,187,155"];
	var $correspondingColor = ["#EE782A", "#006D56", "#DADF00", "#E4016F", "#B50105", "#C8BB9B"];

	$currentIndex = $('#tabList li.active').index();
	getAjax();
	testRender($currentIndex);
	// 存一下mouseover之前的路径
	for(var i = 0; i < $('#tabList li').length; i++) {
		$oldSrcArray.push($('#tabList li').eq(i).find('img').attr('src'));
	}
	$('#tabList li:eq(0) .img img').attr('src','../images/portfolioTraining/oneSystem/ldxzt_top_ico_1_1.png');
	$('#tabList').on('mouseover', 'li', function() {
		$('#tabList li:eq(0) .img img').attr('src','../images/portfolioTraining/oneSystem/ldxzt_top_ico_1_2.png')
		$Index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$currentIndex = $('#tabList li.active').index(); // 获取到当前tabList中添加active的li的索引
		// 替换bannerImg
		$('#bannerImg').attr('src', replaceSrc($Index, '#bannerImg', '.', -4));

		//		$bannerSrc =  $('#bannerImg').attr('src');
		//		$sliceSrcNum = $bannerSrc.slice($bannerSrc.lastIndexOf('.')-1,-4);
		//		$replaceAfter = $bannerSrc.replace($sliceSrcNum,[$Index+1]);
		//		console.log($oldSrcArray)

		//  切换替换thisImg
		if($currentIndex == $(this).index()) {
			$('#tabList li').each(function(index, element) {
				if(!$(element).hasClass('active')) {
					$(element).find('img').attr('src', $oldSrcArray[index]);
				}
			})
			$('#tabList li:eq(' + $Index + ') img').attr('src', replaceSrc($Index, '#tabList li:eq(' + $Index + ') img'));
		}

		//  thisBgcolor
		$(this).css({
			'background-color': 'rgb(' + $typeBgcolor[$currentIndex] + ')',
			'color': '#fff'
		}).siblings().css({
			'background-color': 'rgb(242, 242, 242)',
			'color': 'rgb(153, 153, 153)'
		});

		// 渲染页面
		getAjax();
		testRender($currentIndex);
	})
	
	// teachers  hover后随type改变的颜色控制
	$('.maskUl').on('mouseover', 'li', function() {
		$(this).find('.img').css('background-color', 'rgb(' + $typeBgcolor[$currentIndex] + ')');
		$(this).find('.text a:last-child').css('background-color', 'rgb(' + $typeBgcolor[$currentIndex] + ')');
	}).on('mouseleave', 'li', function() {
		$(this).find('.img').css('background-color', '#fff');
		$(this).find('.text a:last-child').css('background-color', '#333');
	})
	
	// 截取内容的路径
	function replaceSrc(index, selector, sliceStart, sliceEnd) {
		var $Src = ''; // 获取到banner的路径
		var $sliceSrcNum = ''; // 截取的banner的替换图片的位置
		var $replaceAfter = ''; // 替换后的路径
		var $wayTwoSrc = '';
		$Src = $(selector).attr('src');
		$sliceSrcNum = $Src.slice($Src.lastIndexOf(sliceStart) - 1, sliceEnd);
		if(selector == '#bannerImg') {
			$replaceAfter = $Src.replace($sliceSrcNum, index + 1);
		} else if($Src.indexOf('_2_2') != -1) {
			$replaceAfter = $Src.replace('_2_2', '_2_1');

		} else if($Src.indexOf('_2_1') != -1) {
			$replaceAfter = $Src.replace('_2_1', '_2_1');

		} else {
			$replaceAfter = $Src.replace('2', '1');
		}
		return $replaceAfter;
	}

	

	// 获取内容  ajax
	function getAjax() {
		$.ajax({
			type: "GET",
			url: "../json/oneSystem.json",
			async: true,
			success: function(data) {
				//				console.log(data);
				localStorage.setItem('oneSystemData', JSON.stringify(data));
				testRender($currentIndex, $swiperControlBigPic);
				setFunction();
			}
		});
	}
	
	// 请求成功后的函数，也就是相对于动态添加内容的操作(也可操作初始内容，因为页面加载完成就已经调用了getAjax())
	function setFunction(){
		$('.swiper-pagination .swiper-pagination-bullet-active').addClass('backgroundColor');
		// 创建的swiper的初始化
		var mySwiper = new Swiper('.studio .swiper-container', {
			slidesPerView: 'auto',
			loop: true,
			simulateTouch: false,
			slidesPerView: 3,
			slidesPerColumn: 1,
			noSwiping: true, // 禁止手动滑动
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true //修改swiper的父元素时，自动初始化swiper
		});
		$('.studio .controlBtn.prev').click(function() {
			mySwiper.slidePrev();
		});
		$('.studio .controlBtn.next').click(function() {
			mySwiper.slideNext();
		});
		
		
		var mySwiper_artMajors = new Swiper('.artMajors .swiper-container', {
			//autoplay: 3000,//可选选项，自动滑动
			loop: true,
			calculateHeight: true,
			pagination: '.artMajors .swiper-pagination',
			paginationClickable: true,
			slidesPerView: 1,
			slidesPerColumn: 1,
			noSwiping: true
			/*pagination: {
			  el: '.nr56 .swiper-pagination',
			  clickable :true,
			},*/
		})
		$('.artMajors .controlBtn.prev').click(function() {
			mySwiper_artMajors.slidePrev()
		});
		$('.artMajors .controlBtn.next').click(function() {
			mySwiper_artMajors.slideNext()
		});
		
		// 3d轮播
		var aa = new zturn({
			id: "zturn",
			opacity: 0.9,
			width: 400,
			Awidth: 700,
			scale: 0.9
		})
		
		
		// tabType 下的mouseover
		$('#swiperBox').on('mouseover', '.swiperType', function() {
			var $bigSrc = $(this).find('img').attr('src');
			$('#bigSrc').attr('src', $bigSrc);
			$swiperControlBigPic = $(this).index();
			console.log($swiperControlBigPic)
		})

		// borderColor
		$('.borderColor').css('border-color', $correspondingColor[$currentIndex]);

		// backgroundColor
		$('.backgroundColor').css('background-color', 'rgba(' + $typeBgcolor[$currentIndex] + ',0.9)');
		//		$('.swiper-pagination span.swiper-pagination-bullet-active').css('background-color',);

		// fontColor
		$('.fontColor').css('color', $correspondingColor[$currentIndex]);
	}

})

// 渲染内容
/*
 
 *  currentIndex [$currentIndex] :  传参是当前的有active的li的索引，索引的数控制的是在json第一层的第几个数组
 * 
 * */
function testRender(currentIndex) {
	console.log(currentIndex)
	oneSystemData = JSON.parse(localStorage.getItem('oneSystemData'));
	var currentGetData = oneSystemData[currentIndex];
	var fineArtImg = "";
	var designText = "";
	var artMajor = "";
	var newArray = [];
	var redefining = "",
		dlList = "";
	var zturnList = "";
	
	// studioLeft
	fineArtImg = '<div class="studioLeftTop">' +
		'<div class="img borderColor">' +
		'<img src="' + oneSystemData.fineAtrImg[currentIndex][1][0] + '" id="bigSrc" />' +
		'<div class="maskOpen">' +
		'<img src="../images/portfolioTraining/oneSystem/pic29.png" />' +
		'</div>' +
		'</div>' +
		'<div class="text">' +
		'<div class="TeacherName">' + oneSystemData.fineAtrImg[currentIndex][1][1] + '</div>' +
		'<div class="TeacherIntro">' +
		'<div class="TeacherTitle fontColor">' + oneSystemData.fineAtrImg[currentIndex][1][2] + '</div>' +
		'<div class="TeacherSchool">' + oneSystemData.fineAtrImg[currentIndex][1][3] + '</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="studioLeftBottom">' +
		'<div class="controlBtn prev">' +
		'<i class="fa fa-caret-left"></i>' +
		'</div>' +
		'<div class="swiper-container">' +
		'<div class="swiper-wrapper" id="swiperBox">' +
		'<div class="swiper-slide swiper-no-swiping swiperType">' +
		'<div class="img">' +
		'<img src="' + oneSystemData.fineAtrImg[currentIndex][0][0] + '" />' +
		'</div>' +
		'</div>' +
		'<div class="swiper-slide swiper-no-swiping swiperType">' +
		'<div class="img">' +
		'<img src="' + oneSystemData.fineAtrImg[currentIndex][1][0] + '" />' +
		'</div>' +
		'</div>' +
		'<div class="swiper-slide swiper-no-swiping swiperType">' +
		'<div class="img">' +
		'<img src="' + oneSystemData.fineAtrImg[currentIndex][2][0] + '" />' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="controlBtn next">' +
		'<i class="fa fa-caret-right"></i>' +
		'</div>' +
		'</div>'
	$("#studioLeft").html(fineArtImg);
	
	// studioRight
	designText = '<div class="bigFlag fontColor">' +
					oneSystemData.designText[currentIndex][0] +
				'</div>' +
				'<div class="smallFlag borderColor fontColor">' +
					oneSystemData.designText[currentIndex][1] +
				'</div>' +
				'<div class="pages">' +
					oneSystemData.designText[currentIndex][2] +
				'</div>'
	$("#studioRight").html(designText);
	
	// artMajorsList
	artMajor = '<div class="swiper-slide swiper-no-swiping">';
	$(oneSystemData.artMajor[currentIndex]).each(function(index,value){
		artMajor += '<a herf="#">' +
						'<div class="img">' +
							'<img src="' + oneSystemData.artMajor[currentIndex][index][0] + '" />' +
							'<div class="mask backgroundColor">' +
								'<div class="num">' + oneSystemData.artMajor[currentIndex][index][2] + '</div>' +
								'<div class="line"></div>' +
								'<div class="englishIntro">' + oneSystemData.artMajor[currentIndex][index][3] + '</div>' +
								'<div class="chineseIntro">' + oneSystemData.artMajor[currentIndex][index][4]+ '</div>' +
							'</div>' +
						'</div>' +
					'</a>'		
		
		
		if(index == 2){
			artMajor += '</div><div class="swiper-slide swiper-no-swiping">'
		}
	})
	$('#swiperWrapper').html(artMajor + '</div>');
	
	// redefining
	$(oneSystemData.redefining[currentIndex][1]).each(function(index,value){
		dlList += '<dt class="fontColor">' + value[0] + '</dt>' +
		'<dd>' + value[1] + '</dd>'
	})
	console.log(dlList)
	redefining = '<div class="img">' +
					'<img src="' + oneSystemData.redefining[currentIndex][0][0] + '" />' +
				'</div>' +
				'<div class="text">' +
					'<div class="textTitle borderColor fontColor">REDEFINING BOUNDRY</div>' +
					'<div class="smallTitle fontColor">重新定义边界</div>' +
					'<dl>' + dlList + 
					'</dl>' +
				'</div>' 
	$('#redefining').html(redefining + '</div>');	
	
	// zturnList
	console.log(oneSystemData.zturn[currentIndex][0][0])
	zturnList = '<li class="poster-item  zturn-item">' +
					'<img src="' + oneSystemData.zturn[currentIndex][0][0] + '" />' +
				'</li>' +
				'<li class="poster-item zturn-item">' +
					'<img src="' + oneSystemData.zturn[currentIndex][1][0] + '" />' +
				'</li>' +
				'<li class="poster-item zturn-item">' +
					'<img src="' + oneSystemData.zturn[currentIndex][2][0] + '" />' +
				'</li>' +
				'<li class="poster-item zturn-item">' +
					'<img src="' + oneSystemData.zturn[currentIndex][3][0] + '" />' +
				'</li>' +
				'<li class="poster-item zturn-item">' +
					'<img src="' + oneSystemData.zturn[currentIndex][4][0] + '" />' +
				'</li>'
	$('.zturnList').html(zturnList);	
}

/*$(function(){
//	var $Index = '';  // 经过的li的索引
//	var $bannerSrc = ''; // 获取到banner的路径
//	var $sliceSrcNum = ''; // 截取的banner的替换图片的位置
//	var $replaceAfter = ''; // 替换后的路径
	// banner
	
	var $Index = '';
	$('#tabList').on('mouseover','li',function(){
		$Index = $(this).index();
		var $bannerSrc = $('#bannerImg').attr('src');
		var $sliceSrcNum = $bannerSrc.slice($bannerSrc.lastIndexOf('.')-1,-4);
		var $replaceAfter = $bannerSrc.replace($sliceSrcNum,$Index+1);
		$('#bannerImg').attr('src',$replaceAfter);
		
		var $thisImg = $(this).find('img').attr('src');
		var $thisImgNum = $thisImg.slice($thisImg.lastIndexOf('.')-1,-4)
		if($thisImgNum === "1")
		
	})
})*/

/*
if(selector == '#bannerImg'){
			$replaceAfter = $Src.replace($sliceSrcNum,index+1);
		}
		if(($Src.split('a')).length-1 == 1){
			$replaceAfter = $Src.replace($sliceSrcNum,'1');
		}
		if(($Src.split('a')).length-1 == 2){
			$replaceAfter = $Src.replace('2_2','2_1');
		}
		return $replaceAfter;
		
		
	*/