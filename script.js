$(document).ready(function(){
	$('#navbar').slideDown(3000);
	$('#quote').fadeIn(4000);
	$('h2').on('click',function(){
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

	$('#wwm').fadeIn(4000);
	$('#email').fadeIn(5000);
	$('#mediabar').slideDown(3000);
	$('#wwm').on('mouseover', function(){
		$('#wwm').css('color', 'darkorange');
	});


});