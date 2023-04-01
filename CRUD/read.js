//Read Data from Mongo DB.
//Make file for db connection - mongodb.js and then handle promise
const dbConnect = require("./mongodb");

//Used then() to handle promise: dbConnect() method is a promise also toArray method is also a promise.
/*dbConnect().then((res) => {
    res.find({name: 'Redmi 6'}).toArray().then((data) => {
        console.log(data);
    });
})*/

//async-await is used to handle the promise (USE THIS)
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
