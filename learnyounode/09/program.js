var	mymodule = require('./mymodule.js'),
    urls = process.argv.slice(2),
    done = 0,
    output = [];


for(var i = 0; i < urls.length; i++){

	mymodule(process.argv[i+2], i, function (err, data) {
		if(err) {
			console.log('There was an error.');
		} else {
			output[data.index] = data.data.toString();
			done++;
			final();
		}
	});	
}

function final() {
	if(done === urls.length){
		console.log(output.join('\n'));	
	}
}

