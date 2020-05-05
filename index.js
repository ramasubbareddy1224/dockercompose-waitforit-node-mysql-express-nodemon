var express = require('express');
var mysql=require('mysql');
var app = express();

app.get('/mysql', function (req, res) {
    var con = mysql.createConnection({
        host: "testmysql",
        user: "root",
        password: "mysql123",
        port:"3306",
        database:"hr"
      });
      con.connect(function(err) {
        if (err) throw err;
        con.query("select * from employee",function(err,result,fields){
          if (err) throw err;
          res.send(result); 
        })
             
      });
});

app.listen(9030, function () {
    console.log('App listening on port 9030!');
});