#! /usr/bin/env node

/**
 * [nct : node cli tools]
 * @author: xgqfrms
 * @date: 2017-01-01
 */
console.log(`hello world!`);

const nct = require('./shell');

let username = process.argv[2] ? process.argv[2] : `xgqfrms`;
    repo = process.argv[3] ? process.argv[3] : `cdn`;

nct(username, repo);



