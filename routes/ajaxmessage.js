var express = require('express');
var router = express.Router();
var fs = require('fs') 
const path = require('node:path');

/* GET users listing. */
router.get('/', function(req, res) {
  //res.sendFile(__dirname, '../public', 'ajaxpage.html');
  let file = path.join(__dirname , '../public/ajaxpage.html')                                                  
  res.writeHead(200, {"Content-Type": "text/html"});                                                 
  fs.createReadStream(file).pipe(res); 
  //var data = require(__dirname, '../public', 'test.json');
  //res.json(data);
});

router.post('/', function(req, res) {
  var data = require('../public/guestbook.json');
  var id = data.length
  console.log(req.body)
  data.push({
    "id": id,
    "username": req.body.name,
    "country": req.body.country,
    "date": Date.now().toString(),
    "message": req.body.message
  })
  //console.log(data)
  var jsonData = JSON.stringify(data);
  fs.writeFile('./public/guestbook.json', jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
  res.send(jsonData)
});


module.exports = router;