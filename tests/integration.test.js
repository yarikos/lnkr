'use strict';

const test = require('tape-promise/tape');
const _ = require('lodash');
const shelltest = require('shelltest');

const cliPath = 'bin/cli.js ';


when('lnkr called without any arguments', () => {
    it('should show usage info', () => {
        return runCmd(cliPath).args()
            .check({
                stdout: 'usage:',
                stderr: '',
                exitCode: 0
            });
    });
});


when('lnkr init is called', () => {
    implementation(() => runCmd(cliPath).args(' init'));

    on('empty folder', () => {
        setup(() => initEmptyFolder());


        it('')
    })
});


`
when lnkr called without any argument
    it should show usage info
    
when lnkr 
    init is called
        on an empty folder
            it should 
                create hidden folder .lnkr
                    with config file in it
                        which contain an empty object
                show 'init'
        on folder, when lnkr was already initialized
            it should
                not change existing lnkr config
                show error message 'current folder already inited'           
`
;
