$(document).ready(function(){
	$('#navbar').slideDown(3000);
	$('#quote').fadeIn(4000);
	$('#pj_lnk').on('click',function(){
		$('.work_gallery').fadeIn(3000);
		$('html, body').animate({
			scrollTop: $(".work_gallery").offset().top
		}, 4500);
		$('#scrollButton').show();
		$('#scrollButton').on('click', function(){
			$('html, body').animate({
				scrollTop: $('#navbar').height
			});
			$('#scrollButton').hide();
		});
	});
	
	$('#about_me').fadeIn(4000);
	$('#works_bar_am').on('click', function(){
		$('.table').css('display', 'inline');
		$('html, body').animate({
			scrollTop: $("#table_id").offset().top
		}, 4500);
		$('#scrollButton').show();
		$('#scrollButton').on('click', function(){
			$('html, body').animate({
				scrollTop: $('#navbar').height
			});
			$('#scrollButton').hide();
		});
	});
	$('#about_text').on('click', function(){
		$('#about_text').hide();
		$('#about_me').css('padding-top', '6%');
		$('#about_image').show();
	});

	$('#about_text').on('mouseover',function(){
		$('#about_text').css('color', '#00CCF2');
	});

	$('#about_image').on('click', function(){
		$('#about_image').hide();
		$('#about_text').show();
		$('#about_me').css('padding-top', '10%');
	});

	$('#wwm').fadeIn(4000);
	$('#email').fadeIn(5000);
	$('#mediabar').slideDown(3000);
	$('#wwm').on('mouseover', function(){
		$('#wwm').css('color', 'darkorange');
	});


});