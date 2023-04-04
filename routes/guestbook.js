var express = require('express');
var router = express.Router();

/* GET guestbook. */
router.get('/', function(req, res) {
  var data = require('../public/guestbook.json');
  //console.log(data)
  var results = '<table class ="pure-table pure-table-striped"> ';
  results +=
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous">'+
  '<link rel="stylesheet" href="stylesheets/style.css" type="text/css">'+
  '<div class="pure-g">'+
  '<thead>'+
  '<tr>'+
    '<th>#</th>'+
    '<th>Name</th>'+
    '<th>Country</th>'+
    '<th>Message</th>'+
  '</tr>'+
  '</thead>'+
  '<tbody>';
  for (var i=0; i < data.length; i++){
    results +=
    '<tr>'+
    '<td>'+data[i].id+'</td>'+
    '<td>'+data[i].username+'</td>'+
    '<td>'+data[i].country+'</td>'+
    '<td>'+data[i].message+'</td>'+
    '</tr>';
  }
  results +=
  '</tbody>'+
  '</div>';
  //console.log(results)
  res.send(results);
});

module.exports = router;
