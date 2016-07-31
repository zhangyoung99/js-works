
//gotop.js 

GoTop = (function(){
	var $gotop = $('<div id="go-top">回到顶部</div>');
	$('body').append($gotop);

	function init{
		$(window).on('scroll',function(){
			$offsetTop = $('body').scrollTop();
			console.log($offsetTop);
			if ($offsetTop > 50) {
				$gotop.show();
			}else {
				$gotop.hide();
			}
		});

		$gotop.on('click',function(){
			$(window).scrollTop(0);
		});

	}

	return {
		init:init
	}
	
}());

	GoTop.init();
