var bl   = require("bl");
var http = require("http");

module.exports = function (url, callback) {

	http.get(process.argv[2], function(response) {		
		response.pipe(bl(function (err, data) { 
			if(err){
				return callback(err)
			} else {
				return callback(null, data)
			}
		}))
	});
}