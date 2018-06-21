function start() {

	var sequence = [ 'red', 'yellow', 'yellow', 'green', 'blue' ];

	var current = 0;
	var max = sequence.length;

	var repeater = setInterval(function() { 

		// if first lightup was here, there would be no pause before playback

		console.log("Start of repeater?");
		
		setTimeout(function() {

			console.log("Start of setTimeout");
			
			if (current < max) {
				console.log ("I'm working on [" + sequence[current]  + "]");
				++current;
			}

			else {
				clearInterval(repeater);
				console.log("We're done!");
			}

		}, 500); // pauses for .5s, then runs the function

		console.log("Dimitri said hi!");

	}, 3000); // runs the function every 3s

}


