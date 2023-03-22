//Updates mutilple records (All the enteries with the condition)
const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = await db.updateMany(
    { name: "max1" },
    { $set: { name: "Redmi pro", price: 600 } }
  );
  if (result.acknowledged) {
    console.warn("Data Updated.");
  }
};

updateData();

//Updates Single Record even the condition provided has multiple enteries only one entry wil be updated.
/*const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "max1" },
    { $set: { name: "Redmi pro", price: 600 } }
  );
  if (result.acknowledged) {
    console.warn("Data Updated.");
  }
};

updateData();*/
