'use strict';


var sql = require('mssql');


const config= {
    user: 'test',
    password: 'test',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'test',
};

console.log(Date.now());
var conn= sql.connect(config);
console.log(Date.now());
setTimeout( ()=>console.log(Date.now()),100);
module.exports=conn;