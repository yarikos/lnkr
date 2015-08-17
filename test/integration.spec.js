var chp = require('child_process');
//var npm = require('npm');
var path = require('path');

var expect = require('chai').expect;

var cliPath = 'bin/cli.js';

var subjectFile = 'origin.txt';

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

	describe("when launched without args", function () {

		it("should show usage info", function (done) {
			run(checkNoErrors(checkOutput));
			function checkOutput(stdout) {
				expect(stdout).to.have.string('usage:');
				done();
			}
		});
	})

	describe("after init", function () {
		beforeEach(setupFixtures);

		beforeEach(function (done) {
			run(['init', subjectFile], done);
		});

		it.skip("should write, that lnkr has been initialized");

		describe("and after list", function () {
			it("should show", function (done) {
				run([subjectFile, 'list'], checkNoErrors(checkOutput));
				function checkOutput(stdout) {
					expect(stdout).to.have.string('usage:');
					done();
				}
			});
		});
	});
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
	chp.execFile(execPath, args, options, callback);
}

function checkNoErrors(callback) {
	return function callbackForNoErrors(error, stdout, stderr) {
		console.log('res', {
			error: error,
			stdout: stdout,
			stderr: stderr
		});
		expect(error).to.not.exist;
		expect(stderr).to.be.empty;
		callback(stdout);
	}
}

function setupFixtures() {
	//@todo inplmement copying fixtures
}
