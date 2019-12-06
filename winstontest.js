'use strict';


const winston = require('winston');

const simple = winston.format.simple;

const info = { level: 'info', message: 'what ever' };
const r = simple(info);
console.log(winston.format.format)