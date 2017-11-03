var main = function(){
	$(window).load(function(){
		$("header h1.unsplash-heading").delay(1000).fadeIn(500);
		$("header h1.awards-heading").delay(2000).fadeIn(500);
		$("header div.slide").delay(2000).fadeIn(500);
		$("header a.logo-to-site").delay(3000).fadeIn(500);
		$("header h4.year").delay(3000).fadeIn(500);
		$("header a.rules").delay(3500).fadeIn(500);
		$("header h4.head-text").delay(3500).fadeIn(500);
		$("header ul").delay(3500).fadeIn(500);
		$('section.whats-unsplash div.whats').fadeIn(1000);
	})
}

$(document).ready(main);