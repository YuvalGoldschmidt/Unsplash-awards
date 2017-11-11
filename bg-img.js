var main = function(){
	$(window).load(function(){
		/*The loading*/
		$("header h1.unsplash-heading").delay(1000).fadeIn(500);
		$("header h1.awards-heading").delay(2000).fadeIn(500);
		$("header div.slide:first-child").delay(2000).fadeIn(500);
		$("header a.logo-to-site").delay(3000).fadeIn(500);
		$("header h4.year").delay(3000).fadeIn(500);
		$("header a.rules").delay(3500).fadeIn(500);
		$("header h4.head-text").delay(3500).fadeIn(500);
		$("header ul").delay(3500).fadeIn(500);
		$('section.whats-unsplash div.whats').fadeIn(1000);

		/*the slide*/
		var slideIndex = 0;
		var slides = $("header div.right div.slide");
		setTimeout(function showSlides() {
		    for (var i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";
		    }
		    slideIndex++;
		    if (slideIndex > slides.length) {slideIndex = 1}
		    slides[slideIndex-1].style.display = "block";
		    setTimeout(showSlides, 2000);
		} ,3500);
	});	
}

$(document).ready(main);