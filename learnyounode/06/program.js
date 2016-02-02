var mymodule = require('./mymodule.js');
var dir = process.argv[2], ext = process.argv[3];

mymodule(dir, ext, function (err, data) {
	if(err) {
		console.log('There was an error.');
	} else {
		for(x in data){
				console.log(data[x]);	
		}

	}
});

