var fs = require('fs');

module.exports = function (dir, ext, callback) {

	fs.readdir(process.argv[2], function(err,list) {
		
		if(err) {
			return callback(err)
		} else {
			var data = [];
			for(x in list){
				if(list[x].indexOf(".") !== -1){
					var ext = list[x].split('.')[1];
					if(ext === process.argv[3]){
						data.push(list[x]);
					}
				}
			}
			return callback(null, data);
		}
	});
}
