
require(['config'],function(){
	require(['jquery'],function($){
		//底栏菜单点击获得class名
		$('.footer-tabs').on('touchstart','a',function(){
			$(this).addClass('active').siblings().removeClass('active');
			return false;
		});
	})
})