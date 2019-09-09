/*
* @Author: mac
* @Date:   2019-08-01 20:11:26
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 21:02:20
*/
const express = require('express')
const app = express();

app.use(express.static('public'))
///users/52/books/1234
app.get('/users/:userId/books/:bookId', function (req, res) {
	console.log(req.params)
	res.send('express get1')
})

app.get('/', function (req, res) {
	console.log(req.query)
	res.send('express get2')
})


app.listen(3000)