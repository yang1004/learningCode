/*
* @Author: mac
* @Date:   2019-07-26 17:32:51
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 17:46:01
*/
const crypto = require('crypto');

// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha256');
// const hash = crypto.createHash('sha512');

const hmac = crypto.createHmac('sha512','zzzzzzzz');

//添加需要加密的明文
// hash.update('12345');
hmac.update('12345');

//输出密文
// console.log(hash.digest('hex'))
console.log(hmac.digest('hex'))