const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database-mysql');

const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/date/:datetime', function(req, res) {
  const day = req.params.datetime;
  db.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const results = [];
      data.forEach(event => {
        let result = {};
        result.org = event.org;
        result.title = event.title;
        result.user = event.username;
        result.date = day;
        result.loc = [event.lat, event.lng];
        result.categories = [];
        results.push(result);
      });
      res.send(results);
    }
  });
});

app.get('/date', function(req, res) {
  const day = new Date().toISOString().slice(0, 10);
  db.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const results = [];
      data.forEach(event => {
        let result = {};
        result.org = event.org;
        result.title = event.title;
        result.user = event.username;
        result.date = day;
        result.loc = [event.lat, event.lng];
        result.categories = [];
        results.push(result);
      });
      res.send(results);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
