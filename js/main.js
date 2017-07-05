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
	}
})
