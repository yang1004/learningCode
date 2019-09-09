/*
* @Author: mac
* @Date:   2019-08-01 21:16:40
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 21:21:28
*/
const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('express users get')
})
router.post('/', function (req, res) {
  res.send('express users post')
})
router.put('/', function (req, res) {
  res.send('express users put')
})
router.delete('/', function (req, res) {
  res.send('express users delete')
})



module.exports = router;