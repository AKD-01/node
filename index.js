const http = require("http");
const data = require('./data');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);










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