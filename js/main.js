// Dropdown Menu

var toggleMenu = document.querySelector('.toggle-menu');
var toggleButton = document.querySelector('.toggle-button');
var header = document.querySelector('header');

toggleButton.addEventListener('click', function(e){
	toggleMenu.classList.toggle('pull-menu-out');
	toggleButton.classList.toggle('change-button');
	e.stopPropagation();
})

header.addEventListener('click', function(e){
	// Close the dropdown menu 
	if (toggleMenu.classList.contains('pull-menu-out')) {
		toggleMenu.classList.remove('pull-menu-out');
		toggleButton.classList.toggle('change-button');
		e.stopPropagation();
	}
})

toggleMenu.addEventListener('click', function(e){
	toggleMenu.classList.toggle('pull-menu-out');
	toggleButton.classList.toggle('change-button');
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

// var goMyStory = document.querySelector("#go-to-my-story");
// var myStory = document.querySelector("#my-story");

// goMyStory.addEventListener('click', function(e) {
// 	console.log($("#my-story").scrollTop());
// })

// $("#go-to-my-story").click(function(){
//     alert($("#my-story").scrollTop());
// });