var mymodule = require('./mymodule.js');
var count = process.argv.length - 2;
var list = [];

for (var i = 2; i < count; i++){
	
	var url = process.argv[i];
	
	mymodule(url, function (err, data) {
		if(err) {
			console.log('There was an error.');
		} else {
			list.push(data);			
			if(list.length === count) {
				for(x in list){
					console.log(list[x].toString());
				}
			}
		
		}
	});
}
