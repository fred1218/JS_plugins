$(function() {
	$.fn.watermark = function(mark) {
		return this.each(function() {
			var label, input;
			if (this.tagName != "LABEL") {
				input = $(this);
				label = $('<label for="' + this.id + '">' + (mark || this.title || this.value) + '</label>').insertBefore(this);
			} else {
				label = $(this);
				input = $("#" + label.attr("for"));
			}
			label.addClass("ui-watermark-label");
			label.parent().addClass("ui-watermark-container");
			label.css({
				left: parseInt(input.css("borderLeftWidth")) + parseInt(input.css("paddingLeft")),
				top: parseInt(input.css("borderTopWidth")) + parseInt(input.css("paddingTop"))
			});
			if (input.val()) {
				label.hide();
			}
			if (!input.attr("title")) {
				input.attr("title", label.text());
			}
			input.focus(function() {
				if (!this.value)
					label.fadeOut("fast");
			}).blur(function() {
				if (!this.value)
					label.fadeIn("fast");
			});
		});
	};
});
