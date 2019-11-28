/*
加载网页中的公共元素
如果不需要公共部分,则尽量在网页中避免使用相应id. 
公共头部 id = header
公共尾部 id = footer
*/
$(function() {
	include('header'); // 引入头部
	include('footer', callback); // 引入尾部
})
/* 
 selecter 元素的选择器
 callback 加载页面后的回调函数
 */
function include(selecter, callback) {
	if($('#' + selecter).length) {
		$('#' + selecter).load('public/' + selecter + '.html', callback);
	}
}

function callback() {
	// Will be at the top
	$(window).scroll(function() {
		// if($(window).scrollTop() > 300) {
		// 	$('.scroll-top').fadeIn(300);
		// } else {
		// 	$('.scroll-top').fadeOut(200);
		// }
	})
}

//  回到顶部
$(function() {

	$('#gotop').on('click', function() {

		$('html,body').animate({scrollTop:'0'},500);

	});

	$(window).scroll(function() {

		if($(document).scrollTop() <= $('body').height() / 3) {
			$('#gotop').hide();
			return;
		} else {
			$('#gotop').show();
		}

	});
});