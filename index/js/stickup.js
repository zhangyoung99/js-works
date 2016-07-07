//stickup.js

var $cur = $('#nav'),
    curH = $cur.height(),
    curW = $cur.width(),
    offsetTop = $cur.offset().top,
    offsetLeft = $cur.offset().left;

//把目标元素克隆一个用于占位，否则目标元素 Position 变为 fix后脱离文档流，导致页面跳动 
var $curClone = $cur.clone()
                .css({visibility:'hidden', display:'none'})
                .insertBefore($cur);

$(window).on('scroll',function(){
	var scrollTop = $(this).scrollTop();
	if (scrollTop >= offsetTop) {
		if (!isFixed()) {
			setFixed();
		}
	}else{
			if (isFixed()) {
				unsetFixed();
			}
		}
});

function isFixed(){
	return $cur.data('data-fixed');
}
function setFixed(){
	$cur.data('data-fixed',true)
	    .css({
	    	'position': 'fixed',
	    	'top': 0,
	    	'left': offsetLeft,
	    	'width': curW,
	    	'margin': 0,
	    	'z-index': 9999
	    });
	$curClone.show();
}

function unsetFixed(){
	$cur.data('data-fixed',false)
	    .removeAttr('style');
	$curClone.hide();
}