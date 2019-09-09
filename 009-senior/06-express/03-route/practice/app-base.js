/*
* @Author: mac
* @Date:   2019-08-01 20:11:26
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 20:47:36
*/
const express = require('express')
const app = express();

app.use(express.static('public'))

app.all('/',(res,req,next)=>{
	console.log('do something...')
	next()
})

app.get('/', function (req, res,next) {
	console.log('do something of get...');
	next()
},(req,res)=>{
	res.send('express get')
})
app.post('/', function (req, res) {
  res.send('express post')
})
app.put('/', function (req, res) {
  res.send('express put')
})
app.delete('/', function (req, res) {
  res.send('express delete')
})

app.listen(3000)