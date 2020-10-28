const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'brcrrbthozhfttu1xppw-mysql.services.clever-cloud.com',
  user: 'u3uw0ehd7kd7gudc',
  password: '85RVuqhsUvBc6zrYTijF',
  database: 'brcrrbthozhfttu1xppw',
  multiStatements: true
});

mysqlConnection.connect(function (err){
 if(err){
 console.log(err)
 }
 else{
  console.log('La base de datos está conectada');
 }
});


module.exports = mysqlConnection;
