var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newmessage', { title: "New Message" });
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
  res.render('newmessage', { title: "New Message" });
});

module.exports = router;