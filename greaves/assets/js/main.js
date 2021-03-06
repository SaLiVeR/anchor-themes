$(function() {

	var viewport = $(window),
		body = $('body'),
		
		header = $('#top'),
		search = $('#search');
		
	//  Give a CSS hook
	body.addClass('js');
	
	//  A neat little 
	if(window.location.pathname === '/') {
	    body.css({position: 'relative', top: -50, opacity: 0})
	        .animate({ top: 0, opacity: 1 });
	}
		
	/**
		Search box
	*/
		
	//  Hide the search
	search.css('margin-top', (search.outerHeight() -140));
	
	//  Append some way of making it come back
	var clicked = 1,
		marginTop = search.css('margin-top');
	
	header.append('<img src="' + base + 'assets/img/search.png" id="search">').children('#search').click(function() {
		
		//  Move the 
		search.animate({marginTop: clicked % 2 === 0 ? marginTop : 0});
		
		if(clicked % 2 === 0) {
			$(this).animate({opacity: 0}, 200, function() {
				$(this).attr('src', base + 'assets/img/search.png').animate({opacity: 1}, 200);
			});
			
			search.animate({marginTop: marginTop});
		} else {
		
			$(this).animate({opacity: 0}, 200, function() {
				$(this).attr('src', base + 'assets/img/close.png').animate({opacity: 1}, 200);
			});
		
			search.animate({marginTop: 0});
		}
		
		//  Increment counter
		clicked++;
	});
});