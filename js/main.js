//  Basic syntax for Jquery
// $(selector).action()
// Example: $(this).hide() - hides the current element. 
// Example: $("p").hide() - hides all <p> elements.

$(document).ready(function() {

		$('.menu').click(function(e) {
			e.stopPropagation();  // Stops event from going further
			$('#main_nav').toggleClass('active'); // Adds class of active to main_nav 
		});

		$(document).click(function() {
			$('#main_nav').removeClass('active'); // Removes active class from main_nav
		});
        
    
});