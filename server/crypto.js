// const crypto=require('crypto')
// const buffer = require('buffer');

// let hash=crypto.createHmac('SHA256','hi').update('i am arun credentials').digest('base64')


 
// Creating a private key
// const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// console.log(privateKey, publicKey);
// const data = Buffer.from("mern");
// console.log(data);

// const signature = crypto.sign('SHA256', data , privateKey);
// console.log(signature);
// const check=crypto.verify('SHA256',data,publicKey,signature)
// console.log(check);


//?events emitter
// const event=require('events')

// let emitter=new event.EventEmitter()

// emitter.on('event',()=>{
//   console.log('im event');
// })

// emitter.emit('event')


//?async queue

// const async=require('async')
// let task=[10,20,3,5464,5464]
// const queue=async.queue((task,comp)=>{
//   console.log('im',{task} + Date.now().toLocaleString())
//   // comp(null,{task,re})
// // setInterval(()=>{
// //   console.log('im',{task})
// // },1000)
// },5)
// task.forEach(ta=>{
//   queue.push(ta,(e,{ta,re})=>{
//     console.log(e)
//     console.log(`Finished processing task ${ta}. ${re} tasks remaining`);
//   })
// })
// queue.unshift(task,(e,{t,r})=>{

// })
// The concurrency value is set to one
// Which means that one element is being
// Processed at a particular time

// Importing the async module
const async = require('async');

// Creating a tasks array
const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Defining the queue
const queue = async.queue((task, completed) => {
	console.log("Currently Busy Processing Task " + task);
	
	// Simulating a Complex task
	setTimeout(()=>{
		// The number of tasks to be processed
		const remaining = queue.length();
		completed(null, {task, remaining});
	}, 1000);

}, 1); // The concurrency value is 1


// The queue is idle as there are no elements
// for the queue to process
console.log(`Did the queue start ? ${queue.started}`)

// Adding the each task to the queue
tasks.forEach((task)=>{

	// Adding the 5th task to the head of the
	// queue as it is deemed important by us
if(task == 5){
	queue.unshift(task, (error, {task, remaining})=>{
	if(error){
	console.log(`An error occurred while processing task ${task}`);
	}else {
	console.log(`Finished processing task ${task}. ${remaining} tasks remaining`+Date.now());
	}
	})	
		// Adding the task to the tail in the order of their appearance
} else {
	queue.push(task, (error, {task, remaining})=>{
	if(error){
		console.log(`An error occurred while processing task ${task}`);
	}else {
		console.log(`Finished processing task ${task}. ${remaining} tasks remaining`+Date.now());
	}
	})
	}
});


// Executes the callback when the queue is done processing all the tasks
queue.drain(() => {
	console.log('Successfully processed all items');
})

// The queue is not idle it is processing the tasks asynchronously
console.log(`Did the queue start ? ${queue.started}`)
