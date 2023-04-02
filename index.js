const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    //Single field: $or: [{ name: { $regex: req.params.key } }],
    //Multiple fields:
    $or: [{ name: { $regex: req.params.key } }],
    $or: [{ brand: { $regex: req.params.key } }],
    $or: [{ category: { $regex: req.params.key } }],
  });
  res.send(data);
});

app.listen(5000);

//Post, get, delete and API with Mongoose
/*const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (_, res) => {
  let data = await find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  //console.log(req.params);   
  let data = await deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  //console.log(req.params);
  let data = await updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.listen(5000);
*/

//CRUD with Mongoose
/*const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "Vivo V13 pro",
    price: 250,
    brand: "Vivo",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

//saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "mi 8pro" },
    { $set: { price: 820, name: "Vivo V12 pro" } }
  );
  console.log(data);
};

//updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "Vivo V12 pro" });
  console.log(data);
};

//deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  //For all data
  //let data = await Product.find();
  let data = await Product.findOne({ name: "Samsung Pro" });
  console.log(data);
};

findInDB();
*/

//Start with Mongoose
/*const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "Vivo V13 pro",
    price: 250,
    brand: "Vivo",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

main();*/

//Connect Node with mongoDB
/*const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);
const database = "e-comm";

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let respone = await collection.find({}).toArray(); //for all data
  //let respone = await collection.find({name: 'Iphone 10'}).toArray(); //for specific data
  console.log(respone);
}

getData();*/

//Apply Middleware on the group of route
/*const express = require('express');
const reqFilter = require('./Middleware/middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get('/', (_,res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', (_,res) => {
    res.send('Welcome to Users Page');
});

route.get('/about', (_,res) => {
    res.send('Welcome to About Page');
});

route.get('/contact', (_,res) => {
    res.send('Welcome to Contact Page');
});

app.use('/',route);

app.listen(5000);
*/

//Make Middleware in different file
/*const express = require('express');
const reqFilter = require('./Middleware/middleware');
const app = express();

app.get('/', (_,res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', reqFilter, (_,res) => {
    res.send('Welcome to Users Page');
});

app.get('/about', (_,res) => {
    res.send('Welcome to About Page');
});

app.listen(5000);
*/

//Apply middleware on single route
/*const express = require('express');
const app = express();

const reqFilter=(req,res,next) => { //Middleware
     if(!req.query.age) {
        res.send("Please provide age");
     }
     else if(req.query.age < 18) {
        res.send("You cannot access page.")
     }
     else {
        next();
     }
}

app.get('/', (_,res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', reqFilter, (_,res) => {
    res.send('Welcome to Users Page');
});

app.get('/about', (_,res) => {
    res.send('Welcome to About Page');
});

app.listen(5000);
*/
//Middleware
/*const express = require('express');
const app = express();

const reqFilter=(req,res,next) => { //Middleware
     if(!req.query.age) {
        res.send("Please provide age");
     }
     else if(req.query.age < 18) {
        res.send("You cannot access page.")
     }
     else {
        next();
     }
}

app.use(reqFilter);

app.get('/', (_,res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', (_,res) => {
    res.send('Welcome to Users Page');
});

app.listen(5000);
*/

//Dynamic Page
/*const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.get('', (_,res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about', (_,res) => {
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help', (_,res) => {
    res.sendFile(`${publicPath}/help.html`);
});
app.get('/profile', (_,res) => {
    const user = {
        name: 'Anjali',
        age: 21,
        city: 'New Delhi',
        skills:  ['php','js','cpp','java','node'],
    }
    res.render('profile', {user});
});
app.get('/login', (_,res) => {
    res.render('login');
});
app.get('*', (_,res) => {
    res.sendFile(`${publicPath}/notFound.html`);
});

app.listen(5000);
*/

//Template Engine
/*const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.get('',(_,res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(_,res) => {
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(_,res) => {
    res.sendFile(`${publicPath}/help.html`);
});
app.get('/profile',(_,res) => {
    const user = {
        name: 'Anjali',
        age: 21,
        city: 'New Delhi'
    }
    res.render('profile', {user});
});
app.get('*',(_,res) => {
    res.sendFile(`${publicPath}/notFound.html`);
});

app.listen(5000);
*/

//Remove extension from URL
/*const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');
//app.use(express.static(publicPath));

app.get('',(_,res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(_,res) => {
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/help',(_,res) => {
    res.sendFile(`${publicPath}/help.html`);
})
app.get('*',(_,res) => {
    res.sendFile(`${publicPath}/notFound.html`);
})

app.listen(5000);
*/

//Make HTML pages
/*const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.listen(5000);
*/

//Render HTML and JSON data
/*const express = require('express');
const app = express(); //For making express in executable state

app.get('', (req, res) => {
    res.send(`
    <h1>Hello, this is a Home Page.</h1>
    <a href="/about">Go to About Page</a>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Username" value="${req.query.name}" />
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});

app.get('/help', (req,res) => {
    res.send([
        {
            name: 'anjali',
            age: 21
        },
        {
            name: 'amit',
            age: 19
        }
    ])
});

app.listen(5000);
*/

//Req and response's concept
/*const express = require('express');
const app = express(); //For making express in executable state

app.get('', (req, res) => {
    console.log("data sent by browser", req.query.name);
    res.send(`Hello, ${req.query.name}`);
});

app.listen(4500); // example: http://localhost:4500/?name=anjali
*/

/* Express Js import and use
const express = require('express');
const app = express(); //For making express in executable state

app.get('', (req, res) => {
    res.send("Hello, this is a Home Page.");
});

app.get('/about', (req, res) => {
    res.send("Hello, this is an About Page.");
});

app.get('/help', (req,res) => {
    res.send("Hello, this is a Help Page.")
});

app.listen(4500);
*/

//Architecture of Node js
/*console.log("Start...");
setTimeout(()=> {
    console.log("Two Seconds")
}, 2000);
setTimeout(() => {
    console.log("Zero Second");
},0);
console.log("finish..."); */
//Output:
/*
Start...
finish...
Zero Second
Two Seconds
*/

// Handle Asynchronous Data in node js
/*let a=20;
let b=0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    },2000);
})
    
waitingData.then((data) => {
    b=data;
    console.log(a+b);
})*/

//Drawback of being asynchronous
/*let a=20;
let b=0;

setTimeout(() => {
    b=30;
},2000);

console.log(a+b);
*/

/*Asynchronous basics in node js
console.log("start exe ...");
setTimeout(() => {
    console.log("logic exe ...");
}, 2000);
console.log("complete exe ...");
*/

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
