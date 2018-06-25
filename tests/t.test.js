'use strict';

const test = require('tape-promise/tape')


test('aaa', (t) => {

    t.pass('This test will pass.');
    t.end();
    t.test('fbbb', (t) => {
        t.pass('This test b will pass.');
        t.end();
    });
});
