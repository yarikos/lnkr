'use strict';

var fs = require('fs');
var path = require('path');

//@todo code is written in sync way in order to prototype faster, but it would be nice to refactor in async

var dirName = '.lnkr';
var confName = 'conf.json';


function initRepo(cwd, callback) {
	//@todo how about not existing cwd?
	var dirPath = path.join(cwd, dirName);
	fs.mkdirSync(dirPath);
	writeConf(cwd, {});
}


function writeConf(cwd, obj) {
	var confPath = path.join(cwd, confName);
	var data = serialize(obj);
	fs.writeFileSync(confPath, data);
}


function readConf(cwd) {
	var confPath = path.join(cwd, confName);
	var data = fs.readFileSync(confPath);
	return unserialize(data);
}

function serialize(data) {
	return JSON.stringify(data, null, '  ');
}

function unserialize(data) {
	//@todo add error catching
	return JSON.parse(data);
}

exports.writeConf = writeConf;
exports.readConf = writeConf;
exports.initRepo = initRepo;
