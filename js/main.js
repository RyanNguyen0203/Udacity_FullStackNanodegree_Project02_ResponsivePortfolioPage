$(document).ready(function(){

	// Make semantic elements compatible with older versions of IE
	document.createElement('article');
	document.createElement('section');
	document.createElement('aside');
	document.createElement('hgroup');
	document.createElement('nav');
	document.createElement('header');
	document.createElement('footer');
	document.createElement('figure');
	document.createElement('figcaption');

	// Dropdown Menu
	var toggleMenu = document.querySelector('.toggle-menu');
	var toggleButton = document.querySelector('.toggle-button');
	var header = document.querySelector('header');
	var headerContainer = document.querySelector('.header-container');

	toggleButton.addEventListener('click', function(e){
		toggleMenu.classList.toggle('pull-menu-out');
		toggleButton.classList.toggle('change-button');
		if ($('.header-container').offset().top != 0) {
			headerContainer.classList.toggle('header-on-scroll');
		}
		e.stopPropagation();
	})

	// Close the dropdown menu when user clicks on header
	header.addEventListener('click', function(e){
		// Close the dropdown menu
		if (toggleMenu.classList.contains('pull-menu-out')) {
			toggleMenu.classList.remove('pull-menu-out');
			toggleButton.classList.toggle('change-button');
			if ($('.header-container').offset().top != 0) {
				headerContainer.classList.toggle('header-on-scroll');
			}
			e.stopPropagation();
		}
	})

	// Close the dropdown menu when user clicks on navigation links
	$('.toggle-menu ul li a').click(function(e){
		toggleMenu.classList.toggle('pull-menu-out');
		toggleButton.classList.toggle('change-button');
		if ($('.header-container').offset().top != 0) {
			headerContainer.classList.toggle('header-on-scroll');
		}
		e.stopPropagation();
	})

	// Slideshow (Testimonials)
	var slides = document.getElementsByClassName("slide");
	var len = slides.length;
	var next = document.getElementById("next");
	var previous = document.getElementById("previous");

	for (var i=0; i<len; i++) {
		slides[i].classList.toggle('slide-disappear');
	}

	// Turn on the first slide by default
	slides[0].classList.toggle('slide-disappear');
	var slide_shown = 0;

	next.addEventListener('click', function(e){
		// Hide the slide that is being shown
		slides[slide_shown].classList.toggle('slide-disappear');

		// Show the next slide
		if (slide_shown < len-1) {
			slides[slide_shown+1].classList.toggle('slide-disappear');
			slide_shown ++;
		} else {
			// slides[len-1].classList.toggle('slide-disappear');
			slides[0].classList.toggle('slide-disappear');
			slide_shown = 0;
		}
		e.stopPropagation();
	})


	previous.addEventListener('click', function(e){
		// Hide the slide that is being shown
		slides[slide_shown].classList.toggle('slide-disappear');

		// Show the next slide
		if (slide_shown > 0) {
			slides[slide_shown-1].classList.toggle('slide-disappear');
			slide_shown --;
		} else {
			// slides[len-1].classList.toggle('slide-disappear');
			slides[len-1].classList.toggle('slide-disappear');
			slide_shown = len-1;
		}
		e.stopPropagation();
	})

	// Scroll to section from navbar
	$(".header-logo").click(function() {
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});

	$(".go-to-my-story").click(function() {
		$('html, body').animate({
			scrollTop: $(".my-story").offset().top-150
		}, 500);
	});

	$(".go-to-featured-work").click(function() {
		$('html, body').animate({
			scrollTop: $(".featured-work").offset().top-300
		}, 500);
	});

	$(".go-to-testimonials").click(function() {
		$('html, body').animate({
			scrollTop: $(".testimonials").offset().top-150
		}, 500);
	});

	$(".go-to-connect").click(function() {
		$('html, body').animate({
			scrollTop: $(".connect").offset().top
		}, 500);
	});


	// Make the header transparent when the user start scrolling
	(function( $ ) {
		$(function() {
			$( window ).scroll(function() {
				/* Make the header bar transparent
				when the user starts scrolling */
				$('.header-container').addClass('header-on-scroll');
				clearTimeout( $.data( this, "scrollCheck" ) );
				$.data( this, "scrollCheck", setTimeout(function() {
					/* When scrolling stops, if header bar is at its
					original position, remove transparency*/
					if ($('.header-container').offset().top == 0) {
						$('.header-container').removeClass('header-on-scroll');
					}
				}, 50) );
			});

		});

	})( jQuery );

})



