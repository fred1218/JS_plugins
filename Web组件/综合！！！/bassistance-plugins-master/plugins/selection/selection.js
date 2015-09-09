(function($	) {
	$.fn.selection = function(start, end) {
		if (start !== undefined) {
			return this.each(function() {
				if( this.createTextRange ){
					var selRange = this.createTextRange();
					if (end === undefined || start == end) {
						selRange.move("character", start);
						selRange.select();
					} else {
						selRange.collapse(true);
						selRange.moveStart("character", start);
						selRange.moveEnd("character", end);
						selRange.select();
					}
				} else if( this.setSelectionRange ){
					this.setSelectionRange(start, end);
				} else if( this.selectionStart ){
					this.selectionStart = start;
					this.selectionEnd = end;
				}
			});
		}
		var field = this[0];
		if ( field.createTextRange ) {
			var range = document.selection.createRange(),
				orig = field.value,
				teststring = "<->",
				textLength = range.text.length;
			range.text = teststring;
			var caretAt = field.value.indexOf(teststring);
			field.value = orig;
			this.selection(caretAt, caretAt + textLength);
			return {
				start: caretAt,
				end: caretAt + textLength
			}
		} else if( field.selectionStart !== undefined ){
			return {
				start: field.selectionStart,
				end: field.selectionEnd
			}
		}
	};
})(jQuery);
