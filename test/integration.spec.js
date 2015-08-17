var chp = require('child_process');
//var npm = require('npm');
var path = require('path');

var expect = require('chai').expect;

var cliPath = 'bin/cli.js';

describe("lnkr", function () {
	describe.skip("after installation", function () {

		before(function (done) {
			npm.load(done);
		});

		before(function (done) {
			//@todo npm refuses to install itself as dependency, tmp dir should be used for test
			npm.commands.install(['lnkr'], done)
		});

		it("should provide npm executable as lnkr", function (done) {
			var options = {};
			chp.execFile('node_modules/.bin/lnkr', options, done);
		});
	});

	it("should provide cli executalbe", function (done) {
		chp.execFile(cliPath, done);
	});

	describe('when launched without args', function () {

		it("should show usage info", function (done) {
			run(checkOutput);
			function checkOutput(error, stdout, stderr) {
				expect(error).to.not.be.true;
				expect(stderr).to.be.empty;
				expect(stdout).to.have.string('usage:');
				done();
			}
		});
	})
});

function run() {
	var args = [].slice.apply(arguments);
	var callback = args.pop();
	var cwd = 'tmp'; //@todo create new tmp dir for each run
	var options = {
		timeout: 1000,
		cwd: cwd
	};
	var execPath = path.relative(cwd, cliPath);
	console.log('exec', execPath)
	chp.execFile(execPath, args, options, handler);

	function handler(error, stdout, stderr) {
		console.log('res', {
			error: error,
			stdout: stdout,
			stderr: stderr
		});
		if (error) {
			return callback(error);
		}
		return callback(null, stdout);
	}
}
