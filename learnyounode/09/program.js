var	mymodule = require('./mymodule.js'),
    urls = process.argv.slice(2),
    count = urls.length,
    done = 0,
    output = [];
    

for(var i = 0; i < count; i++){

mymodule(process.argv[i+2], i, function (err, data) {
	if(err) {
		console.log('There was an error.');
	} else {
		output[data.index] = data.data.toString();
		done++;
		final();
	}
});


//console.log(output.length);
	
}

function final() {
	if(done === count){
		console.log(output.join('\n'));	
	}
}

