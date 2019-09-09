/*
* @Author: mac
* @Date:   2019-07-22 17:32:31
* @Last Modified by:   mac
* @Last Modified time: 2019-07-22 17:48:25
*/
// const m5 = require('./m5.js');
// const m5 = require('/Users/mac/Desktop/wenzeyang/Web/009-senior/nodejs/01-module/file/m5.js');

// const m8 = require('./m8.json')
// const m9 = require('./m9')


// console.log(m9)


const m5 = require('./m5.js');
const _m5 = require('./m5.js');

console.log(m5)
console.log(_m5)//Node对所有加载过的模块对象都会缓存,二次加载的模块一律采用缓存优先
console.log(_m5==m5)