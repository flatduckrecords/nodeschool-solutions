//console.log(process.argv);
var max = process.argv.length
var total = 0;
for (var i = 2; i<=(max-1);i++){
	total += Number(process.argv[i]);
}
console.log(total);