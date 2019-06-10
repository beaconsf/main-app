const mysql = require('mysql');
const { mysqlConfig } = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('error connection: ', err);
  } else {
    console.log(`connected to mysql as id ${connection.threadId}`);
  }
});

const selectAll = function(callback) {
  connection.query(
    'select * from events inner join users on users.id = events.owner;',
    function(err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

module.exports.selectAll = selectAll;
