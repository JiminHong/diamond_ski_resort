//
$(document).ready(function() {
	// when the form changes
	$('#mapForm').change(function(){
		// create variable to hold selected information 
		var selectedContinent = $('#mapForm option:selected').val();

		// if statement 
		if (selectedContinent == "ALL") {
			// show all
			$('a.line_diffic').slideDown(1000);
			$('a.line_easy').slideDown(1000);
		}else{
			// show the lines that are on the selected continent 
			// hide other
			$('a.line_diffic[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.line_diffic[continent != "'+selectedContinent+'"]').slideUp(1000);
			$('a.line_easy[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.line_easy[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
	})

});