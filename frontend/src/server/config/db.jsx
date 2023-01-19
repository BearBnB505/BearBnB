var mysql = require('mysql');
const db = mysql.createPool({
  host : '58.239.58.243.3306',
  user : 'java505_team2',
  password : 'java505_team2_1234',
  database : 'java505_team2_final'
});

module.exports = db;