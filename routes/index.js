const express = require('express');
const router = express.Router();
const fs = require('fs');

const host = 'localhost';
const port = 8080;

//var filelivelist = fs.readFileSync('livelist.json');
//var jsonlivelist = JSON.parse(filelivelist);

// host
router.get('/', (req, res) => {
  res.send('use ' + host + ':' + port + '/api/livelist');
});

// /api/livelist
router.route('/api/livelist').get((req, res) => {
  console.log('Call to: get /api/livelist');
  var content = fs.readFileSync('./content/livelist.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(content);
});

router.route('/api/livelist').patch((req, res) => {
  console.log('Call to: patch /api/livelist');
  fs.writeFileSync('./content/livelist.json', JSON.stringify(req.body));
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
});

// /api/device/sfg
router.route('/api/device.de/sfg').get((req, res) => {
  console.log('Call to: get /api/device.de/sfg');
  var content = fs.readFileSync('./content/livelist.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(content);
});

router.route('/api/device.de/sfg').patch((req, res) => {
  console.log('Call to: patch /api/device.de/sfg');
  fs.writeFileSync('./content/sfg.json', JSON.stringify(req.body));
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
});

// /api/device/x
router.route('/api/device.de/:x').get((req, res) => {
  var x = req.params.x;
  console.log('Call to: get /api/device.de/', x);
  var content = fs.readFileSync('./content/device_' + x + '.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(content);
});

router.route('/api/device.de/:x').patch((req, res) => {
  var x = req.params.x;
  console.log('Call to: patch /api/device.de/', x);
  fs.writeFileSync('./content/device_' + x + '.json', JSON.stringify(req.body));
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
});

router.route('/api/device.de/:x').delete((req, res) => {
  var x = req.params.x;
  console.log('Call to: delete /api/device.de/', x);
  res.setHeader('Content-Type', 'application/json');
  res.send("{}");
});

module.exports = router;