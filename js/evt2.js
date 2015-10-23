$(function(){
	$('h1').hover(function () {
		$(this).css('fontSize', '120px');
	}, function () {
		$(this).css('fontSize', '' + fSize + ' px');
	});
});