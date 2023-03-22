const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  //const result = await db.deleteOne({ name: "Redmi pro" }); //to delete single record
  const result = await db.deleteMany({ name: "Redmi pro" }); //to delete multiple records
  console.warn(result);
  if(result.acknowledged) {
    console.log("Data Deleted.");
  }
};

deleteData();
