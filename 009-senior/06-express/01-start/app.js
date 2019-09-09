/*
* @Author: mac
* @Date:   2019-07-31 16:03:51
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 16:15:28
*/
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)