var chp = require('child_process');
//var npm = require('npm');
var path = require('path');

var expect = require('chai').expect;
var _ = require('lodash');
var shelltest = require('shelltest');

var cliPath = 'bin/cli.js ';

var subjectFile = 'origin.txt';

describe("lnkr", function() {
    describe.skip("after installation", function() {

        before(function(done) {
            npm.load(done);
        });

        before(function(done) {
            //@todo npm refuses to install itself as dependency, tmp dir should be used for test
            npm.commands.install(['lnkr'], done)
        });

        it("should provide npm executable as lnkr", function(done) {
            var options = {};
            chp.execFile('node_modules/.bin/lnkr', options, done);
        });
    });

    it.skip("should provide cli executalbe", function(done) {
        chp.execFile(cliPath, done);
    });

    describe("when launched without args", function() {

        it("should show usage info", function(done) {

            var expected = new RegExp('^' + _.escapeRegExp('usage:'));

            shelltest()
                .cmd(cliPath)
                .expect('stdout', expected)
                .expect('stderr', '')
                .expect(0)
                .end(done);
        });
    });

    describe("after init", function() {
        beforeEach(setupFixtures);

        //beforeEach();

        it("should write, that lnkr has been initialized", function runInitCmd(done) {

            var expected = new RegExp('^' + _.escapeRegExp('lnkr has been initialized'));

            shelltest()
                .cmd(cliPath + 'init')
                .expect('stdout', expected)
                .expect('stderr', '')
                .expect(0)
                .end();
        });

        describe.skip(", after list", function() {
            it("should show a message that lnkr has no revisions yet", function(done) {
            });
        });
        describe.skip(", after adding a new revision", function() {
            it("should show a message that a new revision has been added", function(done) {
            });


            describe.skip(", after list", function() {
                it("should show a message that lnkr has one revision", function(done) {
                });
            });

            describe.skip(", after adding of another revision", function() {
                it("should show a message that the revision has been added", function(done) {
                });


                describe.skip(", after list", function() {
                    it("should show a message that lnkr has two revisions", function(done) {
                    });
                });
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
