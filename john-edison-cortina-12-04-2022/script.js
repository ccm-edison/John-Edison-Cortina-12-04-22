$(document).ready(function(){
	$('body').on('mouseover', '.icon-wrapper .icon-list .circle', function(){
		$("body").addClass('active-hover');
		$(this).closest(".icon-list .circle").addClass("active-circle");
	});

	$('body').on('mouseleave', '.icon-wrapper .icon-list .circle', function(){
		$("body").removeClass('active-hover');
		$(this).closest(".icon-list .circle").removeClass("active-circle");
	});

	$('body').on('mouseover','.icon-wrapper .icon-list .square', function(){
		var colorTxtMouseOver = $(this).siblings('.color-text');
		colorTxtMouseOver.addClass('active');
		$("body").addClass('active-hover-square');
		$(this).closest(".icon-list .square").addClass("active-square");
	});

	$('body').on('mouseleave', '.icon-wrapper .icon-list .square', function(){
		var colorTxtMouseLeave = $(this).siblings('.color-text');
		colorTxtMouseLeave.removeClass('active');
		$("body").removeClass('active-hover-square');
		$(this).closest(".icon-list .square").removeClass("active-square");
	});

	$('body').on('click', '.icon-wrapper .icon-list .circle', function(){
		$(".icon-wrapper .icon-list .square").addClass('active');
	});
	
	$('body').on('click', '.icon-wrapper .icon-list .square', function(){
		$iconSquare = $(this).parent().clone();
		$(".icon-wrapper").prepend($iconSquare);
		$(".icon-wrapper .icon-list .square").removeClass('active');
		$(".icon-wrapper .icon-list .color-text").removeClass('active');
	});
});