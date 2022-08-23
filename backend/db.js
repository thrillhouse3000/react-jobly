"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    password: 'root',
    user: 'root',
    host: 'postgres',
    database: 'jobly',
    connectionString: getDatabaseUri()
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  }); 
}

try{
  db.connect();
} catch(err) {
  console.log(err)
}

module.exports = db;