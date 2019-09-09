/*
* @Author: mac
* @Date:   2019-07-24 11:37:35
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 13:53:26
*/
/*
const t1 = setTimeout(()=>{
	console.log('setTimeout t1...')
},100)

clearTimeout(t1)

console.log('after t1...')
*/

/*
const t2 = setInterval(()=>{
	console.log('setInterval t2...')
},100)

clearInterval(t2)

console.log('after t2...')
*/

/*
const t3 = setTimeout(()=>{
	console.log('setInterval t3...')
},0)
*/
const t4 = setImmediate(()=>{
	console.log('setImmediate t4...')
})

process.nextTick(()=>{
	console.log('process nextTick...')//同步之后，异步之前
})

console.log('after t4...')