#!/usr/bin/env node
// node ./index.js --path /var/log/mylog.log --count 30
// node ./index.js -p /var/log/mylog.log -c 30 -z

var argv = require('minimist')(process.argv.slice(2))
,rotate = require('log-rotate')
,undef
;

rotate(argv.path || argv.p,{
	count: argv.count !== undef ? argv.count : argv.c
	,compress: argv.compress !== undef ? argv.compress : argv.z
},function(err,res){
	console.log(new Date);
	if (err) console.log(err);
	if (res) console.log(res);
});
