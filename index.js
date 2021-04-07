const { query } = require("express");
const express = require("express");
const app = express();
const pool = require("./db");
const connect = require("./connect.js");

app.use(express.json());

//require('dotenv').config();


//route

var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = `postgres://sagvlgma:zsnnSdlBcDPNxUTLyWvTAiJIXXiiQhwW@queenie.db.elephantsql.com:5432/sagvlgma`//Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});


app.get("/", async(req, res)=>{
    try {
        const banks = await pool.query("SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id WHERE branch LIKE 'RTGS%' ORDER BY ifsc LIMIT 10 OFFSET 0");
        res.send(banks);
    } catch (err) {
        console.log(err.message);
    }
})


app.get("/api/branches/autocomplete", async(req, res)=>{
    var queryparams = req.query;
    
    var q = queryparams.q;
    var limit = queryparams.limit? queryparams.limit : 10;
    var offset = queryparams.offset? queryparams.offset : 0;

    //const banks = await pool.query("SELECT ifsc, branch, address, city, district, state, id, name FRom branches FULL OUTER JOIN banks on branches.bank_id = banks.id ORDER BY ifsc LIMIT ${limit ? limit : 100} OFFSET ${offset ? offset : 0};");
    // const result = connect(q, limit, offset);
    let querys = "";
    if(q){
        let s=q+"%";
        querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id WHERE branch LIKE '"+ s +"' ORDER BY ifsc LIMIT "+ limit +" OFFSET "+ offset;
    }else{
        querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id ORDER BY ifsc LIMIT "+ limit +" OFFSET "+ offset;
    }

    
    const result = await pool.query(querys);
    res.json(result.rows);
})



app.get("/api/branches", async(req, res)=>{
    var queryparams = req.query;
    
    var q = queryparams.q;
    q= q.toUpperCase();
    var limit = queryparams.limit? queryparams.limit : 10;
    var offset = queryparams.offset? queryparams.offset : 0;

    //const banks = await pool.query("SELECT ifsc, branch, address, city, district, state, id, name FRom branches FULL OUTER JOIN banks on branches.bank_id = banks.id ORDER BY ifsc LIMIT ${limit ? limit : 100} OFFSET ${offset ? offset : 0};");
    // const result = connect(q, limit, offset);
    let querys = "";
    if(q){
        querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id WHERE branch LIKE '"+ q +"' ORDER BY ifsc LIMIT "+ limit +" OFFSET "+ offset;
    }else{
        querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id ORDER BY ifsc LIMIT "+ limit +" OFFSET "+ offset;
    }

    
    const result = await pool.query(querys);
    res.json(result.rows);
})




let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}


app.listen(process.env.PORT, ()=>{
    console.log("server connected successfully");
})





