/*
* @Author: mac
* @Date:   2019-08-01 21:19:46
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 21:21:35
*/
const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('express blogs get')
})
router.post('/', function (req, res) {
  res.send('express blogs post')
})
router.put('/', function (req, res) {
  res.send('express blogs put')
})
router.delete('/', function (req, res) {
  res.send('express blogs delete')
})



module.exports = router;