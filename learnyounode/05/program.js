var fs = require('fs');

fs.readFile(process.argv[2], function(err,data) {
	if(err != true){
		var arr = data.toString().split("\n");
		console.log(arr.length-1);
	}
});

//console.log(process.argv[2]);
