/*
* @Author: mac
* @Date:   2019-08-01 20:11:26
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 21:21:00
*/
const express = require('express')
const app = express();

const userRouter = require('./route/user.js');
const blogRouter = require('./route/blog.js');

app.use(express.static('public'));


app.use('/users',userRouter)
app.use('/blogs',blogRouter)
/*
app.get('/users', function (req, res) {
	res.send('express users get')
})
app.post('/users', function (req, res) {
  res.send('express users post')
})
app.put('/users', function (req, res) {
  res.send('express users put')
})
app.delete('/users', function (req, res) {
  res.send('express users delete')
})
*/

/*
app.get('/blogs', function (req, res) {
	res.send('express blogs get')
})
app.post('/blogs', function (req, res) {
  res.send('express blogs post')
})
app.put('/blogs', function (req, res) {
  res.send('express blogs put')
})
app.delete('/blogs', function (req, res) {
  res.send('express blogs delete')
})
*/

app.listen(3000)