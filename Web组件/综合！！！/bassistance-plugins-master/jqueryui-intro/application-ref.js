$(function() {
	$("#content").tabs();
	
	var maxprice = $("#maxprice");
	$("<div/>").insertAfter(maxprice).slider({
		range: "min",
		value: maxprice.val(),
		min: 1,
		max: 700,
		slide: function(event, ui) {
			maxprice.val(ui.value);
			$("#productlist li").show().filter(function() {
				var price = parseInt($(".price", this).text().replace(/[^\d]/, ""));
				return price > ui.value;
			}).hide();
		}
	});
	
	$("#productlist li").draggable({
		helper: "clone"
	});
	$("#cart").droppable({
		drop: function(event, ui) {
			$(".placeholder", this).remove();
			ui.draggable.clone().appendTo($("ul", this));
		}
	});
	
	$("#search").autocomplete({
		source: $("#productlist a").map(function() {
			return $(this).text();
		}).get()
	});
});
