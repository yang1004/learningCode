/*
* @Author: mac
* @Date:   2019-07-31 16:03:51
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 09:23:11
*/
var express = require('express')
var app = express()

app.use(express.static('public'));

app.all('/',(req,res,next)=>{
	console.log('do something...')
	next()
})

/*
app.get('/', function (req, res){
  // res.send('res send get')
  // res.send({name:"Tom",age:18})
  res.send('<h1>res send get</h1>')

})
*/
/*
app.get('/', function (req, res){
	// res.end('res end get')
	// res.end('<h1>res end get</h1>')
	res.end({name:"Leo",age:20})//end不能传对象
})
*/
app.get('/', function (req, res){
  // res.json('res send get')
  // res.json('<h1>res send get</h1>')//json方法传html代码片段为字符串
  res.json({name:'Amy',age:30})

})



app.listen(3000)