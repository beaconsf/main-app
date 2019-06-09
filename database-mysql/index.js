const mysql = require('mysql');
const { mysqlConfig } = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);

const selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
