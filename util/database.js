const  mysql = require('mysql2')
const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  database : 'node-complited',
  password :'Parth@Sagar26'
})
module.exports = pool.promise();