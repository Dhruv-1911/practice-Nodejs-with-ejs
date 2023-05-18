//Global Object

// function myfunction(a,b){
//    console.log(a+b);
// }
// myfunction(5,6);


//........................................................settimeout
// setTimeout(function(){
// console.log('3 second done')
// },3000)


//........................................................setinterval 
// let time=0;
// const myfunction =()=>{
//     console.log("wait for...");
// }
// myfunction();
// const timer = setInterval(function(){
//    time+=1;
//     console.log(time + "second left");
//     if(time==5){
//       clearInterval(timer)
//     }
// },1000)

// ...........................................................for logger file
// const logg= require("./logger");
// logg.logger('message');
// console.log(logg.url);

// //........................................................ for array file
// const array = require("./array");
// console.log(array.arr(['shaun','rick','paul']));
// console.log(array.adder(2,5));
// console.log(array.adder((array.pi),8));

// const couner = require("./array");
// console.log(couner.arr(['shaun', 'rick', 'paul']));
// console.log(couner.adder(2, 5));
// console.log(couner.pi);
// console.log(couner.adder((couner.pi), 6));


//............................................................path module
// const path =  require("path");
// const pathObj=path.parse(__filename);
// console.log(pathObj);

//............................................................ Os module
// const os = require('os')
// const FreeMemory =os.freemem();
// const totalMemory =os.totalmem();
// const uptotime = os.uptime();
// const hostname = os.hostname();
// const version = os.version();

// console.log(`free memory: ${FreeMemory}`);
// console.log(`total memory: ${totalMemory}`);
// console.log(`time : ${uptotime}`);
// console.log(`Host name : ${hostname}`);
// console.log(`version name : ${version}`);

//..............................................................file system
// const fs = require('fs');
// fs.unlink('writeme.txt',(err)=>{
//     if(err) throw err;
//     console.log("unlink file");
// });

// sync method
// const files = fs.readdirSync('./');
// console.log(files);
//..............................................................read file
// const read = fs.readFileSync('read.txt','utf8')
// console.log(read);

// //.............................................................write file
// fs.writeFileSync('write.txt',read);
//  fs.unlink(write.txt);

// async. method (perfer this method)
// fs.readdir('./',function(err,files){
//     if(err) console.log(err);
//     else console.log(files);
// })

// fs.readFile('read.txt','utf8',(err,data)=>{
//     fs.writeFile('write.txt',data);
// });

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
// fs.rmdir('stuff',function(err){
//     if (err) return;
//     console.log("delete");
// })

// fs.mkdir('heyy',function(err){
//     if(err) throw err;
//     fs.readFile('read.txt','utf8',function(err,data){
//         if(err) throw err;
//         fs.writeFile('./stuff/writeme.txt',data);
//     });

// });

// fs.rmdir('heyy',(err)=>{
//     console.log("delete");
// })

// fs.rmdir('stuff',function(err){
//     if(err){
//         console.log("error");
//     }
// });



//...........................................................Event method
// const EventEmiter = require('events'); // here EventEmiter is a class thats take  a many property
//  const Emit = new EventEmiter(); //Emit is a object

// //register a listener
// Emit.on('message', (arg) => {
//     console.log("listener called",arg);
// });

// // raise event
// Emit.emit('message' ,{id: 1 ,url:"http://mylogger.io/log"});

//..................................................example
// // const EventEmiter = require('events');
// const Event = require('./test')
// const event = new Event();

// // const test=require("./test")
// // test();
// event.on("checkmsg",(arg) => {
//     console.log("this is from eventlistener",arg);
// });
// event.test();

//...................................................example
// const EventEmiter = require("events")
// const Demo = require("./demo")

// const demo = new Demo();

// demo.on('msg', () => {
//     console.log("this is msg");
// })

// demo.demo();




//read stream and write stream

// const http = require('http');
// const Fs = require('fs');


// const myread = Fs.createReadStream(__dirname +'/read.txt','utf8');
// const writeme = Fs.createWriteStream(__dirname +'/writeme.txt')

// myread.on('data',function(chunk){
//     console.log("recive data");
//     // console.log(chunk);
//    writeme.write(chunk);
// });


//pipe using
// myread.pipe(writeme);

// Fs.unlink('writeme.txt',(err)=>{
// if(err) throw err;
//     console.log("unlink");
// })


// const http = require('http');
// const Fs = require('fs');
// const server = http.createServer(function (req, res) {
//     if (req.url == "/") {
//         console.log(`this url is ${req.url}`);
//         res.writeHead(200, { 'content-Type': 'text/plain' });
//         const myread = Fs.createReadStream(__dirname +'/read.txt','utf8');
//         myread.pipe(res);
//         // res.end('hey ! hello');
//     }
//     else if (req.url == "/home") {
//         console.log(`this url is ${req.url}`);
//         res.writeHead(200, { 'content-Type': 'text/html' });
//         const myread = Fs.createReadStream(__dirname +'/index.html');
//         myread.pipe(res);
//         // res.end('<h2>hey this is home section</H2>');
//     }
//     else if (req.url == "/contact") {
//         console.log(`this url is ${req.url}`);
//         res.writeHead(200, { 'content-Type': 'text/html' });
//         const myread = Fs.createReadStream(__dirname +'/contact.html');
//         myread.pipe(res);
//         // res.end('hey this is contact section');
//     }
//     else if (req.url == "/about") {
//         console.log(`this url is ${req.url}`);
//         res.writeHead(200, { 'content-Type': 'application/json' });
//         const myObj=[{
//             id: 1,
//             name: "chhota chhatri",
//             job: "don"
//         },
//         { 
//         id: 2,
//         name: "lalo",
//         job: "nothing"

//         }];
//         res.end(JSON.stringify(myObj));
//     }
//     else {
//         console.log(`this url is ${req.url}`);
//         res.writeHead(404, { 'content-Type': 'text/html' });
//         const myread = Fs.createReadStream(__dirname + '/error.html')
//         myread.pipe(res);
//     }
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log(`now listen a request`);
// });


//express pack...
const express = require('express');
const bodyParser = require('body-parser');// post method
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true })//post method

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));//Middlewares and static file 

app.get(['/', '/home'], (req, res) => {
    res.render('home');
    // res.sendFile(__dirname + "/index.html");
    //   res.send('this is home page');
});
app.get('/contact', (req, res) => {
    console.log(req.query);
    res.render('contact', { qs: req.query });
    res.sendFile(__dirname + "/contact.html");
    // res.send('this is contact page');
});

app.get('/about', (req, res) => {
    res.render('about');
})
app.post('/contact', urlencodedParser, (req, res) => {
    console.log("req.body", req);
    res.render('contact-success', { data: req.body });
    // res.send('this is from post');
});

app.get('/profile/:name', (req, res) => {
    // res.send("you request for the name  " +req.params.name)
    const data = { age: 21, job: "student", hobbies: ['eating', 'reading', 'fighting'] };
    res.render('profile', { person: req.params.name, data: data });
});

app.listen(8000,()=>{
    console.log("listen...8000 port");
});





