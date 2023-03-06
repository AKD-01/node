console.log("start exe ...");
console.log("logic exe ...");
console.log("complete exe ...");



/* CRUD with file system and also rename
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/Hello.txt`;

//fs.writeFileSync(filePath,"Hello World"); // Create File
/*fs.readFile(filePath, 'utf-8', (err,file) => { //Read File
    console.log(file);
})*/
/*fs.appendFile(filePath, ', I am Anjali!!', (err) =>{ //Update File
    if(!err) console.log("File Updated");
})*/
/*fs.rename(filePath, `${dirPath}/helloWorld.txt`, (err) => { //Rename File
    if(!err) console.log("File Renamed");
})*/
//fs.unlinkSync(`${dirPath}/helloWorld.txt`); //Delete File

/* use path module
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
// makes files in a folder
for(i=0; i<5; i++) 
  {
   fs.writeFileSync(`${dirPath}/hello${i}.txt`, "hello world");
  }
// get file names and print
fs.readdir(dirPath, (err, files) => {
    files.forEach((item)=> {
        console.log("file name is", item);
    })
})*/

/*
create file with input or delete file with input
const fs = require('fs');

const input = process.argv;

if(input[2]=='add') {
fs.writeFileSync(input[3], input[4]);
}

else if(input[2]=='remove') {
    fs.unlinkSync(input[3]);
}

else {
    console.log("invalid input");
}
*/

/* input from command line
console.log(process.argv[2]);
terminal: node ./index.js hello
output: hello 
*/

//Make a simple api
/* 
data.js
const data = [
    {name:'anjali', age: 21},
    {name:'amit', age: 20},
    {name:'alice', age: 23},
]

module.exports=data;

index.js
const http = require("http");
const data = require('./data');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);
*/

/*
// Chalk Package Usage
const chalk = require('chalk');
console.log(chalk.red("Hello"));
*/

/*
Colors Package usage
const colors = require('colors');
console.log("hello".red);
console.log("hello".green);
console.log("You".blue);
*/

/*const http = require('http');

http.createServer((req,res) => {
    res.write("<h1>Hello</h1>");
    res.end();
}).listen(4500);
*/

//App.js
/*
module.exports = {
    x:10,
    y:20,
    z:function() {
        return 10;
    }
}*/

//index.js
/*const app = require('./app');
console.log("Sum");
var a=10;
var b=30;
var c=40;
console.warn(a+b+c);
var x=20 ;
if(x===20) {
    console.log("matched");
}
for(let i=0; i<10; i++) {
    console.log(i);
}

console.log(app.z());

const arr=[2, 4, 7, 1, 3, 8, 3];

let result = arr.filter((item) => {
    return item>4;
})

console.log(result);

const fsi = require('fs').writeFileSync;
fsi("abc.txt","coding");

*/