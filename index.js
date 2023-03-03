
// import {x , y} from './app'
// console.log('sub')
// var a = 20
// var b = 30 
// var c = 40 
// console.log(a+b+c)
// duble equal (==) matches value in both side while triple equal (===) matches data-type and values as well .
// In nodejs we can not use import function to import data from other files because it i not allowed in node js as it is allowed in javaScript
// we can import the data from another file as object (using module.exports ) in other file and  ussing required function in current file .



// const app = require('./app')
// console.log(app)
// console.log(app.z())

// 88888888   filter function ***************
// const arr = [2,3,45,6,68,100 ,400 ,33 ,345 ,36,3 ,3]
//  let res = arr.filter((item)=>{
//     // console.log(item)
// // return item===3
// return item>=3
// })
// console.log(res)



// core modules ex - fs , http , console, buffer etc .
// the module which we not need to import are global module(ex - console) , and which module neede to import are non-globla module (ex - fs, http ,buffre)
// how to create file ussing fs module's writeFileSync function *************************

// const fs  = require('fs')  //it is advised to use requir function at the top of code but not necessary.
// fs.writeFileSync("hello.txt" , "code step by step" );
// fs.writeFileSync("hello.txt" , "helplo siddhartha verma " );
// fs.writeFileSync("helloSID.txt" , "helplo siddhartha verma how are you i hope youarre good " );
// console.log( "==>", __dirname)
// console.log( "==>", __filename)

// const gs= require('fs').writeFileSync ;
// gs("abc.txt" , "id sduffjwufne fnifjeif fune") ;

// making basic server ussing http module .*****************************

// const http = require('http')//*************************************************** */
// http.createServer((req , resp)=>{
//     resp.write("siddhartha verma is a good student of iert allhabad")
//     resp.write("<h1> this is an html h1 tag</h1>")
//     resp.end() ;
// }).listen(4500);
/////////////////////////////orrrrr////////////////////
// function f1(req , resp){
//     resp.write("<h1>this is a html page created by siddhartha veram </h1>")
//     resp.end()
// }
// http.createServer(f1).listen(4500);

// ******* package.json is a file that contains the details(code related ex- project name , version  ,repositries , command  , packages used , etc.) of your project  if you give your code to other then to know that which packages you uses in your project, he can visit package.json and install these by command npm install */

// **************cli-color package ************ */
// var colors = require('colors');
// console.log("hello".bgRed)

// ****the modules you dont't want to push over the repositry ,mention here in .gitignore file (as node module are mentioned below ) and all the mentioned modules would not be pushed over the repositry but as they will mention in package.json ,so on running npm install command all the module will be installed.
// insalling nodemon module/package is like installing live server thhat continuously runs your node js code with reloding everytime. 

// console.log('sidifjjdnuf  siddhartha verma is student of iert allahabad now iert prayagraj')

// *********making API*************** */

// const http = require('http')
// const data = require('./data')
// http.createServer((req,resp)=>{
//     resp.writeHead(200, {'content-type':'application\json'})
//     resp.write(JSON.stringify(data));
//     resp.end() ;
// }).listen(4500)

// console.log(process.argv[1]);


// const { Router } = require('express');
// creating and removing/deleting files ussing command line  and process.argv function of console object*************************

// const fs = require('fs');
// const input = process.argv;
// if(input[2]=='add'){

//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('invalid iput')
// }


// ********************** show files and list of files */
// const fs = require('fs')
// // fs.writeFileSync('apple.txt', 'this is sn apple file')
// const path = require('path')
// const dirPath = path.join(__dirname , 'files')
// // for(i = 0 ; i<5 ; i++){
// // fs.writeFileSync("hello"+i+".txt","a simple text file is this fuhgb gfghdu 8bfnn")
// // }

// fs.readdir(dirPath,(err , files)=>{
//   files.forEach((item)=>{
//     console.log('file name is ', item)
//   })
// } )

// you can not accecc the data of other drives like c d etc you can only access the data of the folders on the web server

// ************************CRUD(create,rename,delete,unlink,update) */

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'crud')
// const filePath = `${dirPath}/applefruit.txt` ;
// fs.writeFileSync(filePath , 'this is simple text file') ;
// fs.readFile(filePath, 'utf8',(err ,item)=>{
//   console.log(item)
// })
// fs.appendFile(filePath, 'this text is added ', (err)=>{
//   if(!err) console.log('file isupdated')
// })
// fs.rename(filePath,`${dirPath}/fruits.txt`, (err)=>{
//   if(!err) console.log('filename is updated')
// })
// fs.unlinkSync(`${dirPath}/fruits.txt`)
// ////////////////////////////////////////////////////////////////////////////////////////
// asynchronus programming , drawback , resolve by promises , etc./////////
// internal working of node js ussing call stack  , call back and api /////////
// console.log("starting up")

// setTimeout(()=>{
//   console.log("2 second log ")
// },2000)

// setTimeout(()=>{
//   console.log("0 second log ")
// },0)
// console.log("finishing up up")

// the out put is dffrent as set time out is the part of cpp  . because all the inherited function (that are not core ) firstly went in node api(application programming interfac and here interface is b/w nodejs and cpp hence ) block and node api went in call stack when it got completely empty  even there no main function/////////////


// //////as angular is js framework simillarly expressJs is a nodeJs frame work .////////////////////

// ////making simple api ussing expressJs and handling query from user and giving response by server ///////////////
// const express = require('express')
// const app = express();//here app is called as initillazation function of express//////

// app.get("", (req,resp)=>{
//   console.log("data sent by browser ===>>>", req.query.name)
// resp.send('hello, and welcome '+  req.query.name) ;
// })

// app.get('/about', (req,resp)=>{
//   resp.send('hello, this is about page') ;
//   })

//   app.get('/help', (req,resp)=>{
//     resp.send('hello, this is help page welcome') ;
//     })
//   app.listen(5000);
// ///////////////////////////////////////////////

// ///////////////how to display/render HTML and JSON data///////////////

// const express = require('express')
// const app = express();

// app.get("", (req, resp) => {
//   resp.send("<h1>hello, and welcome to the home page</h1>");
// })

// app.get('/about', (req, resp) => {
//   resp.send(`
//   <input type = "text"  placeholder = "userName" value= "${req.query.name}"/>
//   <button>click here </button>
//   <a href = "/">go to home page</a><br>
//   <a href = "/help">go to help page</a>
  
//    `);
  
// })

// app.get('/help', (req, resp) => {
//   resp.send([
//     {
//       name: 'siddhartha',
//       email: 'siddharthaverma6213@gmail.com'
//     },
//     {
//       name: 'siddhartha verma ',
//       email: 'siddharth3@gmail.com'
//     }

//   ]);
// })
// app.listen(5000);

// ///////////////////////////////////sattic file serving ////////////
// const express  = require('express')
// const app = express()
//  const path = require('path')
//  const publicPath = path.join(__dirname,'public') ;
// app.use(express.static(publicPath))
// app.listen(5000)

// ////////////////////////how to remove extension from url during request ////////////
// const express  = require('express')
// const app = express()
//  const path = require('path')
//  const publicPath = path.join(__dirname,'public') ;
// app.use(express.static(publicPath))
// app.get('' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/index.html`)

// })
// app.get('/about' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/about.html`)

// })
// app.get('/help' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/help.html`)

// })
// app.get('*' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/errorpage.html`)

// })
// app.listen(5000)

// ///////////////dyanmic routing or making dyanmic pages  ussing ejs engine/template engine ///////////////
// const express  = require('express')
// const app = express()
//  const path = require('path')
//  const publicPath = path.join(__dirname,'public') ;

//  app.set('view engine' , 'ejs');//telling node js that we are ussing ejs package of template/view engiine.
// app.get('' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/index.html`)

// })
// app.get('/profile' , (req,resp)=>{
//   const user={
//     name: 'siddhartha verma ',
//     college: 'iert allahabad',
//     city: 'prayagraj',
//     skills:['html', 'css','js','nodeJs']
//   }
// resp.render('profile', {user});

// })
// app.get('/login',(req,resp)=>{
// resp.render('login')
// })
// app.get('/about' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/about.html`)

// })
// app.get('/help' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/help.html`)

// })
// app.get('*' , (req,resp)=>{
//   resp.sendFile(`${publicPath}/errorpage.html`)

// })
// app.listen(5500);


// //////////////////middleware uses when wwe need to change or udate between request and response and check authentication ////////////////////////////////////////////////
// ///////////////application level meiddlewere apply globally on every routes///////////////
// const express = require('express')
// const app = express()

// const reqFilter = (req,resp,next)=>{
 
//   if(!req.query.age){
//     resp.send("please provide age")
//   }
//   else if(req.query.age<18){
//     resp.send("you cn not access this page ")
//   }
//   else{
//     next();
//   }
 
// }
// app.use(reqFilter) ;

// app.get('/',(req,resp)=>{
//   resp.send('welcome ro home page')
// })
// app.get('/users',(req,resp)=>{
//   resp.send('welcome to users page')
// })
// app.get('/about',(req,resp)=>{
//   resp.send('welcome to about page')
// })
// app.listen(5000)
// ////////////////////////////////////////////// rout level middlewere apply on specific routes for which you passes middlewere as parametere////////////////////////////
// const express = require('express')
// const app = express()

// const reqFilter = (req,resp,next)=>{
 
//   if(!req.query.age){
//     resp.send("please provide age")
//   }
//   else if(req.query.age<18){
//     resp.send("you cn not access this page ")
//   }
//   else{
//     next();
//   }
 
// }


// app.get('/',(req,resp)=>{
//   resp.send('welcome ro home page')
// })
// app.get('/users',reqFilter,(req,resp)=>{
//   resp.send('welcome to users page')
// })
// app.get('/about',(req,resp)=>{
//   resp.send('welcome to about page')
// })
// app.listen(5000)
// ///////////////////////////////middlewere from other file///////////////
// const express = require('express')
// const reqFilter = require('./middlewere')
// const app = express()
// // const route = express.Router()
// route.use(reqFilter)


// app.get('/',(req,resp)=>{
//   resp.send('welcome ro home page')
// })
// app.get('/users',(req,resp)=>{
//   resp.send('welcome to users page')
// })
// route.get('/about',(req,resp)=>{
//   resp.send('welcome to about page')
// })
// route.get('/contacts',(req,resp)=>{
//   resp.send('welcome to contacts page')
// })
// // app.use('/',route)
// // app.use('/about',route)
// app.listen(5000)
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////MONGODB TUTORIAL from code-step-by-step///////////////////////////////////////
// mongodb package/mongodb driver if you installed by "mongodb -i npm" then you can coneect mongodb database with nodejs.//////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////this is the code to connect mongodb with nodeJs it can be in oter file also that can be exported to this file.///////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const MongoClient = require('mongodb').MongoClient ;
// /////////////or///////////////
// const {MongoClient}= require('mongodb')////accessing mongoClient class of mongodb package
// //connection url//
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url);
// // Database name//
// const database = 'e-com'
// // connect ussing mongoClient//
//  async function dbConnect(){
//     let result =  await client.connect();
//         db = result.db('e-com')
//            return db.collection('products')
//         //    let data  = await collection.find({name:'m-u10'}).toArray()
//         //    console.log(data)
// }
// // dbConnect().then((resp)=>{
// // resp.find().toArray().then((data)=>{
// //     console.warn(data)
// // })
// // })
// // console.warn(dbConnect)


// const main = async()=>{
//     // console.log("main function called")
//     let data = await dbConnect()
//     data = await data.find().toArray()

//     console.warn(data)
// }
// main()
// /////////////////////////////////////////////////////////
// const dbConnect = require('./mongodb')


// const main = async()=>{
//     // console.log("main function called")
//     let data = await dbConnect()
//     data = await data.find().toArray()

//     console.warn(data)
// }
// main()
// ///////////////////////////////////////////

// const dbConnect = require('./mongodb')
// dbConnect().then((resp)=>{
// resp.find().toArray().then((data)=>{
//     console.warn(data)
// })
// })
// console.warn(dbConnect)

// /////////////Mongoose tutorial CRUD OPERATION in  mongodb ussing nodeJs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //mongose is a tool that help to connect mongodb to node js and ussing mongoose module you can easily perform opeations over the database(mongodb) as comare to ussing traditional method .

// const mongoose = require('mongoose')

// const saveInDB=async ()=>{
//    await mongoose.connect('mongodb://localhost:27017/e-com')
//    const productSchema = new mongoose.Schema({
//        name:String,
//        price:Number
//    })
// const productsModel = mongoose.model('products', productSchema)
// let data = new productsModel({name:"m-5", price:"2500" })
// let result =await  data.save()
// console.log(result)

// }
// const updateInDB = async ()=>{
//     const product = mongoose.model('products', productSchema)
//     let data = await product.updateOne({name:"realme c2"},{$set:{price:"8000"}})
//     console.log(data)
// }
// updateInDB()
