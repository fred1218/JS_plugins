;(function($) {
	
// initializer for all js/plugins
jQuery(function(){
	// modify body to mark js layout
	$(document.body).addClass("js");
	
	// general tooltips ( http://bassistance.de/jquery-plugins/jquery-plugin-accordion/ )
	$("#docs>li>span>span.tooltip").Tooltip({ delay: 150 });
	
	// quicksearch ( http://rikrikrik.com/jquery/quicksearch/ )
	$("#navAlpha").find(">ul>li").quicksearch({
		focusOnLoad: false,
		delay: 50,
		loaderText: "",
		attached: '#navAlpha',
		formId: "navQS",
		labelText: "Filter"
	});
	
	// quicksearch tooltips
	$("#navQS input")
		.attr("title", 'Filter displayed elements^, eg "$" to display only entries that contain the $ alias. Clear to display all.')
		.Tooltip({delay: 50});
	var m = location.search.match(/q=(.+)/);
	if(m)
		$("#mainQS input").val(m[1]).trigger("keydown");
	
	// navigation tabs ( http://stilbuero.de/tabs/ )
	$('#nav').tabs();
	
	// navigation trees ( http://bassistance.de/jquery-plugins/jquery-plugin-treeview/ )
	$("#navCat>ul").treeview({
		control: "#navCat div.treecontrol",
		collapsed: true
	});
	$("#navAlpha>ul").treeview();

	// highlightfade on navigation to a method ( http://jquery.offput.ca/highlightFade/ )
	$("#nav div li a").click(function() {
		$( this.href.match(/(#.+)/)[1] ).find(">span:first").highlightFade({start: "blue"});
	});
	
	// chili is also used, but it initializes itself ( http://www.mondotondo.com/aercolino/noteslog/?cat=8 )
});

})(jQuery);