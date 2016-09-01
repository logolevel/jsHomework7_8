$(document).ready(function() {
	/* tabs */
    $(".tabs__link").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("tabs__current");
        $(this).parent().siblings().removeClass("tabs__current");
        var tab = $(this).attr("href");
        $(".tabs__content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

/* tooltips */
//function show tooltip
	var showTool = function showTooltip() {
		name = $(this).attr('name');
		$('label.fieldHint[for="'+name+'"]').fadeIn('slow');
	};
//function hide tooltip
	var hideTool = function hideTooltip() {
		var name = $(this).attr('name');
		$('label.fieldHint[for="'+name+'"]').fadeOut('slow');
	};

//focus
		$('#myForm input').focus(showTool)
		.blur(hideTool);

//hover
		$('#myForm input').hover(showTool, hideTool);
		
});

