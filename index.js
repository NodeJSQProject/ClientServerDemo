var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.listen(5000)

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})
var arrName = Array()

app.post('/insert', urlencodedParser, function(req, res) {
  var name = req.body.name
  arrName.push(name)
  console.log("arr = " + arrName)
  return res.json(arrName)
})

app.get('/getList', urlencodedParser, function(req, res) {

  return res.json(arrName)
})

app.post('/dangky', urlencodedParser, function (req, res) {
  var name = req.body.username
  res.send(name)
})

app.get('/', function(req, res){
  res.send('Hello world!')
})

app.get('/hoten/:name', function(req, res) {
  var ten = req.params.name
 res.send("your name are " + ten)

})

app.get('/tong/:num1/:num2', function(req, res) {
  var num1 = req.params.num1
  num1 = parseInt(num1)

  var num2 = req.params.num2
  num2 = parseInt(num2)

  res.send("" + (num1 + num2))
})
