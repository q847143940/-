$('.tab .menus li').each(function() {
	$('.tab .menus li').mouseover(function() {
		$('.tab .menus li').removeClass('bg');
		$(this).addClass('bg');
		var index = $(this).index();
		var arr = [
			'assets/bg1.png',
			'assets/bg2.png',
			'assets/bg3.png',
			'assets/bg4.png',
			'assets/bg5.png',
			'assets/bg6.png',
			'assets/bg7.png',
		] // 背景图片  不需要注释即可
		$('.tab .scroll').css('margin-top', -index * 3.3 + 'rem');
		//$('.tab').css('background-image','url('+arr[index]+')')// 背景图片  不需要注释即可
	})
})
$(function() {

	speed = 100; //数字越大滚得越慢
	var htab = document.getElementById("hdemo");
	var htab1 = document.getElementById("hdemo1");
	var htab2 = document.getElementById("hdemo2");
	htab2.innerHTML = htab1.innerHTML;
	htab.scrollTop = htab1.offsetHeight;

	function Marquee() {
		if(htab.scrollTop >= htab1.offsetHeight) {
			htab.scrollTop -= htab2.offsetHeight;
		} else {
			htab.scrollTop += 5;
		}
	}
	var MyMar = setInterval(Marquee, speed);
})