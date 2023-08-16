const  mysql = require('mysql2')
const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  database : 'node-comlited',
  password :'Parth@Sagar26'
})
module.exports = pool.promise();