module("ajaxQueue");

test("mode: abort", function() {
	expect(1);
	stop();
	for(var i=0; i < 3; i++) {
		$.ajax({
			mode: "abort",
			url: url("test.php"),
			data: { x: i },
			success: function(response) {
				equals( 2, response );
				start();
			}
		});
	}
});

test("mode: abort, with ports", function() {
	expect(2);
	stop();
	var test = 0;
	for(var i=0; i < 3; i++) { (function() {
		var x = i;
		$.ajax({
			port: "test" + (i % 2),
			mode: "abort",
			url: url("test.php"),
			data: { x: i },
			success: function(response) {
				equals( x, response );
				test += +response;
				if ( test == 3 )
					start();
			}
		});
	})()}
});

test("mode: queue", function() {
	expect(3);
	stop();
	var test = 0;
	for(var i=0; i < 3; i++) {
		$.ajax({
			mode: "queue",
			url: url("test.php"),
			data: { x: i },
			success: function(response) {
				equals( response, test++);
				if(response == 2)
					start();
			}
		});
	}
});

test("mode: queue, with ports", function() {
	expect(2);
	stop();
	var secondCompleted;
	for(var i=0; i < 3; i++) {
		$.ajax({
			port: "test" + (i % 2),
			mode: "queue",
			url: url("test.php"),
			data: { x: i },
			success: function(response) {
				if ( response == 1 )
					secondCompleted = true;
				if ( response == 0 || response == 2 )
					ok( secondCompleted, "Second request must complete before first and third" );
				if(response == 2)
					start();
			}
		});
	}
});

test("mode: sync", function() {
	expect(6);
	stop();
	var test = 0;
	for(var i=0; i < 3; i++) { (function() {
		var x = i;
		$.ajax({
			mode: "sync",
			url: url("test.php"),
			data: { x: i },
			success: function(response) {
				equals( response, test++);
				equals( x, response );
				if(response == 2)
					start();
			}
		});
	})()}
});