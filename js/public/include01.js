/*
加载网页中的公共元素
如果不需要公共部分,则尽量在网页中避免使用相应id. 
公共头部 id = header
公共尾部 id = footer
*/
// $(function() {
// 	include('header'); // 引入头部
// 	include('footer', callback); // 引入尾部
// })
/*
 selecter 元素的选择器
 callback 加载页面后的回调函数
 */
// function include(selecter, callback) {
// 	if($('#' + selecter).length) {
// 		$('#' + selecter).load('public/' + selecter + '.html', callback);
// 	}
// }
function callback() {
	// Will be at the top

}
(function (win) {
	function Publicsector(obj) {
		let that=this;
		$.each(obj.CommonNode,function (index,item) {
			if(obj.NavigationPath){
				that.include(item,true)
			}else{
				that.include(item)
			}
		});
		$('#gotop').on('click', function() {
			that.HtmlAnimate()
		});
		$(window).scroll(function () {
			that.gotop();
		});
		$(window).scroll(function() {
			that.windowScroll()
		})
	}
	Publicsector.prototype={
		include:function (select,navigat) {
			if(navigat){
				$('#'+select).load('../public/'+select+'.html')
			}else{
				$('#'+select).load('public/'+select+'.html')
			}
		},
		HtmlAnimate:function () {
			$('html,body').animate({scrollTop:'0'},500);
		},
		//  回到顶部
		gotop:function() {
			if($(document).scrollTop() <= $('body').height() / 3) {
				$('#gotop').hide();
				return;
			} else {
				$('#gotop').show();
			}
		},
		windowScroll:function() {
			if($(window).scrollTop() > 300) {
				$('.scroll-top').fadeIn(300);
			} else {
				$('.scroll-top').fadeOut(200);
			}
		}
	}
	win.Publicsector=Publicsector;
})(window)