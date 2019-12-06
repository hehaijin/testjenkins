'use strict';

var sql=require('mssql');
var conn=require('./test.js');


conn.then( ()=>{
    new sql.Request(conn).query('select * from t1').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
        console.log(err);
    });
} );

