/*
* @Author: mac
* @Date:   2019-07-31 16:03:51
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 09:18:33
*/
const express = require('express')
const app = express();
/*
const usersRouter = require('./routes/users.js')
const blogsRouter = require('./routes/blogs.js')
*/

app.use(express.static('public'));
app.use('/users',require('./routes/users.js'));
app.use('/blogs',require('./routes/blogs.js'));
/*
app.use('/users',usersRouter);
app.use('/blogs',blogsRouter);
*/
/*
app.get('/users', function (req, res) {
  res.send('res send get')
})
app.post('/users', function (req, res) {
  res.send('res send post')
})
app.put('/users', function (req, res) {
  res.send('res send put')
})
app.delete('/users', function (req, res) {
  res.send('res send delete')
})
*/

app.get('/blogs', function (req, res) {
  res.send('res send get')
})
app.post('/blogs', function (req, res) {
  res.send('res send post')
})
app.put('/blogs', function (req, res) {
  res.send('res send put')
})
app.delete('/blogs', function (req, res) {
  res.send('res send delete')
})

app.listen(3000)