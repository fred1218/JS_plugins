;(function($) {

	var helper,
		body,
		arrow,
		title;

	$.fn.formtooltip = function(settings) {
		settings = $.extend({}, $.formtooltip.defaults, settings);
		createHelper(settings);
		
		function clear() {
			$(this).css("filter", "");
			$(this).css("opacity", "");
		};
		
		return this.delegate("focusin", settings.type, function() {
			if (!this.attr("title"))
				return;
			body.html(title = this.attr("title"));
			this.attr("title", "");
			var positionParent = settings.positionParent(this);
			var visible = helper.is(":visible");
			
			if (helper.is(":animated"))
				helper.stop().show().fadeTo(settings.fade, helper.data("opacity", clear));
			else
				helper.is(':visible') && parseFloat(helper.css("opacity")) == 1 ? helper.fadeTo(settings.fade, helper.data("opacity"), clear) : helper.fadeIn(settings.fade, clear);
			helper.css({
				top: positionParent.offset().top + positionParent.outerHeight() / 2 - helper.outerHeight() / 2,
				left: positionParent.offset().left + positionParent.width() + ($.isFunction(settings.left) ? settings.left(this) : settings.left)
			});
			arrow.css({
				top: helper.outerHeight() / 2 - arrow.outerHeight() / 2
			});
			
		}).delegate("focusout", settings.type, function() {
			if (helper.is(":hidden"))
				return;
			this.attr("title", title);
			if (helper.is(":animated"))
				helper.stop().fadeTo(settings.fade, 0);
			else
				helper.fadeOut(settings.fade, clear);
		});
	}
	
	function createHelper(settings) {
		helper = $(settings.element).appendTo(document.body);
		helper.data("opacity", helper.css("opacity"));
		body = helper.find(".formtooltip-body");
		arrow = helper.children(".formtooltip-arrow");
		createHelper = function() {};
	}
	
	$.formtooltip = {
		defaults: {
			element: "<div id='formtooltip'><div class='formtooltip-arrow'></div>" + 
						"<div class='formtooltip-box-top'>" +
							"<div class='corner-left'></div>" +
							"<div class='corner-right'></div>" +
							"<div class='border-center'></div>" +
						"</div>" +
						"<div class='formtooltip-box-content'>" +
							"<div class='formtooltip-body'></div>" +
							"<div style='clear:left;'></div>" +
						"</div>" +
						"<div class='formtooltip-box-bottom'>" +
							"<div class='corner-left'></div>" +
							"<div class='corner-right'></div>" +
							"<div class='border-center'></div>" +
						"</div>" +
						+ "</div>",
			positionParent: function(element) {
				return element;
			},
			left: 10,
			type: "input:not(:submit, :checkbox, :radio), textarea, select",
			fade: 250
		}
	}
	
})(jQuery);
