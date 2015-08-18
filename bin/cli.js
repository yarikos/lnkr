#! /usr/bin/env node

var program = require('commander');
var lnkr = require('../lnkr');

var cwd = process.cwd();


program
	.version('0.0.1')

program
	.command("init [filename]")
	.description("init lnkr for filename")
	.action(initController)

program
	.command("list [filename]")
	.alias("ls")
	.description("show al verions for filename")
	.action(listController)

program.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp();
}


function initController(filename, options) {
	lnkr.initRepo(cwd);
	console.log('initController', filename, options);
}

function listController(filename, options) {
	var conf = lnkr.readConf(cwd);
	console.log('listController', conf);
}
