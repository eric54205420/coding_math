window.onload = function () {
	var canvas = document.getElementById("canvas"),
	      context = canvas.getContext("2d"),
	      width = canvas.width = window.innerWidth,
	      height = canvas.height = window.innerHeight;

	
	/*	see the value of sin ( angle ), where
	 	angle increse .01 from 0 to 2 PI
	
	for ( var angle = 0; angle < Math.PI * 2; angle += .01 ) {
		console.log ( Math.sin ( angle ));
	}
	
	*/
	
	// to move the curve we draw to the midle of the window
	// and fix the problem with the upside-down curve because of the
	// browser presentation issue.

	context.translate ( 0, height / 2 );
	context.scale ( 1, -1 );

	// draw the sin wave 	
	for ( var angle = 0; angle < Math.PI * 2; angle += .01 ) {
		var x  = angle * 200,
		       y = Math.sin ( angle ) * 200;
		
		context.fillRect ( x, y, 5, 5 );
	}
	
	
};
