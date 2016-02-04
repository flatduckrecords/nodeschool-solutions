var bl   = require("bl");
var http = require("http");

module.exports = function (url, index, callback) {	
	http.get(url, function(response) {		
		response.pipe(bl(function (err, data) { 
			if(err){
				return callback(err)
			} else {
				return callback(null, {"index":index, "data": data})
			}
		}))
	});
}