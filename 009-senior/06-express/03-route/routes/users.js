/*
* @Author: mac
* @Date:   2019-08-01 09:10:12
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 09:13:05
*/
const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('res send get')
})
router.post('/', function (req, res) {
  res.send('res send post')
})
router.put('/', function (req, res) {
  res.send('res send put')
})
router.delete('/', function (req, res) {
  res.send('res send delete')
})





module.exports =  router;