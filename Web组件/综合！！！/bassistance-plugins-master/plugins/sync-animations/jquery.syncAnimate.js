jQuery.fn.syncAnimate = function(other, prop, speed, easing, callback){
	if ( !this.length ) return this;

	var totals = {}, ratio = [], cur = jQuery(this), others = jQuery(other),
		opt = jQuery.speed(speed, easing, callback);

	jQuery.each(prop, function(type){
		totals[type] = 0;

		others.each(function(i){
			if ( !ratio[i] ) ratio[i] = {};
			totals[type] += (ratio[i][type] = parseInt( jQuery(this).css(type)) );
		});

		others.each(function(i){
			ratio[i][type] /= totals[type];
		});

		totals[type] += cur.is(":visible") ? parseInt(cur.css(type)) : 0;
	});

	opt.step = function(now, fx){
		var last = totals[fx.prop] - now;
		others.each(function(i){
			var num = Math.round((totals[fx.prop] - now) * ratio[i][fx.prop]);
			jQuery(this).css(fx.prop, i === others.length - 1 ? last : num);
			last -= num;
		});
	};

	opt.complete = opt.old || callback || jQuery.isFunction(easing) && easing;

	return this.animate( prop, opt );
};