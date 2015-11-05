$(function() {
    $( "#releas" ).click(function(){
		$("nav").animate({bottom: "0"});
		$("#releas").hide();
		$("#releas1").show();
	});
});
$(function() {
    $( "#releas1" ).click(function(){
		$("nav").animate({bottom: "-200px"});
		$("#releas1").hide();
		$("#releas").show();
	});
});
$(function() {
    $( "#entered" ).click(function(){
		$("#about").fadeIn();
		$("#bgbt").fadeIn();
		//$(".close").fadeIn();
	});
});
$(function() {
    $( ".close,#bgbt" ).click(function(){
		$("#about").fadeOut();
		$("#bgbt").fadeOut();
		//$(".close").fadeOut();
	});
});$(function() {
    $( "#releas" ).on("tap",function(){
		$("nav").animate({bottom: "0"});
		$("#releas").hide();
		$("#releas1").show();
	});
});
$(function() {
    $( "#releas1" ).on("tap",function(){
		$("nav").animate({bottom: "-200px"});
		$("#releas1").hide();
		$("#releas").show();
	});
});
$(function() {
    $( "#entered" ).on("tap",function(){
		$("#about").fadeIn();
		$("#bgbt").fadeIn();
		//$(".close").fadeIn();
	});
});
$(function() {
    $( ".close,#bgbt" ).on("tap",function(){
		$("#about").fadeOut();
		$("#bgbt").fadeOut();
		//$(".close").fadeOut();
	});
});
$(function() {
	$( "#slider div" ).mouseenter(function(){
		$(this).find('div').fadeIn();
	});
});
$(function() {
	$( "#slider div" ).mouseleave(function(){
		$(this).find('div').fadeOut();
	});
});