/*
* @Author: mac
* @Date:   2019-07-24 15:05:55
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 13:54:52
*/
//buffer 是一个存放二进制数据的容器(类似于数组)

const buf1 = Buffer.from('z');

console.log(buf1)//<Buffer 7a>
//一个英文字母=2个16进制数
/*
	1 个0或者1 = 1bit
	8bit = 1B = 2个16进制数
 */

const buf2 = Buffer.from('好');
console.log(buf2)//<Buffer e5 a5 bd>
//一个汉字3个字节


const buf3 = Buffer.alloc(10);
console.log(buf3)//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf3[0]=11//10进制
console.log(buf3)//<Buffer 0b 00 00 00 00 00 00 00 00 00>
buf3[1]=0xab//16进制
console.log(buf3)//<Buffer 0b ab 00 00 00 00 00 00 00 00>
buf3[9]=0xfa;
console.log(buf3)//<Buffer 0b ab 00 00 00 00 00 00 00 fa>

const buf4 = Buffer.alloc(3);
buf4[0] = 0xe5;
buf4[1] = 0xa5;
buf4[2] = 0xbd;
console.log(buf4.toString())