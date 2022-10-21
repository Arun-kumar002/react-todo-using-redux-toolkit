
const { log } = require('console')
const fs=require('fs')
const http=require('http')
// const {connect}=require('mongodb').MongoClient
const {connect,model,Schema}=require('mongoose')

// fs.readFile('./server.js',{encoding:'utf-8'},(err,data)=>{
//     // console.log(data);
//     fs.writeFile('new.js',data,(err)=>{
//         // console.log(err);
//     })
// })
//?stream example
// let a=fs.createReadStream('server.js',{encoding:'utf-8'})
// let b=fs.createWriteStream('write1.js',{encoding:'utf-8'})
// a.on('data',(chunk)=>{
//     b.write(chunk)
// })
const adminSchema=new Schema({
    
},{timestamps:true})
let modal=model('admin',adminSchema)

//?sumple server
http.createServer(async (req,res)=>{
  if(req.url==='/showdata'){
    let a=fs.createReadStream('server.js',{encoding:'utf-8'})
    let b=fs.createWriteStream('write1.js',{encoding:'utf-8'})
    a.on('data',(chunk)=>{
        res.end(chunk)
    })
  }
  else if(req.url==='/'){
    res.end('home screen')
  }
  else if(req.url==='/showdb'){
        connect('mongodb://localhost:27017/quizspider')
        // let data=db.db('quizspider')
        // let val= await data.collection('admins').findOne({})
        // let pass=val.password
        let data=await modal.findOne({})
        console.log(data);
        let pass=data.password
        res.end(pass)
  }

}).listen(5000)