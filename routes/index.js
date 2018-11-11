const express = require('express');
const router = express.Router();
const fs = require('fs');

const host = 'localhost';
const port = 8080;

function GetFileNameDeviceX(x) {
  return './content/device_' + x + '.json'
}

function GetFileNameDeviceXY(x, y) {
  return './content/device_' + x + '_' + y + '.json'
}

function GetFileNameDeviceXYZ(x, y, z) {
  return './content/device_' + x + '_' + y + '_' + z + '.json'
}

function FormatJSONContent(content) {
  return JSON.stringify(JSON.parse(content), null, 2);  
}

// host
router.get('/', (req, res) => {
  res.send('use ' + host + ':' + port + '/api/livelist');
});

// /api/livelist
router.route('/api/livelist').get((req, res) => {
  console.log('Call to: get /api/livelist');
  res.setHeader('Content-Type', 'application/json');
  try {
    var content = fs.readFileSync('./content/livelist.json');
    res.send(FormatJSONContent(content));
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/livelist').patch((req, res) => {
  console.log('Call to: patch /api/livelist');
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.writeFileSync('./content/livelist.json', JSON.stringify(req.body, null, 2));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

// /api/device/sfg
router.route('/api/device.de/sfg').get((req, res) => {
  console.log('Call to: get /api/device.de/sfg');
  res.setHeader('Content-Type', 'application/json');
  try {
    var content = fs.readFileSync('./content/livelist.json');
    res.send(FormatJSONContent(content));
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/sfg').patch((req, res) => {
  console.log('Call to: patch /api/device.de/sfg');
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.writeFileSync('./content/sfg.json', JSON.stringify(req.body, null, 2));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

// /api/device/x
router.route('/api/device.de/:x').get((req, res) => {
  var x = req.params.x;
  console.log('Call to: get /api/device.de/' + x);
  res.setHeader('Content-Type', 'application/json');
  try {
    var content = fs.readFileSync(GetFileNameDeviceX(x));
    res.send(FormatJSONContent(content));
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x').patch((req, res) => {
  var x = req.params.x;
  console.log('Call to: patch /api/device.de/' + x);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.writeFileSync(GetFileNameDeviceX(x), JSON.stringify(req.body, null, 2));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x').delete((req, res) => {
  var x = req.params.x;
  console.log('Call to: delete /api/device.de/' + x);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.unlinkSync(GetFileNameDeviceX(x));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

// /api/device/x/y
router.route('/api/device.de/:x/:y').get((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  console.log('Call to: get /api/device.de/' + x + '/' + y);
  res.setHeader('Content-Type', 'application/json');
  try {
    var content = fs.readFileSync(GetFileNameDeviceXY(x, y));
    res.send(FormatJSONContent(content));
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x/:y').patch((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  console.log('Call to: patch /api/device.de/' + x + '/' + y);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.writeFileSync(GetFileNameDeviceXY(x, y), JSON.stringify(req.body, null, 2));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x/:y').delete((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  console.log('Call to: delete /api/device.de/' + x + '/' + y);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.unlinkSync(GetFileNameDeviceXY(x, y));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

// /api/device/x/y/z
router.route('/api/device.de/:x/:y/:z').get((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  var z = req.params.z;
  console.log('Call to: get /api/device.de/' + x + '/' + y + '/' + z);
  res.setHeader('Content-Type', 'application/json');
  try {
    var content = fs.readFileSync(GetFileNameDeviceXYZ(x, y, z));
    res.send(FormatJSONContent(content));
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x/:y/:z').patch((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  var z = req.params.z;
  console.log('Call to: patch /api/device.de/' + x + '/' + y + '/' + z);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.writeFileSync(GetFileNameDeviceXYZ(x, y, z), JSON.stringify(req.body, null, 2));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.route('/api/device.de/:x/:y/:z').delete((req, res) => {
  var x = req.params.x;
  var y = req.params.y;
  var z = req.params.z;
  console.log('Call to: delete /api/device.de/' + x + '/' + y + '/' + z);
  res.setHeader('Content-Type', 'application/json');
  try {
    fs.unlinkSync(GetFileNameDeviceXYZ(x, y, z));
    res.send(req.body);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
});

module.exports = router;