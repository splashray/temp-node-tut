//Global

// __dirname
// __filename
// require
// module
// process

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// }, 1000)

//modules

// const secret = 'Super secret'
// const john ='john'
// const peter = 'peter'

// const names = require('./names.js')
// const sayHi = require('./util.js')
// const data = require('./alter.js')
// require('./mind.js')

// console.log(data)

// sayHi("Susan")
// sayHi(names.FirstName)
// sayHi(names.LastName)

// const os = require('os')

// //info about current user
// const user = os.userInfo()
// console.log(user)

// //method return system uptime in seconds
// console.log(`The system up time is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),

// }
//  console.log(currentOS)

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/','subfolder','test.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute);

// const { readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//     './content/result.txt',
//     `Here is the result : ${first}, ${second}`,
//     {flag: 'a'},
//     {flag: 'b'}

// )

// const { readFile, writeFile} = require('fs')

// console.log('start');
// readFile('./content/first.txt','utf8', (err, result)=> {
//     if(err){
//         console.log(err)
//         return
//     }
//     // console.log(first)
//     const first = result

// readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//     const second = result

//      writeFile('./content/sync.txt',`Here is the result: ${first}, ${second}`,(err, result)=>{
//            if(err){
//             console.log(err);
//             return
//            }           console.log("done with this work")

//         })
//     })
// })
// console.log("starting next work");


