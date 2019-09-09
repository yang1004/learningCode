/*
* @Author: mac
* @Date:   2019-07-31 16:03:51
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 17:43:02
*/
var express = require('express')
var app = express()

app.use(express.static('public'));

app.all('/',(req,res,next)=>{
	console.log('do something...')
	next()
})

app.get('/users/:userId/books/:bookId', function (req, res){
	console.log(req.params)
  res.send('res send get')
})

app.get('/', function (req, res){
	console.log(req.query)
  res.send('res send get')
})
app.post('/', function (req, res) {
  res.send('res send post')
})
app.put('/', function (req, res) {
  res.send('res send put')
})
app.delete('/', function (req, res) {
  res.send('res send delete')
})

app.listen(3000)