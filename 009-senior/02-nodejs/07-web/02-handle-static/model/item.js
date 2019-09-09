/*
* @Author: mac
* @Date:   2019-07-25 18:54:20
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 19:15:40
*/
const fs = require('fs')
const util = require('util');
const path = require('path');
const pathData = path.normalize(__dirname+"/../data/item.json");

const readFile = util.promisify(fs.readFile);

async function get(){
	const data = await readFile(pathData);
	const arr = JSON.parse(data)
	// console.log(data.toString())
	return arr;
}

module.exports = {
	get
}